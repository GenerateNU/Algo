import {Text, View, Linking, TouchableOpacity, TextInput, Alert} from 'react-native'
import React, {useState} from 'react'
import { Button } from 'react-native-paper'
import {getCallbackUrl, verifyToken} from '../services/users'
import {Redirect} from '../types/types'
import {HttpStatusCode} from "axios";
import { useUser } from '@clerk/clerk-expo'

const AuthPage = (props: { successCallback: () => void }) => {
  const [redirectUrl, setRedirectUrl] = useState("");
  const { isSignedIn, user } = useUser();
  const [verifierToken, setVerifierToken] = useState("");

  const etradeRedirect = async () => {
    if (!isSignedIn) {
      Alert.alert("Something went wrong - not signed in");
      return;
    }

    const id = user.id;
    console.log(id)

    const callback: Redirect = await getCallbackUrl(id);
    setRedirectUrl(callback.redirect_url)
    await Linking.openURL(callback.redirect_url);
  }

  const onVerifyPress = async () => {
    if (!isSignedIn) {
      Alert.alert("Something went wrong - not signed in");
      return;
    }

    const id = user.id;

    const verifierStatus: HttpStatusCode = await verifyToken(id, verifierToken);
    if (verifierStatus === HttpStatusCode.Ok) {
      props.successCallback()
    } else {
      console.log("Error verifying token!")
    }
  }

  return (
      <View>
        {redirectUrl === "" ? (
          /* If the access token is inactive, and we don't have a redirect URL */
          <Button onPress={etradeRedirect}>Authenticate with E-Trade</Button>
        ) : (
          /* Redirect token retrieved, verification token form */
          <View>
            <View className="flex justify-center items-center flex-grow">
              <TextInput
                autoCapitalize="none"
                value={verifierToken}
                placeholder="Verifier token..."
                onChangeText={verifier => setVerifierToken(verifier)}
                className="w-52 border-2 border-gray-400 rounded-lg mb-4 pl-2"
              />
              <TouchableOpacity
                onPress={onVerifyPress}
                className="w-40 h-10 border border-gray-400 p-2 rounded mb-4 bg-gray-400 flex justify-center items-center">
                <Text>Verify</Text>
              </TouchableOpacity>
            </View>

            <Button onPress={etradeRedirect}>Retry Authentication</Button>
          </View>
        )}
      </View>
  );
}

export default AuthPage