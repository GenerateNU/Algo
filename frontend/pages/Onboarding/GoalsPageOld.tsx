import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FinancialGoal from '../../components/FinancialGoal';
import { useDispatch } from 'react-redux';
import { updateFinancialGoalsShortTerm, updateFinancialGoalsLongTerm } from '../../reducers/onboarding/onboardingReducer';
import { AuthNavigationProp } from '../../types/navigationTypes';

const GoalsPage: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<AuthNavigationProp>();
  const [selectedShortTermGoals, setSelectedShortTermGoals] = useState<
    string[]
  >([]);

  const [selectedLongTermGoals, setSelectedLongTermGoals] = useState<string[]>(
    [],
  );

  const shortTermGoals = [
    'Learn more about investing',
    'Diversify portfolio',
    'Track spending patterns',
    'Set a savings target',
  ];

  const longTermGoals = [
    'Build a legacy portfolio',
    'Build a retirement fund',
    'Create a passive income stream',
    'Fund a major life goal',
  ];

  const handleSelectShortTermGoal = (goal: string) => {
    if (selectedShortTermGoals.includes(goal)) {
      setSelectedShortTermGoals(
        selectedShortTermGoals.filter(item => item !== goal),
      );
    } else {
      setSelectedShortTermGoals([...selectedShortTermGoals, goal]);
    }
  };

  const handleSelectLongTermGoal = (goal: string) => {
    if (selectedLongTermGoals.includes(goal)) {
      setSelectedLongTermGoals(
        selectedLongTermGoals.filter(item => item !== goal),
      );
    } else {
      setSelectedLongTermGoals([...selectedLongTermGoals, goal]);
    }
  };

  const handleContinue = () => {
    dispatch(updateFinancialGoalsShortTerm(selectedShortTermGoals));
    dispatch(updateFinancialGoalsLongTerm(selectedLongTermGoals));
    // Navigate to the next page
    navigation.navigate('ExperienceAndRisk');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let's get started</Text>
      <View>
        <Text style={styles.subtitle}>What are you short term financial goals?</Text>
        <View style={styles.goalsContainer}>
          {shortTermGoals.map(goal => (
            <FinancialGoal
              key={goal}
              goal={goal}
              isSelected={selectedShortTermGoals.includes(goal)}
              onSelect={handleSelectShortTermGoal}
            />
          ))}
        </View>
        <Text style={styles.subtitle}>What are you long term financial goals?</Text>
        <View style={styles.goalsContainer}>
          {longTermGoals.map(goal => (
            <FinancialGoal
              key={goal}
              goal={goal}
              isSelected={selectedLongTermGoals.includes(goal)}
              onSelect={handleSelectLongTermGoal}
            />
          ))}
        </View>
      </View>
      
      {selectedShortTermGoals.length > 0 || selectedLongTermGoals.length > 0 ? (
        <TouchableOpacity
          style={styles.continueButton}
          onPress={handleContinue}>
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.empty}></View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: "space-between"
  },
  title: {
    fontSize: 22,
    marginTop: "10%",
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 15,
  },
  goalsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: "100%",
    marginBottom: 18,
    gap: 4
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
    marginBottom: "10%"
  },
  empty: {
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: "14%"
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default GoalsPage;
