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

export default function SignUpScreen() {
  const navigation = useNavigation();
  const { isLoaded, signUp, setActive } = useSignUp();

  const [username, setUsername] = React.useState('');
  const [emailAddress, setEmailAddress] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [pendingVerification, setPendingVerification] = React.useState(false);
  const [code, setCode] = React.useState('');

  // start the sign up process.
  const onSignUpPress = async () => {
    // TODO: replace with proper error handling
    if (
      !isLoaded ||
      !username ||
      !emailAddress ||
      !password ||
      password.length < 8
    ) {
      return;
    }

    try {
      // create the user.
      const signupResource = await signUp.create({
        username,
        emailAddress,
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

  return (
    <View style={styles.container}>
      {!pendingVerification && (
        <View>
          <View>
            <TextInput
              autoCapitalize="none"
              value={username}
              placeholder="Username..."
              onChangeText={username => setUsername(username)}
              style={styles.inputBox}
            />
          </View>
          <View>
            <TextInput
              autoCapitalize="none"
              value={emailAddress}
              placeholder="Email..."
              onChangeText={email => setEmailAddress(email)}
              style={styles.inputBox}
            />
          </View>

          <View>
            <TextInput
              value={password}
              placeholder="Password..."
              secureTextEntry={true}
              onChangeText={password => setPassword(password)}
              style={styles.inputBox}
            />
          </View>

          <TouchableOpacity onPress={onSignUpPress} style={styles.button}>
            <Text>Sign up</Text>
          </TouchableOpacity>
        </View>
      )}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBox: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  button: {
    width: 150,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
