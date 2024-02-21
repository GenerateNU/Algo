import {Text, View, Linking, TouchableOpacity, TextInput} from 'react-native'
import React, {useEffect, useState} from 'react'
import { Button } from 'react-native-paper'
//import { useNavigation } from '@react-navigation/native'
import {getCallbackUrl, getTokenStatus, verifyToken} from '../services/users'
import {Redirect, TokenStatus} from '../types/types'
import {HttpStatusCode} from "axios";

const AuthPage = () => {
  //const navigation = useNavigation();
  const [redirectUrl, setRedirectUrl] = useState("");
  const [verifierToken, setVerifierToken] = useState("");

  const onVerifyPress = async () => {
    const verifierStatus: HttpStatusCode = await verifyToken(2, verifierToken);
    if (verifierStatus === HttpStatusCode.Ok) {
      console.log("ETrade authenticated successfully!")
    }
  }
  const authenticate = async () => {
    const callback: Redirect = await getCallbackUrl(2);
    setRedirectUrl(callback.redirect_url)
    await Linking.openURL(callback.redirect_url);
  }

  const getETradeTokenStatus = async () => {
    const callback: TokenStatus = await getTokenStatus(2);
    return callback.status
  }

  useEffect(() => {
    getETradeTokenStatus().then((status) => {
      console.log(status)
    })
  }, []);

  return (
    <View className="mt-10 p-3 h-full">
      <Text className='font-bold mb-8 text-lg'>Login with E-Trade </Text>
      {redirectUrl !== "" ? (
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

          <Button onPress={authenticate}>Retry Authentication</Button>
        </View>
      ) : (
        <Button onPress={authenticate}>Authenticate with E-Trade</Button>
      )}
    </View>
  )
}

export default AuthPage