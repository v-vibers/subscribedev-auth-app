import { useState, useEffect, useRef } from 'react';
import { useSubscribeDev } from '@subscribe.dev/react';
import './App.css';

function App() {
  const { isSignedIn, signIn, signOut, user, usage, subscribe } = useSubscribeDev();
  const [isDark, setIsDark] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Apply theme to document root
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  // Close sidebar when clicking overlay
  const handleOverlayClick = () => {
    setIsSidebarOpen(false);
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const getUserInitial = () => {
    if (!user?.email) return '?';
    return user.email.charAt(0).toUpperCase();
  };

  const handleSignOut = () => {
    signOut();
    setIsDropdownOpen(false);
    setIsSidebarOpen(false);
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-left">
          {isSignedIn && (
            <button
              className="mobile-menu-btn"
              onClick={() => setIsSidebarOpen(true)}
              aria-label="Open menu"
            >
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          )}
          <div className="logo">My App</div>
        </div>

        <div className="header-right">
          {/* Theme Toggle */}
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? (
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          {/* Auth Section */}
          {!isSignedIn ? (
            <button className="sign-in-btn" onClick={signIn}>
              Sign In
            </button>
          ) : (
            <div className="user-menu" ref={dropdownRef}>
              <button
                className="user-button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
              >
                <div className="user-avatar">
                  {user?.avatarUrl ? (
                    <img src={user.avatarUrl} alt={user.email} />
                  ) : (
                    getUserInitial()
                  )}
                </div>
                <div className="user-info">
                  <div className="user-email">{user?.email}</div>
                  <div className="user-credits">
                    {usage?.remainingCredits ?? 0} credits
                  </div>
                </div>
                <svg className="dropdown-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="dropdown-menu">
                  <button className="dropdown-item" onClick={subscribe!}>
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                    Manage Subscription
                  </button>
                  <div className="dropdown-divider" />
                  <button className="dropdown-item" onClick={handleSignOut}>
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </header>

      {/* Mobile Sidebar */}
      {isSignedIn && (
        <>
          <div
            className={`overlay ${isSidebarOpen ? 'visible' : ''}`}
            onClick={handleOverlayClick}
          />
          <div className={`mobile-sidebar ${isSidebarOpen ? 'open' : ''}`}>
            <div className="sidebar-header">
              <div className="logo">My App</div>
              <button
                className="sidebar-close"
                onClick={() => setIsSidebarOpen(false)}
                aria-label="Close menu"
              >
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="sidebar-content">
              <div className="sidebar-user-info">
                <div className="user-avatar">
                  {user?.avatarUrl ? (
                    <img src={user.avatarUrl} alt={user.email} />
                  ) : (
                    getUserInitial()
                  )}
                </div>
                <div className="sidebar-user-email">{user?.email}</div>
                <div className="sidebar-user-credits">
                  {usage?.remainingCredits ?? 0} credits remaining
                </div>
              </div>

              <div className="sidebar-actions">
                <button className="sidebar-btn" onClick={subscribe!}>
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  Manage Subscription
                </button>
                <button className="sidebar-btn" onClick={handleSignOut}>
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Main Content */}
      <main className="main-content">
        {!isSignedIn ? (
          <div style={{ textAlign: 'center', padding: '3rem 0' }}>
            <h1 style={{ marginBottom: '1rem' }}>Welcome</h1>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
              Please sign in to continue
            </p>
            <button onClick={signIn}>Get Started</button>
          </div>
        ) : (
          <div>
            <h1 style={{ marginBottom: '1rem' }}>Dashboard</h1>
            <p style={{ color: 'var(--text-secondary)' }}>
              You are signed in as {user?.email}
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;