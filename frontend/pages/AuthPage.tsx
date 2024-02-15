import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { getCallbackUrl } from '../services/users'
import WebViewModal from '../components/WebViewModal';
import { Redirect } from '../types/types'
import WebViewItem from '../components/WebViewItem'

const AuthPage = () => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState("");

  useEffect(() => {
    console.log(redirectUrl);
  }, [redirectUrl])

  // router the user to the feed page
  const onClicked = async () => {
    await Alert.alert('Signed In');
    //navigation.navigate('FeedPage');
  }

  const authenticate = async () => {
    const callback: Redirect = await getCallbackUrl(2);
    console.log(callback)
    setVisible(true);
    setRedirectUrl(callback.redirect_url);
  }

  return (
    <View className="mt-10 p-3 h-full">
      <Text className='font-bold mb-8 text-lg'>Login with E-Trade </Text>
      <Button onPress={authenticate}>Authenticat with E-Trade</Button>

      <WebViewModal url={redirectUrl} displaying={visible} setVisible={setVisible}/>
      {
        redirectUrl != "" &&
        <WebViewItem url={redirectUrl}/>
      }
      
    </View>
  )
}

export default AuthPage