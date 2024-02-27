// SplashScreen.tsx
import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthNavigationProp } from '../types/navigationTypes';

const SplashScreen: React.FC = () => {
  const navigation = useNavigation<AuthNavigationProp>();

  useEffect(() => {
    // Wait for 1 second then navigate to the LoginPage
    const timer = setTimeout(() => {
      navigation.navigate('Login'); // Ensure 'LoginPage' is defined in your navigation types
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Placeholder for the logo */}
      <Image source={require('../assets/logomark.png')} style={styles.logo} />
      {/* You can replace the Text with an Image component if you have a logo image */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Change the background color if needed
  },
  logo: {
    width: 150, // Adjust the width as needed
    height: 150, // Adjust the height as needed
    marginBottom: 20, // Adjust the space between the logo and the "Sign Up" text
    alignSelf: 'center', // This centers the logo horizontally in the container
  },
});

export default SplashScreen;
