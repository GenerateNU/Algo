import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { User } from '../types/types';
import { getAllUsers } from '../services/users';
// import Logo from '../assets/test.svg';
import { SvgXml } from 'react-native-svg';

const BasicSvg = `
<svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32.5001 59.5833C36.4437 59.5833 39.7311 56.7738 40.4698 53.0471C40.5497 52.644 41.0521 52.4359 41.3936 52.6645C44.5511 54.7772 48.8623 54.4394 51.6509 51.6508C54.4394 48.8623 54.7773 44.551 52.6645 41.3935C52.4359 41.052 52.644 40.5496 53.0471 40.4697C56.7738 39.731 59.5834 36.4436 59.5834 32.5C59.5834 28.5564 56.7739 25.269 53.0472 24.5302C52.6441 24.4503 52.4361 23.948 52.6646 23.6065C54.7774 20.4489 54.4395 16.1377 51.651 13.3492C48.8624 10.5606 44.5512 10.2227 41.3936 12.3356C41.0521 12.5641 40.5497 12.356 40.4698 11.9529C39.7311 8.22621 36.4437 5.41663 32.5001 5.41663C28.5565 5.41663 25.2691 8.22617 24.5303 11.9528C24.4504 12.3559 23.9481 12.564 23.6066 12.3355C20.449 10.2227 16.1378 10.5605 13.3493 13.3491C10.5607 16.1377 10.2229 20.4489 12.3357 23.6064C12.5642 23.9479 12.3561 24.4503 11.953 24.5302C8.22634 25.2689 5.41675 28.5563 5.41675 32.5C5.41675 36.4435 8.22628 39.7309 11.9529 40.4697C12.356 40.5496 12.5641 41.0519 12.3356 41.3935C10.2228 44.551 10.5607 48.8622 13.3492 51.6507C16.1378 54.4393 20.449 54.7772 23.6065 52.6643C23.9481 52.4358 24.4504 52.6439 24.5303 53.047C25.269 56.7737 28.5565 59.5833 32.5001 59.5833Z" fill="#EEF0F2" stroke="#EEF0F2" stroke-width="2" stroke-linecap="round"/>
<path d="M21.6667 33.8541L27.9588 40.1462C28.2232 40.4106 28.6519 40.4106 28.9164 40.1462L43.3334 25.7291" stroke="#0057DA" stroke-width="4" stroke-linecap="round"/>
</svg>
`;

export default function TestPage() {
  const [users, setUsers] = useState<User[]>();
  // const logoXml = Logo ? Logo.toString() : '';
  useEffect(() => {
    getAllUsers().then(data => setUsers(data.slice(8)));
  }, []);
  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <View style={styles.container}>
      <Text className="font-bold mb-2 w-full text-left">
        Open up App.js to start working on your app!
      </Text>
      <View style={styles.logoContainer}>
        <SvgXml xml={BasicSvg} width="50" height="50" />
      </View>

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
  logoContainer: {
    // left: 100,
    // bottom: 100,
    paddingHorizontal: 20,
  },
});
