import { useTheme } from '../contexts/ThemeContext';

interface SignInScreenProps {
  signIn: () => void;
}

export function SignInScreen({ signIn }: SignInScreenProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="landing-page">
      {/* Animated background elements */}
      <div className="landing-bg-gradient"></div>
      <div className="landing-bg-orb landing-bg-orb-1"></div>
      <div className="landing-bg-orb landing-bg-orb-2"></div>
      <div className="landing-bg-orb landing-bg-orb-3"></div>

      {/* Theme toggle - fixed position */}
      <button
        onClick={toggleTheme}
        className="landing-theme-toggle"
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

      {/* Main content */}
      <div className="landing-container">
        {/* Hero section */}
        <div className="landing-hero">
          <div className="landing-logo-wrapper">
            <div className="landing-logo">
              <svg
                className="landing-logo-icon"
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
          </div>

          <h1 className="landing-title">
            Welcome Back
          </h1>

          <p className="landing-subtitle">
            Sign in to continue your journey with secure, seamless authentication
          </p>
        </div>

        {/* Auth card */}
        <div className="landing-card">
          <div className="landing-card-content">
            <button
              onClick={signIn}
              className="landing-btn landing-btn-primary"
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
              className="landing-btn landing-btn-secondary"
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

          <div className="landing-footer">
            <p className="landing-footer-text">
              Powered by <span className="landing-footer-brand">Subscribe.dev</span>
            </p>
          </div>
        </div>

        {/* Feature highlights */}
        <div className="landing-features">
          <div className="landing-feature">
            <svg className="landing-feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>Secure</span>
          </div>
          <div className="landing-feature">
            <svg className="landing-feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>Fast</span>
          </div>
          <div className="landing-feature">
            <svg className="landing-feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
            <span>Flexible</span>
          </div>
        </div>
      </div>
    </div>
  );
}