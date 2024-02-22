import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Wait for 1 second then navigate to the LoginPage
    const timer = setTimeout(() => {
      navigation.navigate('LoginPage');
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Placeholder for the logo */}
      <Text style={styles.logo}>Carbon Logo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    // Style for your logo text, you can replace this with an image later
  },
});

export default SplashScreen;
