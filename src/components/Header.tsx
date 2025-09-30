import { useSubscribeDev } from '@subscribe.dev/react';
import { useTheme } from '../contexts/ThemeContext';

export function Header() {
  const { user, signOut, usage } = useSubscribeDev();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-card shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: User info */}
          <div className="flex items-center gap-3">
            {user?.avatarUrl ? (
              <img
                src={user.avatarUrl}
                alt="User avatar"
                className="w-10 h-10 rounded-full border-2 border-color"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white font-bold">
                {user?.email?.[0]?.toUpperCase() || 'U'}
              </div>
            )}
            <div className="hidden sm:block">
              <p className="text-primary font-semibold text-sm">
                {user?.email || 'Loading...'}
              </p>
            </div>
          </div>

          {/* Right: Credits, theme toggle, logout */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Credits */}
            <div className="hidden md:flex items-center gap-2 bg-tertiary px-3 py-2 rounded-lg">
              <svg
                className="w-5 h-5 text-secondary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-primary font-semibold text-sm">
                {usage?.remainingCredits ?? 0}
              </span>
              <span className="text-tertiary text-xs hidden lg:inline">
                credits
              </span>
            </div>

            {/* Theme toggle */}
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

            {/* Logout */}
            <button
              onClick={signOut}
              className="px-3 py-2 sm:px-4 rounded-lg bg-accent text-white hover:bg-accent-hover transition-all text-sm font-semibold"
            >
              <span className="hidden sm:inline">Logout</span>
              <svg
                className="w-5 h-5 sm:hidden"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}