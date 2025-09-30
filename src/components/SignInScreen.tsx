import { useTheme } from '../contexts/ThemeContext';

interface SignInScreenProps {
  signIn: () => void;
}

export function SignInScreen({ signIn }: SignInScreenProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="landing-page">
      {/* Theme toggle fixed in corner */}
      <div className="landing-theme-toggle">
        <button
          onClick={toggleTheme}
          className="theme-toggle-button"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Main content */}
      <div className="landing-content">
        <div className="landing-container">
          {/* Hero Section */}
          <div className="landing-hero">
            <div className="landing-logo-wrapper">
              <div className="landing-logo">
                <svg
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
            </div>

            <h1 className="landing-title">
              Welcome to AI Chat
            </h1>

            <p className="landing-subtitle">
              Your intelligent assistant powered by cutting-edge AI.
              Access powerful models, get instant answers, and unlock creativity.
            </p>

            {/* Feature highlights */}
            <div className="landing-features">
              <div className="landing-feature-item">
                <svg
                  className="landing-feature-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                <span>Lightning Fast</span>
              </div>
              <div className="landing-feature-item">
                <svg
                  className="landing-feature-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                <span>Secure & Private</span>
              </div>
              <div className="landing-feature-item">
                <svg
                  className="landing-feature-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
                <span>Smart Conversations</span>
              </div>
            </div>
          </div>

          {/* Auth Card */}
          <div className="landing-card">
            <div className="landing-card-header">
              <h2 className="landing-card-title">Get Started</h2>
              <p className="landing-card-description">
                Sign in to continue your AI-powered journey
              </p>
            </div>

            <div className="landing-card-actions">
              <button
                onClick={signIn}
                className="landing-button-primary"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
                Sign In
              </button>

              <div className="landing-divider">
                <span>or</span>
              </div>

              <button
                onClick={signIn}
                className="landing-button-secondary"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                  />
                </svg>
                Create Account
              </button>
            </div>

            <div className="landing-card-footer">
              <p className="landing-footer-text">
                Powered by{' '}
                <span className="landing-footer-brand">Subscribe.dev</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}