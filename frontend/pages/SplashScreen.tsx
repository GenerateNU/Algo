// SplashScreen.tsx
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SplashScreenNavigationProp } from '../types/navigationTypes';

const SplashScreen: React.FC = () => {
  const navigation = useNavigation<SplashScreenNavigationProp>();

  useEffect(() => {
    // Wait for 1 second then navigate to the LoginPage
    const timer = setTimeout(() => {
      navigation.navigate('LoginPage'); // Ensure 'LoginPage' is defined in your navigation types
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Placeholder for the logo */}
      <Text style={styles.logo}>Your Logo Here</Text>
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
    // Style for your logo text or image
    fontSize: 24, // Example size, adjust as needed
    fontWeight: 'bold', // Example weight, adjust as needed
    // Add more styling for your logo here
  },
});

export default SplashScreen;
