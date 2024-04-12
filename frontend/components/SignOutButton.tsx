import { useAuth } from '@clerk/clerk-expo';
import { Button, View } from 'react-native';
import { useDispatch} from 'react-redux';
import { signOutUser } from '../reducers/onboarding/onboardingReducer';

const SignOut = () => {
  const { isLoaded, signOut, sessionId } = useAuth();
  const dispatch = useDispatch();
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
          await dispatch(signOutUser())
          console.log('Signed out | sessionID: ', JSON.stringify(sessionId));
        }}
      />
    </View>
  );
};

export default SignOut;
