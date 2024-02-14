import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import { getAllUsers } from './services/users';
import { useEffect, useState } from 'react';
import { User } from './types/types';
import * as SecureStore from "expo-secure-store";
import { ClerkProvider, SignedIn, SignedOut, useAuth, useUser } from "@clerk/clerk-expo";
import Constants from "expo-constants";
import SignInScreen from './screens/SignInScreen';
import SignOut from './components/SignOutButton';

const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

export default function App() {
  // const { isLoaded, isSignedIn, user } = useUser();
  const [users, setUsers] = useState<User[]>();
  useEffect(() => {
    getAllUsers().then((data) => setUsers(data))
    console.log(Constants.expoConfig?.extra?.clerkPublishableKey);
    console.log("pk_test_Y29tcGxldGUtcGFudGhlci05NS5jbGVyay5hY2NvdW50cy5kZXYk" === Constants.expoConfig?.extra?.clerkPublishableKey)
  }, [])
  return (
    <ClerkProvider
      publishableKey={"pk_test_Y29tcGxldGUtcGFudGhlci05NS5jbGVyay5hY2NvdW50cy5kZXYk"}
      tokenCache={tokenCache}
    >
      <SafeAreaView style={styles.container}>
        <SignedIn>
          {/* {!isLoaded || !isSignedIn ? null : <Text>Hello {user.firstName} </Text>} */}
          <Text className="font-bold mb-2 w-full text-left" >Welcome to Carbon!</Text>
          <SignOut />
          <View style={styles.container}>
            {
              users &&
              <View className='w-full'>
                {
                  users.map((user, index) => (
                    <Text key={index} className="pb-2 text-left w-100">
                      {`First Name: ${user.first_name}\n`}{`Last Name: ${user.last_name}`}
                    </Text>
                  ))
                }
              </View>
            }
            <StatusBar style="auto" />
          </View>
        </SignedIn>
        <SignedOut>
          <SignInScreen />
        </SignedOut>
      </SafeAreaView>
    </ClerkProvider >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});
