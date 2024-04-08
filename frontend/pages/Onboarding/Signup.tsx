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
      <View style={styles.verifyContainer}>
        <View style={styles.image}>
          <Image source={require('../../assets/logomark.png')} style={styles.logo} />
        </View>
        <Text style={styles.subtitle} className='font-bold mb-[16]'>
          Email Verification
        </Text>
        <Text style={styles.description}>
          Please put in the verification code sent to your email
        </Text>
          <TextInput
            value={code}
            placeholder="Verification Code"
            onChangeText={code => setCode(code)}
            style={styles.input}
          />
        <Button
        mode="contained"
        onPress={onPressVerify}
        style={styles.button}
        contentStyle={styles.buttonContent}
        labelStyle={{ color: 'white', fontSize: 14 }}>
        Verify Email
      </Button>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image source={require('../../assets/logomark.png')} style={styles.logo} />
      </View>
      
      <View className='rounded w-full mb-[20]'>
        <Text style={styles.title}>Sign up</Text>
        <Text style={styles.subtitle}>Start investing smarter with friends</Text>
      </View>
      
      <View className='rounded w-full'>
        <TextInput
          style={styles.input}
          onChangeText={setUsername}
          value={username}
          placeholder="Username"
        />
      </View>

      <View className='rounded w-full'>
        <TextInput
          style={styles.input}
          onChangeText={setEmailAddress}
          value={emailAddress}
          placeholder="Email"
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
      

      <Button
        mode="contained"
        onPress={handleSignUp}
        style={styles.button}
        contentStyle={styles.buttonContent}
        labelStyle={{ color: 'white', fontSize: 16 }}>
        Sign Up
      </Button>

      <TouchableOpacity onPress={navigateToLogin} className='w-full flex-row justify-center mt-[20]'>
        <Text style={styles.loginText}>Already have an account? <Text className='font-bold'>Login</Text> </Text>
      </TouchableOpacity>
    </View>
  );
}

// Reuse the same styles from LoginPage or create specific ones for SignInPage
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 25,
    paddingTop: "30%",
    backgroundColor: '#FFFFFF', // You can set your own color scheme
  },
  verifyContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 25,
    paddingTop: "30%",
    backgroundColor: '#FFFFFF', // You can set your own color scheme
  },
  image: {
    justifyContent: "center",
    flexDirection: "row",
    width: "100%"
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333', // Choose a color that fits your app theme
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 22,
    color: '#7C7C7C', // Adjust color to match your theme
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
    backgroundColor: '#F1F1F1', // Background color for the input
    borderWidth: 1,
    borderColor: '#F1F1F1', // Border color for the input
    borderRadius: 18,
    padding: 14,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    width: '100%',
    // Removed explicit height to allow content to define the button's size
    borderRadius: 50,
    backgroundColor: '#02AD98',
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
    fontSize: 13,
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
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 13,
    elevation: 3,
    backgroundColor: '#02AD98', // Button color, you can change it
    fontSize: 14,
    color: '#FFFFFF', // Sign-up text color, change as needed
    fontWeight: "bold",
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
});
