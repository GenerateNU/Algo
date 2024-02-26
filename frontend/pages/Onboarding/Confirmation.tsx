import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { completeOnboarding } from '../../reducers/onboarding/onboardingReducer';
// import { useNavigation } from '@react-navigation/native';

const Confirmation: React.FC = () => {
  const dispatch = useDispatch();
  // const navigation = useNavigation();

  const handleContinue = () => {
    dispatch(completeOnboarding());
    // navigation.navigate('Explore' as never);
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
