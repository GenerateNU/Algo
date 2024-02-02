import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { User } from '../types/types';
import { getAllUsers } from '../services/users';

export default function TestPage() {
  const [users, setUsers] = useState<User[]>();

  useEffect(() => {
    getAllUsers().then((data) => setUsers(data))
  }, [])
  
  return (
    <View style={styles.container}>
      <Text className="font-bold mb-2 w-full text-left" >Open up App.js to start working on your app!</Text>
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
    </View>
  )
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
