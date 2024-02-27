import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { LoginPageNavigationProp } from '../types/navigationTypes';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigation = useNavigation<LoginPageNavigationProp>();

  const handleLogin = () => {
    console.log(username, password);
    navigation.navigate('MainApp');
  };

  const navigateToSignUp = () => {
    navigation.navigate('SignInPage');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logomark.png')} style={styles.logo} />
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
      
      <Button
      mode="contained" 
      onPress={handleLogin} 
      style={styles.button} 
      contentStyle={styles.buttonContent}
      labelStyle={{ color: 'white', fontSize: 20}} >
        Login
      </Button>
      
      <Text style={styles.linkText} onPress={() => {}}>Forgot username or password</Text>
      <Text style={styles.signUpText} onPress={navigateToSignUp}>Don't have an account? Sign Up</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: '#7C7C7C',
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    color: '#7C7C7C',
    marginBottom: 30,
  },
  input: {
    height: 50,
    width: '100%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    width: '100%',
    // Removed explicit height to allow content to define the button's size
    borderRadius: 5,
    backgroundColor: '#6F6F6F',
  },
  buttonContent: {
    // Adjusted for better control over the button's internal padding
    paddingVertical: 8,
  },
  linkText: {
    fontSize: 14,
    color: '#7C7C7C',
    marginTop: 15,
  },
  signUpText: {
    fontSize: 16,
    color: '#7C7C7C',
    marginTop: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 40, 
    alignSelf: 'center', 
  },
});

export default LoginPage;
