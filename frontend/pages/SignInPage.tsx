import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { SignInPageNavigationProp } from '../types/navigationTypes'; 

const SignInPage: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigation = useNavigation<SignInPageNavigationProp>();

  const handleSignUp = () => {
    // TODO: Implement sign-up logic or connect to BE here
    console.log(name, phone, password);
  };

  // Example function to handle navigation back to login page
  const navigateToLogin = () => {
    navigation.navigate('LoginPage');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign up</Text>
      <Text style={styles.subtitle}>Start investing smarter with friends</Text>
      
      <TextInput
        style={styles.input}
        onChangeText={setName}
        value={name}
        placeholder="Name"
      />
      
      <TextInput
        style={styles.input}
        onChangeText={setPhone}
        value={phone}
        placeholder="Phone Number"
        keyboardType="phone-pad" // To show number-pad for phone input
      />
      
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        secureTextEntry
        placeholder="Password"
      />
      
      <Button mode="contained" onPress={handleSignUp} style={styles.button}>
        Sign up
      </Button>
      
      <TouchableOpacity onPress={navigateToLogin}>
        <Text style={styles.loginText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

// Reuse the same styles from LoginPage or create specific ones for SignInPage
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
        color: '#666', // Adjust color to match your theme
        marginBottom: 10,
      },
      description: {
        fontSize: 16,
        color: '#888', // Adjust color to match your theme
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
        backgroundColor: '#34A853', // Button color, you can change it
      },
      linkText: {
        fontSize: 14,
        color: '#007BFF', // Link text color, change as needed
        marginTop: 15,
      },
      signUpText: {
        fontSize: 14,
        color: '#007BFF', // Sign-up text color, change as needed
        marginTop: 15,
      },
  loginText: {
    fontSize: 14,
    color: '#007BFF', // Use the same style as signUpText from LoginPage for consistency
    marginTop: 15,
  },
});  

export default SignInPage;
