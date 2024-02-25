import * as React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSignUp } from '@clerk/clerk-expo';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';
// import { useDispatch } from 'react-redux';

export default function SignUp() {
  // const dispatch = useDispatch();
  const navigation = useNavigation();
  const { isLoaded, signUp, setActive } = useSignUp();
  const [pendingVerification, setPendingVerification] = React.useState(false);

  // dispatch();

  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [code, setCode] = React.useState('');

  const handleSignUp = async () => {
    if (!isLoaded || !username || !email || !password || password.length < 8) {
      return;
    }

    try {
      // create the user.
      const signupResource = await signUp.create({
        username,
        emailAddress: email,
        password,
      });

      // send the email.
      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });

      // change the UI to our pending section.
      setPendingVerification(true);
      console.log('signupResource status: ', signupResource.status);
    } catch (error) {
      // const errorObject = JSON.stringify(error);
      console.log(JSON.stringify(error));
    }
  };

  // This verifies the user using email code that is delivered.
  const onPressVerify = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      // complete the sign up process.
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      // set the user as active.
      await setActive({ session: completeSignUp.createdSessionId });
      navigation.navigate('Profile' as never);
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  };

  // Example function to handle navigation back to login page
  const navigateToLogin = () => {
    navigation.navigate('Login' as never);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign up</Text>
      <Text style={styles.subtitle}>Start investing smarter with friends</Text>

      <TextInput
        style={styles.input}
        onChangeText={setUsername}
        value={username}
        placeholder="username"
      />

      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
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

      {pendingVerification && (
        <View>
          <View>
            <TextInput
              value={code}
              placeholder="Code..."
              onChangeText={code => setCode(code)}
            />
          </View>
          <TouchableOpacity onPress={onPressVerify}>
            <Text>Verify Email</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

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
    marginTop: 15,
  },
  loginText: {
    fontSize: 14,
    color: '#007BFF', // Use the same style as signUpText from LoginPage for consistency
    marginTop: 15,
  },
});

