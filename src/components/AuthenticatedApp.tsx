import { useSubscribeDev } from '@subscribe.dev/react';
import { Header } from './Header';

export function AuthenticatedApp() {
  const { usage, subscriptionStatus, subscribe } = useSubscribeDev();

  return (
    <div className="min-h-screen w-full bg-primary">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          {/* Usage Card */}
          <div className="bg-card rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
              <svg
                className="w-6 h-6 text-secondary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              Usage & Credits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-tertiary rounded-lg p-4 border border-color">
                <p className="text-sm text-secondary font-medium mb-1">
                  Allocated Credits
                </p>
                <p className="text-3xl font-bold text-primary">
                  {usage?.allocatedCredits ?? 0}
                </p>
              </div>
              <div className="bg-tertiary rounded-lg p-4 border border-color">
                <p className="text-sm text-secondary font-medium mb-1">
                  Used Credits
                </p>
                <p className="text-3xl font-bold text-primary">
                  {usage?.usedCredits ?? 0}
                </p>
              </div>
              <div className="bg-tertiary rounded-lg p-4 border border-color">
                <p className="text-sm text-secondary font-medium mb-1">
                  Remaining Credits
                </p>
                <p className="text-3xl font-bold text-primary">
                  {usage?.remainingCredits ?? 0}
                </p>
              </div>
            </div>
          </div>

          {/* Subscription Card */}
          <div className="bg-card rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
              <svg
                className="w-6 h-6 text-secondary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
              Subscription
            </h2>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-secondary">Plan:</span>
                  <span className="font-bold text-primary text-lg">
                    {subscriptionStatus?.plan?.name ?? 'Free'}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-secondary">Status:</span>
                  <span
                    className={`font-semibold px-3 py-1 rounded-full text-sm ${
                      subscriptionStatus?.status === 'active'
                        ? 'bg-green-100 text-green-700'
                        : subscriptionStatus?.status === 'cancelled'
                        ? 'bg-red-100 text-red-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {subscriptionStatus?.status ?? 'none'}
                  </span>
                </div>
                {subscriptionStatus?.plan?.price !== undefined && (
                  <div className="flex items-center gap-2">
                    <span className="text-secondary">Price:</span>
                    <span className="font-bold text-primary">
                      ${subscriptionStatus.plan.price}/month
                    </span>
                  </div>
                )}
              </div>
              <button
                onClick={subscribe!}
                className="btn-primary w-full sm:w-auto"
              >
                Manage Subscription
              </button>
            </div>
          </div>

          {/* Info Card */}
          <div className="bg-card rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-primary mb-4">
              About This App
            </h2>
            <p className="text-secondary leading-relaxed">
              This is a demonstration authentication application built with{' '}
              <span className="font-semibold text-primary">Subscribe.dev</span>
              . It showcases user authentication, subscription management, and usage
              tracking features. The app uses React 18 and integrates seamlessly
              with the Subscribe.dev platform for AI-powered application development.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}