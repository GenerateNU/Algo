import { Alert, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

const AuthPage = () => {
  const navigation = useNavigation()

  // router the user to the feed page
  const onClicked = async () => {
    await Alert.alert('Signed In')
    navigation.navigate('FeedPage')
  }

  return (
    <View>
      <Button onPress={onClicked}>Sign Up</Button>
      <Button onPress={onClicked}>Log In</Button>
    </View>
  )
}

export default AuthPage