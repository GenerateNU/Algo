import * as React from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import {
  updateFirstName,
  updateLastName,
} from '../../reducers/onboarding/onboardingReducer';
import { AuthNavigationProp } from '../../types/navigationTypes';

export default function Fullname() {
  const dispatch = useDispatch();
  const navigation = useNavigation<AuthNavigationProp>();

  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');

  const handleContinue = async () => {
    if (!firstName || !lastName) {
      Alert.alert('Please enter your name.');
      return;
    }

    dispatch(updateFirstName(firstName));
    dispatch(updateLastName(lastName));

    navigation.navigate('GoalsPage');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let's get started</Text>
      <Text style={styles.subtitle}>What is your name?</Text>

      <TextInput
        style={styles.input}
        onChangeText={setFirstName}
        value={firstName}
        placeholder="First Name"
      />

      <TextInput
        style={styles.input}
        onChangeText={setLastName}
        value={lastName}
        placeholder="Last Name"
      />

      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

// Reuse the same styles from LoginPage or create specific ones for SignInPage
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5', // You can set your own color scheme
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333', // Choose a color that fits your app theme
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: '#7C7C7C', // Adjust color to match your theme
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#7C7C7C', // Adjust color to match your theme
    marginBottom: 30,
  },
  input: {
    height: 50,
    width: '100%', // Adjust width as per your layout
    backgroundColor: '#fff', // Background color for the input
    borderWidth: 1,
    borderColor: '#ddd', // Border color for the input
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  continueButton: {
    padding: 15,
    borderRadius: 20,
    backgroundColor: '#34A853',
    alignItems: 'center',
    marginTop: 20,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
