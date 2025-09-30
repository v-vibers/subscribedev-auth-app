import { useSubscribeDev } from '@subscribe.dev/react';
import { SignInScreen } from './components/SignInScreen';
import { AuthenticatedApp } from './components/AuthenticatedApp';

function App() {
  const { isSignedIn, signIn } = useSubscribeDev();

  if (!isSignedIn) {
    return <SignInScreen signIn={signIn} />;
  }

  return <AuthenticatedApp />;
}

export default App
