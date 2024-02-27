import * as React from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import { useSignUp } from '@clerk/clerk-expo';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import {
  updateUsername,
  updateEmail,
  updatePassword,
  beginOnboarding,
} from '../../reducers/onboarding/onboardingReducer';
import { ClerkErrorResponse } from '../../types/types';
import { AuthNavigationProp } from '../../types/navigationTypes';

export default function Signup() {
  const dispatch = useDispatch();
  const navigation = useNavigation<AuthNavigationProp>();
  const { isLoaded, signUp, setActive } = useSignUp();
  const [pendingVerification, setPendingVerification] = React.useState(false);

  const [username, setUsername] = React.useState('');
  const [emailAddress, setEmailAddress] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [code, setCode] = React.useState('');

  const handleSignUp = async () => {
    if (!isLoaded) {
      Alert.alert('Clerk not loaded.');
      return;
    }
    if (!username || !emailAddress || !password) {
      Alert.alert('Please fill in all fields');
      return;
    }
    if (password.length < 8) {
      Alert.alert('Password must be at least 8 characters long');
      return;
    }

    try {
      // create the user.
      const signupResource = await signUp.create({
        username,
        emailAddress,
        password,
      });

      console.log('signupResource status: ', signupResource.status);
      // if (signupResource.status === 'missing_requirements') {
      //   Alert.alert('Invalid fields. Please try again.');
      //   return;
      // }

      // send the email.
      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });

      // change the UI to our pending section.
      setPendingVerification(true);
    } catch (error) {
      console.log(JSON.stringify(error));
      const clerkError = error as ClerkErrorResponse;
      const clerkMessage = clerkError.errors[0].message;
      Alert.alert(clerkMessage);
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

      dispatch(beginOnboarding());

      // set the user as active.
      await setActive({ session: completeSignUp.createdSessionId });

      dispatch(updateUsername(username));
      dispatch(updateEmail(emailAddress));
      dispatch(updatePassword(password));

      navigation.navigate('Fullname');
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  };

  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

  if (pendingVerification) {
    return (
      <View style={styles.container}>
        <View>
          <TextInput
            value={code}
            placeholder="Code . . ."
            onChangeText={code => setCode(code)}
            style={styles.input}
          />
        </View>
        <TouchableOpacity onPress={onPressVerify} style={styles.verifyButton}>
          <Text>Verify Email</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logomark.png')} style={styles.logo} />
      {/* <Text style={styles.title}>Sign up</Text> */}
      <Text style={styles.subtitle}>Start investing smarter with friends</Text>

      <TextInput
        style={styles.input}
        onChangeText={setUsername}
        value={username}
        placeholder="Username"
      />

      <TextInput
        style={styles.input}
        onChangeText={setEmailAddress}
        value={emailAddress}
        placeholder="Email"
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
        onPress={handleSignUp}
        style={styles.button}
        contentStyle={styles.buttonContent}
        labelStyle={{ color: 'white', fontSize: 20 }}>
        Sign Up
      </Button>

      <TouchableOpacity onPress={navigateToLogin}>
        <Text style={styles.loginText}>Already have an account? Login</Text>
      </TouchableOpacity>
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
    marginBottom: 20,
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
    color: '#7C7C7C', // Link text color, change as needed
    marginTop: 15,
  },
  signUpText: {
    fontSize: 14,
    color: '#fff', // Sign-up text color, change as needed
    marginTop: 15,
  },
  loginText: {
    fontSize: 16,
    color: '#7C7C7C', // Use the same style as signUpText from LoginPage for consistency
    marginTop: 15,
  },
  logo: {
    width: 100, // Adjust the width as needed
    height: 100, // Adjust the height as needed
    marginBottom: 40, // Adjust the space between the logo and the "Sign Up" text
    alignSelf: 'center', // This centers the logo horizontally in the container
  },
  verifyButton: {
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
});
