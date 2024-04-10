import * as React from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { useUser } from '@clerk/clerk-expo';
import {
  updateFirstName,
  updateLastName,
} from '../../reducers/onboarding/onboardingReducer';
import { AuthNavigationProp } from '../../types/navigationTypes';
import { updateFirstAndLast } from '../../services/clerk';
import WizardStep from '../../components/WizardStep';

export default function Fullname() {
  const dispatch = useDispatch();
  const navigation = useNavigation<AuthNavigationProp>();

  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const { isSignedIn, user} = useUser();

  const handleContinue = async () => {
    if (!firstName || !lastName) {
      Alert.alert('Please enter your name.');
      return;
    }

    if (!isSignedIn) {
      Alert.alert('Something went wrong - not signed in');
      return
    }

    updateFirstAndLast(user, firstName, lastName);

    dispatch(updateFirstName(firstName));
    dispatch(updateLastName(lastName));

    navigation.navigate('ShortTermGoals');
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.image}>
          <Image source={require('../../assets/logomark.png')} style={styles.logo} />
        </View>
        <Text style={styles.subtitle} className='font-bold'>Let's get started</Text>
        <Text style={styles.description}>What is your name?</Text>

        <View className='rounded w-full'>
          <TextInput
            style={styles.input}
            onChangeText={setFirstName}
            value={firstName}
            placeholder="First Name"
          />
        </View>
        
        <View className='rounded w-full mb-[20]'>
          <TextInput
            style={styles.input}
            onChangeText={setLastName}
            value={lastName}
            placeholder="Last Name"
          />
        </View>
        
        <View style={styles.bottomCont}>
          <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
            <Text style={styles.continueButtonText}>Continue →</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.wizard}>
        <WizardStep step={1}/>
      </View>
      
    </View>
  );
}

// Reuse the same styles from LoginPage or create specific ones for SignInPage
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 25,
    paddingTop: "30%",
    backgroundColor: '#FFFFFF', // You can set your own color scheme
  },
  top: {
    flex: 5,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: "100%"
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333', // Choose a color that fits your app theme
    marginBottom: 20,
  },
  wizard: {
    flexDirection: "column",
    justifyContent: "flex-end",
    flex: 1,
    marginBottom: "10%",
    width: "100%",
  },
  image: {
    justifyContent: "center",
    flexDirection: "row",
    width: "100%"
  },
  bottomCont: {
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%",
  },
  subtitle: {
    fontSize: 22,
    color: '#7C7C7C', // Adjust color to match your theme
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#7C7C7C', // Adjust color to match your theme
    marginBottom: 30,
  },
  input: {
    height: 60,
    width: '100%', // Adjust width as per your layout
    backgroundColor: '#F1F1F1', // Background color for the input
    borderWidth: 1,
    borderColor: '#F1F1F1', // Border color for the input
    borderRadius: 18,
    padding: 14,
    marginBottom: 15,
    fontSize: 16,
  },
  logo: {
    width: 85,
    height: 85,
    marginBottom: 40, 
    alignSelf: 'center', 
  },
  continueButton: {
    padding: 15,
    borderRadius: 20,
    width: '45%',
    backgroundColor: '#333333',
    alignItems: 'center',
    marginTop: 20,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
