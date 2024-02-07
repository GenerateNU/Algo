import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { getAllUsers } from './services/users';
import { useEffect, useState } from 'react';
import { User } from './types/types';
import Logo from './assets/verified.svg';

export default function App() {
  const [users, setUsers] = useState<User[]>();
  useEffect(() => {
    getAllUsers().then((data) => setUsers(data))
  }, [])
  return (
    <View style={styles.container}>
      <Text className="font-bold mb-2 w-full text-left" >Open up App.js to start working on your app!</Text>
      <Logo width={120} height={40} />;
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
