import { useState, useRef, useEffect } from 'react';
import { useSubscribeDev } from '@subscribe.dev/react';
import { Header } from './Header';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

export function AuthenticatedApp() {
  const { client, useStorage } = useSubscribeDev();
  const [messages, setMessages, syncStatus] = useStorage!<Message[]>('chat-history', []);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (content: string) => {
    if (!client) return;

    const userMessage: Message = {
      role: 'user',
      content,
      timestamp: Date.now(),
    };

    setMessages([...messages, userMessage]);
    setIsLoading(true);
    setError(null);

    try {
      const { output } = await client.run('openai/gpt-4o', {
        input: {
          messages: [
            {
              role: 'system',
              content: 'You are a helpful AI assistant. Provide clear, concise, and accurate responses.',
            },
            ...messages.map((m) => ({ role: m.role, content: m.content })),
            { role: 'user', content },
          ],
        },
      });

      const assistantMessage: Message = {
        role: 'assistant',
        content: output[0] as string,
        timestamp: Date.now(),
      };

      setMessages([...messages, userMessage, assistantMessage]);
    } catch (err: any) {
      console.error('Chat error:', err);
      setError(
        err.type === 'insufficient_credits'
          ? 'Insufficient credits. Please upgrade your subscription.'
          : err.type === 'rate_limit_exceeded'
          ? 'Rate limit exceeded. Please try again later.'
          : 'Failed to get response. Please try again.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearChat = () => {
    if (confirm('Are you sure you want to clear the chat history?')) {
      setMessages([]);
    }
  };

  return (
    <div className="chat-app">
      <Header onClearChat={handleClearChat} syncStatus={syncStatus} />

      <main className="chat-main">
        <div className="chat-container">
          {messages.length === 0 ? (
            <div className="chat-empty-state">
              <div className="chat-empty-icon">
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
              </div>
              <h2 className="chat-empty-title">Start a conversation</h2>
              <p className="chat-empty-description">
                Ask me anything! I'm here to help with information, ideas, and answers.
              </p>
              <div className="chat-suggestions">
                <button
                  onClick={() => handleSendMessage('What can you help me with?')}
                  className="chat-suggestion-button"
                >
                  What can you help me with?
                </button>
                <button
                  onClick={() => handleSendMessage('Tell me an interesting fact')}
                  className="chat-suggestion-button"
                >
                  Tell me an interesting fact
                </button>
                <button
                  onClick={() => handleSendMessage('Help me brainstorm ideas')}
                  className="chat-suggestion-button"
                >
                  Help me brainstorm ideas
                </button>
              </div>
            </div>
          ) : (
            <div className="chat-messages">
              {messages.map((message, index) => (
                <ChatMessage
                  key={index}
                  role={message.role}
                  content={message.content}
                  timestamp={message.timestamp}
                />
              ))}
              {isLoading && (
                <div className="chat-message chat-message-assistant">
                  <div className="chat-message-avatar">
                    <svg
                      className="w-full h-full"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <div className="chat-message-content">
                    <div className="chat-loading">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>
      </main>

      <div className="chat-input-area">
        {error && (
          <div className="chat-error">
            <svg
              className="chat-error-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{error}</span>
            <button onClick={() => setError(null)} className="chat-error-close">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        )}
        <ChatInput onSendMessage={handleSendMessage} disabled={isLoading} />
      </div>
    </div>
  );
}