import { Text, View, Alert, StyleSheet, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import { RefreshControl, ScrollView } from 'nativewind/dist/preflight';
import ETradeAuth from '../../components/ETradeAuth';
import { TokenStatus } from '../../types/types';
import { getTokenStatus } from '../../services/users';
import { AuthNavigationProp } from '../../types/navigationTypes';
import WizardStep from '../../components/WizardStep';

const Etrade = () => {
  const navigation = useNavigation<AuthNavigationProp>();
  const [authenticated, setAuthenticated] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const verifyCallback = async () => {
    console.log("Called this")
    Alert.alert('Success!', 'E*Trade Auth Successful',
    [ {
      text: "OK",
      onPress: () => navigation.navigate('Confirmation')
      }]);
    await getETradeTokenStatus();
  };

  const getETradeTokenStatus = async () => {
    const callback: TokenStatus = await getTokenStatus(2);
    console.log('callback: ', callback.status);
    if (callback.status === 'active') {
      setAuthenticated(true);
      navigation.navigate('Confirmation');
    } else {
      setAuthenticated(false);
    }
    if (refreshing) {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    getETradeTokenStatus().catch(error => {
      console.error('Error fetching token status:', error);
    });
  }, []);

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={async () => await getETradeTokenStatus()}
        />
      }>
      <View className="mt-10 p-3 h-full">
        <View style={styles.image}>
          <Image source={require('../../assets/logomark.png')} style={styles.logo} />
        </View>
        <Text style={styles.subtitle}>Login with E-Trade</Text>
        <Text style={styles.description}>Click to authenticate directly through Morgan Stanley</Text>
        {authenticated ? (
          /* If the access token is active */
          <Text style={styles.description}>E*Trade Account Authenticated!</Text>
        ) : (
          <View style={styles.authContainer}>
            <View style={{flex: 4}}>
              <ETradeAuth successCallback={verifyCallback} />
            </View>
            <View style={styles.wizard}>
              <WizardStep step={5}/>
            </View>
            
          </View>
          
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 25,
    paddingTop: "25%",
    backgroundColor: "#FFFFFF"
  },
  wizard: {
    flexDirection: "column",
    justifyContent: "flex-start",
    flex: 1,
    marginTop: "60%",
    width: "100%",
  },
  authContainer: {
    flex: 1,
    width: "100%"
  },
  image: {
    justifyContent: "center",
    flexDirection: "row",
    width: "100%"
  },
  logo: {
    width: 85,
    height: 85,
    marginBottom: 40, 
    alignSelf: 'center', 
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
})
export default Etrade;
