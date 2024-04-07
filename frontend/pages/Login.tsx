import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { useSignIn } from '@clerk/clerk-expo';
import { useNavigation } from '@react-navigation/native';
import { AuthNavigationProp } from '../types/navigationTypes'; 
import { ClerkErrorResponse } from '../types/types';

const Login: React.FC = () => {
  const navigation = useNavigation<AuthNavigationProp>();
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
    navigation.navigate('Signup');
  };

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image source={require('../assets/logomark.png')} style={styles.logo} />
      </View>
      <View>
        <Text style={styles.subtitle} className='font-bold'>Login</Text>
        <Text style={styles.description}>Get back into investing</Text>
      </View>

      <View className='rounded w-full'>
        <TextInput
          style={styles.input}
          onChangeText={setIdentifier}
          value={identifier}
          placeholder="Email or Username"
        />
      </View>
      
      <View className='rounded w-full mb-[20]'>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          secureTextEntry
          placeholder="Password"
        />
      </View>
      

      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        <Text style={styles.logInButtonText}>Login</Text>
      </Button>

      <View style={styles.bottomOptions}>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.linkText}>Forgot username or password</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={navigateToSignUp}>
          <Text style={styles.signUpText}>Don't have an account? <Text className='font-bold'>Sign Up</Text></Text>
        </TouchableOpacity>  
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      padding: 25,
      paddingTop: "30%",
      backgroundColor: '#f5f5f5', // You can set your own color scheme
    },
    image: {
      justifyContent: "center",
      flexDirection: "row",
      width: "100%"
    },
    bottomOptions: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 130,
      width: '100%',
      marginTop: 20
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333', // Choose a color that fits your app theme
      marginBottom: 20,
    },
    subtitle: {
      fontSize: 22,
      color: '#000000', // Adjust color to match your theme
      marginBottom: 10,
    },
    description: {
      fontSize: 16,
      color: '#7C7C7C', // Adjust color to match your theme
      marginBottom: 30,
    },
    input: {
      height: 60,
      width: '100%', // Adjust width as per your layout
      backgroundColor: '#fff', // Background color for the input
      borderWidth: 1,
      borderColor: '#ddd', // Border color for the input
      borderRadius: 50,
      padding: 14,
      marginBottom: 15,
      fontSize: 16,
    },
    button: {
      width: '100%', // Adjust button width as per your layout
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 40,
      elevation: 3,
      backgroundColor: '#02AD98', // Button color, you can change it
    },
    linkText: {
      fontSize: 14,
      color: '#7C7C7C', // Link text color, change as needed
      marginTop: 15,
    },
    logInButtonText: {
      fontSize: 14,
      color: '#FFFFFF', // Sign-up text color, change as needed
      marginTop: 15,
      fontWeight: "bold",
      paddingVertical: 10,
      paddingHorizontal: 12,
      height: '100%',
    },
    signUpText: {
      fontSize: 14,
      color: '#7C7C7C', // Sign-up text color, change as needed
      marginTop: 20,
    },
    logo: {
    width: 100,
    height: 100,
    marginBottom: 40, 
    alignSelf: 'center', 
  },
  });  

export default Login;
