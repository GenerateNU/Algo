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
