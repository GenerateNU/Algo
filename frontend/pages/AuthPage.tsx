import {Text, View, Alert} from 'react-native'
import React, {useEffect, useState} from 'react'
import {RefreshControl, ScrollView} from "nativewind/dist/preflight";
import ETradeAuth from "../components/ETradeAuth";
import {TokenStatus} from "../types/types";
import {getTokenStatus} from "../services/users";

const AuthPage = () => {
  const [authenticated, setAuthenticated] = useState(false)
  const [refreshing, setRefreshing] = useState(false);

  const verifyCallback = async () => {
    Alert.alert("E*Trade Auth Successful")
    await getETradeTokenStatus()
  }

  const getETradeTokenStatus = async () => {
    const callback: TokenStatus = await getTokenStatus(2);
    if (callback.status === "active") {
      setAuthenticated(true)
    } else {
      setAuthenticated(false)
    }
    if (refreshing) {
      setRefreshing(false)
    }
  };

  useEffect(() => {
    getETradeTokenStatus()
      .catch(error => {
        console.error("Error fetching token status:", error);
      });
  }, []);

  return (
    <ScrollView
      style={{ flex: 1 }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={async () => await getETradeTokenStatus()} />
      }
    >
      <View className="mt-10 p-3 h-full">
        <Text className='font-bold mb-8 text-lg'>Login with E-Trade</Text>
        {authenticated ? (
          /* If the access token is active */
          <Text>E*Trade Account Authenticated!</Text>
        ) : (
          <ETradeAuth successCallback={verifyCallback} />
        )}
      </View>
    </ScrollView>
  );
}

export default AuthPage