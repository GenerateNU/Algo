import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle the login logic here
    console.log(username, password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carbon Mark</Text>
      <Text style={styles.subtitle}>Login</Text>
      <Text style={styles.description}>Get back into investing</Text>
      
      <TextInput
        style={styles.input}
        onChangeText={setUsername}
        value={username}
        placeholder="Phone Number or Username"
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

      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.signUpText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff', // Set your desired background color
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    marginBottom: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: 'grey', // Set your desired border color
    borderRadius: 5, // Set your desired border radius
  },
  button: {
    backgroundColor: 'black', // Set your desired button color
    paddingVertical: 10,
  },
  linkText: {
    marginTop: 20,
    textAlign: 'center',
    color: 'blue', // Set your desired link text color
  },
  signUpText: {
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default LoginPage;
