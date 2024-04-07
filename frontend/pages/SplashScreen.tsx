// SplashScreen.tsx
import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthNavigationProp } from '../types/navigationTypes';
import { useSession, useUser } from '@clerk/clerk-expo';
import { useDispatch} from 'react-redux';
import { completeOnboarding } from '../reducers/onboarding/onboardingReducer';

const SplashScreen: React.FC = () => {
  const navigation = useNavigation<AuthNavigationProp>();
  const { session } = useSession();
  const dispatch = useDispatch();

  useEffect(() => {
    // Wait for 1 second then navigate to the LoginPage
    const timer = setTimeout(() => {
      console.log(session)
      if (!session) {
        navigation.navigate('Login'); // Ensure 'LoginPage' is defined in your navigation types
      } else {
        dispatch(completeOnboarding());
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Placeholder for the logo */}
      <Image source={require('../assets/splash.png')} style={styles.logo} />
      {/* You can replace the Text with an Image component if you have a logo image */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff', // Change the background color if needed
  },
  logo: {
    width: '100%', // Adjust the width as needed
    height: 150, // Adjust the height as needed
    marginBottom: 20, // Adjust the space between the logo and the "Sign Up" text
    alignSelf: 'center', // This centers the logo horizontally in the container
  },
});

export default SplashScreen;
