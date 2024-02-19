import * as SecureStore from 'expo-secure-store';
import { ClerkProvider } from '@clerk/clerk-expo';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavBar from './components/BottomNavBar';
import { CLERK_KEY } from './services/CommonDocs';
// import AuthStackNavigator from './router/AuthStackNavigator';

const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

export default function App() {
  return (
    <ClerkProvider publishableKey={CLERK_KEY as string} tokenCache={tokenCache}>
      <NavigationContainer>
        {/* Initial AuthStack implementation, currently cannot use due to 
            Maximum of 1 navigation container per navigation tree requirement.
            Will decide which is better to use.
        <AuthStackNavigator /> */}
        <BottomNavBar />
      </NavigationContainer>
    </ClerkProvider>
  );
}
