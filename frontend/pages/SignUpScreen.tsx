import * as React from 'react';
import {
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
    <View className="flex justify-center items-center flex-grow">
      {!pendingVerification && (
        <View>
          <View>
            <TextInput
              autoCapitalize="none"
              value={username}
              placeholder="Username..."
              onChangeText={username => setUsername(username)}
              className="w-52 border-2 border-gray-400 rounded-lg mb-4 pl-2"
            />
          </View>
          <View>
            <TextInput
              autoCapitalize="none"
              value={emailAddress}
              placeholder="Email..."
              onChangeText={email => setEmailAddress(email)}
              className="w-52 border-2 border-gray-400 rounded-lg mb-4 pl-2"
            />
          </View>

          <View>
            <TextInput
              value={password}
              placeholder="Password..."
              secureTextEntry={true}
              onChangeText={password => setPassword(password)}
              className="w-52 border-2 border-gray-400 rounded-lg mb-4 pl-2"
            />
          </View>

          <TouchableOpacity
            onPress={onSignUpPress}
            className="w-20 h-10 border border-gray-400 p-2 rounded-2xl mb-4 bg-gray-400 flex justify-center items-center">
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
