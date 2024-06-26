import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect /*useState*/, useState } from 'react';
import { User } from '../types/types';
import { getAllUsers } from '../services/users';
// import { authenticateSession } from '../services/auth';
// import { useAuth } from '@clerk/clerk-expo';

export default function TestPage() {
  // const { getToken } = useAuth();
  const [users, setUsers] = useState<User[]>();

  useEffect(() => {
    getAllUsers().then(data => setUsers(data.slice(8)));
  }, []);

  return (
    <View style={styles.container}>
      <Text className="font-bold mb-2 w-full text-left">
        Explore Carbon's community
      </Text>
      {users && (
        <View className="w-full">
          {users.map((user, index) => (
            <Text key={index} className="pb-2 text-left w-100">
              {`First Name: ${user.first_name}\n`}
              {`Last Name: ${user.last_name}`}
            </Text>
          ))}
        </View>
      )}
      {/* <TouchableOpacity
        onPress={async () => {
          const authtoken = (await getToken()) as string;
          authenticateSession(authtoken);
        }}
        className="bg-blue-500 p-2 rounded-md w-1/4 text-center mt-2">
        <Text>Authenticate</Text>
      </TouchableOpacity> */}
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
/*
if signin is sent,
if isn't available in clerk, then check backend
if available in backend, then create session and create user in clerk


*/
