import { useTheme } from '../contexts/ThemeContext';

interface SignInScreenProps {
  signIn: () => void;
}

export function SignInScreen({ signIn }: SignInScreenProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-primary p-4">
      <div className="max-w-md w-full bg-card rounded-2xl shadow-2xl p-8 space-y-6">
        {/* Theme toggle in corner */}
        <div className="flex justify-end">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-tertiary hover:bg-accent transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <svg
                className="w-5 h-5 text-primary"
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
                className="w-5 h-5 text-primary"
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

        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-4">
            <svg
              className="w-8 h-8 text-white"
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
          </div>
          <h1 className="text-3xl font-bold text-primary">Welcome</h1>
          <p className="text-secondary">Sign in to access your account</p>
        </div>

        <div className="space-y-4">
          <button
            onClick={signIn}
            className="w-full btn-primary shadow-lg"
          >
            Sign In
          </button>

          <button
            onClick={signIn}
            className="w-full btn-secondary"
          >
            Create Account
          </button>
        </div>

        <div className="pt-4 border-t border-color">
          <p className="text-xs text-center text-tertiary">
            Powered by Subscribe.dev
          </p>
        </div>
      </div>
    </div>
  );
}