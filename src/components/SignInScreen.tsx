interface SignInScreenProps {
  signIn: () => void;
}

export function SignInScreen({ signIn }: SignInScreenProps) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 space-y-6">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mb-4">
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
          <h1 className="text-3xl font-bold text-gray-900">Welcome</h1>
          <p className="text-gray-600">Sign in to access your account</p>
        </div>

        <div className="space-y-4">
          <button
            onClick={signIn}
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
          >
            Sign In
          </button>

          <button
            onClick={signIn}
            className="w-full bg-white text-gray-700 font-semibold py-3 px-6 rounded-lg border-2 border-gray-200 hover:border-indigo-500 hover:text-indigo-600 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Create Account
          </button>
        </div>

        <div className="pt-4 border-t border-gray-200">
          <p className="text-xs text-center text-gray-500">
            Powered by Subscribe.dev
          </p>
        </div>
      </div>
    </div>
  );
}