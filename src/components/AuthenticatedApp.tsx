import { useSubscribeDev } from '@subscribe.dev/react';

export function AuthenticatedApp() {
  const { user, signOut, usage, subscriptionStatus, subscribe } = useSubscribeDev();

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4">
      <div className="max-w-4xl mx-auto space-y-6 pt-8">
        {/* Header Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              {user?.avatarUrl ? (
                <img
                  src={user.avatarUrl}
                  alt="User avatar"
                  className="w-16 h-16 rounded-full border-4 border-indigo-100"
                />
              ) : (
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                  {user?.email?.[0]?.toUpperCase() || 'U'}
                </div>
              )}
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Welcome back!
                </h1>
                <p className="text-gray-600">{user?.email || 'Loading...'}</p>
                <p className="text-xs text-gray-500 mt-1">
                  User ID: {user?.userId || 'Loading...'}
                </p>
              </div>
            </div>
            <button
              onClick={signOut}
              className="bg-gradient-to-r from-red-500 to-pink-600 text-white font-semibold py-2 px-6 rounded-lg hover:from-red-600 hover:to-pink-700 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
            >
              Sign Out
            </button>
          </div>
        </div>

        {/* Usage Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <svg
              className="w-6 h-6 text-indigo-500"
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
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-4">
              <p className="text-sm text-indigo-600 font-medium mb-1">
                Allocated Credits
              </p>
              <p className="text-3xl font-bold text-indigo-900">
                {usage?.allocatedCredits ?? 0}
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4">
              <p className="text-sm text-purple-600 font-medium mb-1">
                Used Credits
              </p>
              <p className="text-3xl font-bold text-purple-900">
                {usage?.usedCredits ?? 0}
              </p>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-4">
              <p className="text-sm text-pink-600 font-medium mb-1">
                Remaining Credits
              </p>
              <p className="text-3xl font-bold text-pink-900">
                {usage?.remainingCredits ?? 0}
              </p>
            </div>
          </div>
        </div>

        {/* Subscription Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <svg
              className="w-6 h-6 text-indigo-500"
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
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-gray-600">Plan:</span>
                <span className="font-bold text-gray-900 text-lg">
                  {subscriptionStatus?.plan?.name ?? 'Free'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-600">Status:</span>
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
                  <span className="text-gray-600">Price:</span>
                  <span className="font-bold text-gray-900">
                    ${subscriptionStatus.plan.price}/month
                  </span>
                </div>
              )}
            </div>
            <button
              onClick={subscribe!}
              className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
            >
              Manage Subscription
            </button>
          </div>
        </div>

        {/* Info Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            About This App
          </h2>
          <p className="text-gray-600 leading-relaxed">
            This is a demonstration authentication application built with{' '}
            <span className="font-semibold text-indigo-600">Subscribe.dev</span>
            . It showcases user authentication, subscription management, and usage
            tracking features. The app uses React 18 and integrates seamlessly
            with the Subscribe.dev platform for AI-powered application development.
          </p>
        </div>
      </div>
    </div>
  );
}