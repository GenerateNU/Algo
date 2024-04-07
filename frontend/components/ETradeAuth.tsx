import {Text, View, Linking, TouchableOpacity, TextInput, Alert, StyleSheet} from 'react-native'
import React, {useState} from 'react'
import { Button } from 'react-native-paper'
import {getCallbackUrl, verifyToken} from '../services/etrade'
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

    const callback: Redirect = await getCallbackUrl(id);
    setRedirectUrl(callback.redirect_url)
    await Linking.openURL(callback.redirect_url);
  }

  const onVerifyPress = async () => {
    console.log("Verifying")
    if (!isSignedIn) {
      Alert.alert("Something went wrong - not signed in");
      return;
    }

    const id = user.id;

    const verifierStatus: HttpStatusCode = await verifyToken(id, verifierToken);
    console.log(verifierStatus)
    if (verifierStatus === HttpStatusCode.Ok) {
      console.log("succesful")
      props.successCallback()
    } else {
      console.log("Error verifying token!")
    }
  }

  return (
      <View>
        {redirectUrl === "" ? (
          /* If the access token is inactive, and we don't have a redirect URL */
          <Button style={styles.activateButton} onPress={etradeRedirect} textColor='#FFFFFF'>Authenticate with E-Trade</Button>
        ) : (
          /* Redirect token retrieved, verification token form */
          <View className='flex-column justify-start'>
            <View className="rounded w-full">
              <TextInput
                autoCapitalize="none"
                value={verifierToken}
                placeholder="Verifier token..."
                onChangeText={verifier => setVerifierToken(verifier)}
                style={styles.input}
              />
            </View>
            <View style={styles.bottomCont}>
              <TouchableOpacity style={styles.button} onPress={onVerifyPress}>
                <Text style={styles.buttonText}>Verify</Text>
              </TouchableOpacity>
            </View>
              {/* <TouchableOpacity
                onPress={onVerifyPress}
                className="w-40 h-10 border border-gray-400 p-2 rounded mb-4 bg-gray-400 flex justify-center items-center">
                <Text>Verify</Text>
              </TouchableOpacity> */}

            <Button onPress={etradeRedirect} style={{marginTop: 15}} textColor={'#7C7C7C'}>Retry Authentication</Button>
          </View>
        )}
      </View>
  );
}
const styles = StyleSheet.create({
  activateButton: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 14,
    borderRadius: 30,
    marginTop: "5%",
    color: "#FFFFFF",
    backgroundColor: '#333333', // Darker grey color for active state
  },
  bottomCont: {
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%",
  },
  button: {
    padding: 15,
    borderRadius: 20,
    width: '100%',
    height: 60,
    backgroundColor: '#02AD98',
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
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
})

export default AuthPage