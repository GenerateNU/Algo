import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSignIn } from '@clerk/clerk-expo';

export default function SignInScreen() {
  const { signIn, setActive, isLoaded } = useSignIn();

  const [emailAddress, setEmailAddress] = React.useState('');
  const [password, setPassword] = React.useState('');

  const navigation = useNavigation();

  const onSignInPress = async () => {
    if (!isLoaded) {
      console.error('Error: Clerk not loaded');
      return;
    }

    try {
      const completeSignIn = await signIn.create({
        identifier: emailAddress,
        password,
      });

      await setActive({ session: completeSignIn.createdSessionId });
      navigation.navigate('Profile' as never);
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  };
  return (
    <View className="pt-0 mt-0 lex justify-center items-center flex-grow">
      <View>
        <TextInput
          autoCapitalize="none"
          value={emailAddress}
          placeholder="Email..."
          onChangeText={emailAddress => setEmailAddress(emailAddress)}
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

      <View style={{}}>
        <TouchableOpacity
          onPress={onSignInPress}
          className="w-40 h-10 border border-gray-400 p-2 rounded mb-4 bg-gray-400 flex justify-center items-center">
          <Text>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Registration' as never)}
          className="w-40 h-10 border border-gray-400 p-2 rounded mb-4 bg-gray-400 flex justify-center items-center">
          <Text>Create an account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
