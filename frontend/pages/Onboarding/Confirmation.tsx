import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { completeOnboarding } from '../../reducers/onboarding/onboardingReducer';
import { registerUser } from '../../services/users';
import { RootState } from '../../components/LayoutWrapper';
import { User } from '../../types/types';

const Confirmation: React.FC = () => {
  const dispatch = useDispatch();
  const onboarding = useSelector((state: RootState) => state.onboarding);

  const handleContinue = async () => {
    // const user: User = {
    //   username: onboarding.username,
    //   email: onboarding.email,
    //   pass_word: onboarding.password,
    //   first_name: onboarding.firstName,
    //   last_name: onboarding.lastName,
    //   risk_tolerance: onboarding.risk,
    //   years_of_experience: onboarding.yearsOfExperience,
    // };
    /*
    const newUser = await registerUser(
      user,
      onboarding.financialGoalsShortTerm,
      onboarding.financialGoalsLongTerm,
    );
    */

    // if (newUser) {
    console.log("completting onboarding");
    dispatch(completeOnboarding());
    // } else {
    //   console.log('Error registering user');
    // }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>All set!</Text>
      <Text style={styles.subHeader}>How do I use Carbon?</Text>
      <View style={styles.walkthroughContainer}>
        {/* You will insert your app walkthrough component here */}
        <Text style={styles.walkthroughText}>*insert walk through of app</Text>
      </View>
      <TouchableOpacity onPress={() => console.log("pressed")} style={styles.continueButton}>
        <Text style={styles.continueButtonText}>Continue →</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF', // Set the background color to white
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subHeader: {
    fontSize: 18,
    marginBottom: 32,
  },
  walkthroughContainer: {
    width: '80%',
    height: 300, // Adjust the height as needed
    backgroundColor: '#A9A9A9', // This is the placeholder for the walkthrough container
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
    borderWidth: 2,
    borderColor: '#0000FF', // The border color is set to blue
  },
  walkthroughText: {
    textAlign: 'center',
    color: '#FFFFFF', // The text color is white for contrast
  },
  continueButton: {
    backgroundColor: '#D3D3D3', // Continue button background color
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  continueButtonText: {
    fontSize: 18,
    color: '#000000', // Continue button text color
  },
});

export default Confirmation;
