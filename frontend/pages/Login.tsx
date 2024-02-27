import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Button } from 'react-native-paper';
import { useSignIn } from '@clerk/clerk-expo';
import { useNavigation } from '@react-navigation/native';
import { LoginPageNavigationProp } from '../types/navigationTypes'; 
import { ClerkErrorResponse } from '../types/types';

const Login: React.FC = () => {
  const navigation = useNavigation<LoginPageNavigationProp>();
  const { signIn, setActive, isLoaded } = useSignIn();
  const [identifier, setIdentifier] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = async () => {
    if (!isLoaded) {
      console.error('Error: Clerk not loaded');
      return;
    }

    try {
      const completeSignIn = await signIn.create({
        identifier,
        password,
      });

      await setActive({ session: completeSignIn.createdSessionId });
      navigation.navigate('Profile' as never);
    } catch (error) {
      const clerkError = error as ClerkErrorResponse;
      const clerkMessage = clerkError.errors[0].message;
      if(clerkMessage === "Couldn't find your account.") {
        Alert.alert('Username or email does not exist');
        return;
      }
      Alert.alert('Invalid password. Please try again.');
    }
  };

  const navigateToSignUp = () => {
    navigation.navigate('Signup' as never);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carbon Mark</Text>
      <Text style={styles.subtitle}>Login</Text>
      <Text style={styles.description}>Get back into investing</Text>
      
      <TextInput
        style={styles.input}
        onChangeText={setIdentifier}
        value={identifier}
        placeholder="Email or Username"
      />
      
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        secureTextEntry
        placeholder="Password"
      />
      
      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        Login
      </Button>
      
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.linkText}>Forgot username or password</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={navigateToSignUp}>
        <Text style={styles.signUpText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      backgroundColor: '#f5f5f5', // You can set your own color scheme
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333', // Choose a color that fits your app theme
      marginBottom: 20,
    },
    subtitle: {
      fontSize: 18,
      color: '#7C7C7C', // Adjust color to match your theme
      marginBottom: 10,
    },
    description: {
      fontSize: 16,
      color: '#7C7C7C', // Adjust color to match your theme
      marginBottom: 30,
    },
    input: {
      height: 50,
      width: '100%', // Adjust width as per your layout
      backgroundColor: '#fff', // Background color for the input
      borderWidth: 1,
      borderColor: '#ddd', // Border color for the input
      borderRadius: 5,
      padding: 10,
      marginBottom: 15,
      fontSize: 16,
    },
    button: {
      width: '100%', // Adjust button width as per your layout
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 10,
      paddingHorizontal: 12,
      borderRadius: 5,
      elevation: 3,
      backgroundColor: '#6F6F6F', // Button color, you can change it
    },
    linkText: {
      fontSize: 14,
      color: '#7C7C7C', // Link text color, change as needed
      marginTop: 15,
    },
    signUpText: {
      fontSize: 14,
      color: '#7C7C7C', // Sign-up text color, change as needed
      marginTop: 20,
    },
  });  

export default Login;