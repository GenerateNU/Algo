import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import BottomNavBar from './components/BottomNavBar';
//import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {

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
