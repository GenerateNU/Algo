import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FinancialGoal from '../../components/FinancialGoal';
import { useDispatch } from 'react-redux';
import { updateFinancialGoals } from '../../reducers/onboarding/onboardingReducer';
import { AuthNavigationProp } from '../../types/navigationTypes';

const GoalsPage: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<AuthNavigationProp>();
  const [selectedShortTermGoals, setSelectedShortTermGoals] = useState<string[]>([]);
  
  const shortTermGoals = [
    'Save for retirement',
    'Buy a house',
    'Start a business',
    'Save for vacation',
    'Emergency fund',
  ];

  const handleSelectGoal = (goal: string) => {
    if (selectedShortTermGoals.includes(goal)) {
      setSelectedShortTermGoals(selectedShortTermGoals.filter(item => item !== goal));
    } else {
      setSelectedShortTermGoals([...selectedShortTermGoals, goal]);
    }
  };

  const handleContinue = () => {
    dispatch(updateFinancialGoals(selectedShortTermGoals));
    // Navigate to the next page
    navigation.navigate('ExperienceAndRisk');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let's get started</Text>
      <Text style={styles.subtitle}>What are your financial goals?</Text>
      <View style={styles.goalsContainer}>
        {shortTermGoals.map(goal => (
          <FinancialGoal
            key={goal}
            goal={goal}
            isSelected={selectedShortTermGoals.includes(goal)}
            onSelect={handleSelectGoal}
          />
        ))}
      </View>
      {selectedShortTermGoals.length > 0 && (
        <TouchableOpacity
          style={styles.continueButton}
          onPress={handleContinue}>
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  goalsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  goal: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    marginBottom: 10,
  },
  goalSelected: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#34A853',
    borderRadius: 20,
    marginBottom: 10,
    backgroundColor: '#34A853',
  },
  goalText: {
    color: '#000',
  },
  goalTextSelected: {
    color: '#fff',
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

export default GoalsPage;
