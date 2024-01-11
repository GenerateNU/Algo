import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { getAllUsers } from './services/users';
import { useEffect, useState } from 'react';
import { User } from './types/types';

export default function App() {
  const [users, setUsers] = useState<User[]>();
  useEffect(() => {
    getAllUsers().then((data) => setUsers(data))
  })
  return (
    <View style={styles.container}>
      <Text className="font-bold">Open up App.js to start working on your app!</Text>
      {
        users &&
        users.map((user, index) => (
          <Text key={index} className="pb-2">
            {`FirstName: ${user.firstName} LastName: ${user.lastName}`}
          </Text>
        ))}
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
  },
});
