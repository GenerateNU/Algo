import { StatusBar } from 'expo-status-bar';
import { SafeAreaViewBase, StyleSheet, Text, View } from 'react-native';
import { getAllUsers } from './services/users';
import { useEffect, useState } from 'react';
import { User } from './types/types';

import { NavigationContainer } from '@react-navigation/native';
import BottomNavBar from './components/BottomNavBar';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [users, setUsers] = useState<User[]>();

  useEffect(() => {
    getAllUsers().then((data) => setUsers(data))
  }, [])

  return (
    <NavigationContainer>
      <BottomNavBar />
    </NavigationContainer>
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
