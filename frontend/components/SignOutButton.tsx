import { useAuth } from '@clerk/clerk-expo';
import { Button, View } from 'react-native';

const SignOut = () => {
  const { isLoaded, signOut, sessionId } = useAuth();
  if (!isLoaded) {
    return null;
  }

  return (
    <View>
      <Button
        title="Sign Out"
        onPress={async () => {
          console.log('Sign Out Pressed | sessionID: ', JSON.stringify(sessionId));
          await signOut();
          console.log('Signed out | sessionID: ', JSON.stringify(sessionId));
        }}
      />
    </View>
  );
};

export default SignOut;
