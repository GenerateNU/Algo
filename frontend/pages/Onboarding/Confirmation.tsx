import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { completeOnboarding } from '../../reducers/onboarding/onboardingReducer';
import { registerUser } from '../../services/users';
import { RootState } from '../../components/LayoutWrapper';
import { User } from '../../types/types';
// import { useNavigation } from '@react-navigation/native';

const Confirmation: React.FC = () => {
  const dispatch = useDispatch();
  const onboarding = useSelector((state: RootState) => state.onboarding);
  // const navigation = useNavigation();
  // navigation.navigate('Explore' as never);

  const handleContinue = async () => {
    const user: User = {
      username: onboarding.username,
      email: onboarding.email,
      pass_word: onboarding.password,
      first_name: onboarding.firstName,
      last_name: onboarding.lastName,
      risk_tolerance: onboarding.risk,
      years_of_experience: onboarding.yearsOfExperience,
    };
    const newUser = await registerUser(user, onboarding.financialGoals, []);
    
    if (newUser) {
      dispatch(completeOnboarding());
    } else {
      console.log('Error registering user');
      console.log(JSON.stringify(newUser));
    }
  };

  return (
    <View>
      <Text>All Set!</Text>
      <Text>Welcome to Carbon!</Text>
      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default Confirmation;
