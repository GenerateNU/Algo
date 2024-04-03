import { NavigationContainer } from '@react-navigation/native';
import BottomNavBar from './components/BottomNavBar';
//import { SafeAreaView } from 'react-native-safe-area-context';
import AppNavigator from './AppNavigator';

export default function App() {
  return (
    <>
      <NavigationContainer>
        {/* <BottomNavBar /> */}
        <AppNavigator />
      </NavigationContainer>
    </>
  );
}
