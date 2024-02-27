import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthNavigationProp } from '../../types/navigationTypes';
import {
  updateFinancialGoalsShortTerm,
  updateFinancialGoalsLongTerm,
} from '../../reducers/onboarding/onboardingReducer';

type FinancialGoalProps = {
  goal: string;
  isSelected: boolean;
  onSelect: (goal: string) => void;
};

const FinancialGoal: React.FC<FinancialGoalProps> = ({
  goal,
  isSelected,
  onSelect,
}) => {
  // Based on the isSelected prop determine the styles to apply
  const goalStyle = isSelected ? styles.goalSelected : styles.goal;
  const goalTextStyle = isSelected ? styles.goalTextSelected : styles.goalText;

  return (
    <TouchableOpacity onPress={() => onSelect(goal)} style={goalStyle}>
      <Text style={goalTextStyle}>{goal}</Text>
    </TouchableOpacity>
  );
};

// main component
const GoalsPage: React.FC = () => {
  const dispatch = useDispatch();
  const [selectedShortTermGoals, setSelectedShortTermGoals] = useState<
    string[]
  >([]);

  const [selectedLongTermGoals, setSelectedLongTermGoals] = useState<string[]>(
    [],
  );
  const navigate = useNavigation<AuthNavigationProp>();

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
    console.log('selectedShortTermGoals', selectedShortTermGoals);
    console.log('selectedLongTermGoals', selectedLongTermGoals);
    // Navigate to the next page
    navigate.navigate('ExperienceAndRisk');
  };

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

  // apply the active style when there are selected goals
  const continueButtonStyle =
    selectedShortTermGoals.length > 0
      ? styles.continueButtonActive
      : pageStyles.continueButton;

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={pageStyles.container}>
        <Text style={pageStyles.title}>Let's get started</Text>
        <Text style={pageStyles.subtitle}>What are your financial goals?</Text>
        <ScrollView style={pageStyles.goalsContainer}>
          {shortTermGoals.map((goal, index) => (
            <FinancialGoal
              key={index}
              goal={goal}
              isSelected={selectedShortTermGoals.includes(goal)}
              onSelect={handleSelectShortTermGoal}
            />
          ))}
        </ScrollView>
        <ScrollView style={pageStyles.goalsContainer}>
          {longTermGoals.map((goal, index) => (
            <FinancialGoal
              key={index}
              goal={goal}
              isSelected={selectedLongTermGoals.includes(goal)}
              onSelect={handleSelectLongTermGoal}
            />
          ))}
        </ScrollView>
        <TouchableOpacity onPress={handleContinue} style={continueButtonStyle}>
          <Text style={pageStyles.continueButtonText}>Continue →</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  goal: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5', // The color for unselected goal
    marginHorizontal: 5, // Add some horizontal margin for better spacing
  },
  goalSelected: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#6F6F6F',
    borderRadius: 20,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6F6F6F', // The color for selected goal
    marginHorizontal: 5, // Keep the horizontal margin consistent
  },
  goalText: {
    color: '#000',
  },
  goalTextSelected: {
    color: '#fff', // Text color for selected goal
  },
  continueButtonActive: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#6F6F6F', // Darker color when active
    borderRadius: 30,
    padding: 10,
  },
  SafeAreaView: {
    flex: 1,
    backgroundColor: '#ffffff', // Background color for the SafeAreaView
  },
});

const pageStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    paddingTop: 140,
    backgroundColor: '#FFFFFF', // The background color is white
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000', // Black color for the title
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    color: '#000000', // Black color for the subtitle
    marginBottom: 20,
  },
  goalsContainer: {
    width: '100%', // Full width to contain the goals
  },
  continueButton: {
    position: 'absolute', // Position button over the component
    bottom: 20, // Distance from the bottom
    right: 20, // Distance from the right
    backgroundColor: '#C0C0C0', // Grey color for the button
    borderRadius: 30,
    padding: 10,
  },
  continueButtonText: {
    color: '#ffffff', // White color for the button text
    fontSize: 18,
  },
});

export default GoalsPage;
