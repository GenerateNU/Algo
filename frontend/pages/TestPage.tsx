import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect /*useState*/ } from 'react';
// import { User } from '../types/types';
// import { getAllUsers } from '../services/users';
import { testClerkAuth } from '../services/users';
import { useSession } from '@clerk/clerk-expo';

export default function TestPage() {
    const { session } = useSession();
  // const [users, setUsers] = useState<User[]>();


  useEffect(() => {
    // getAllUsers().then((data) => setUsers(data.slice(8)))
    // session?.getToken();
  }, []);

  return (
    <View style={styles.container}>
      <Text className="font-bold mb-2 w-full text-left">
        Open up App.js to start working on your app!
      </Text>
      {/* {
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
      } */}
      <TouchableOpacity
        onPress={() => {
          testClerkAuth(session?.id as string);
        }}
        className='bg-blue-500 p-2 rounded-md w-1/4 text-center mt-2'
        >
        <Text>Authenticate</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});
