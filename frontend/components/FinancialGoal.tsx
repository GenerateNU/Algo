import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

type FinancialGoalProps = {
  goal: string;
  isSelected: boolean;
  onSelect: (goal: string) => void;
};

// The FinancialGoal component
const FinancialGoal: React.FC<FinancialGoalProps> = ({ goal, isSelected, onSelect }) => {
  // Based on the isSelected prop, we determine the styles to apply
  const goalStyle = isSelected ? styles.goalSelected : styles.goal;
  const goalTextStyle = isSelected ? styles.goalTextSelected : styles.goalText;

  return (
    <TouchableOpacity onPress={() => onSelect(goal)} style={goalStyle}>
      <Text style={goalTextStyle}>{goal}</Text>
    </TouchableOpacity>
  );
};

// Define the styles for the component
const styles = StyleSheet.create({
  goal: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginVertical: 4,
  },
  goalSelected: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#34A853', // A green border color
    borderRadius: 20,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#34A853', // A green background color
  },
  goalText: {
    color: '#000',
  },
  goalTextSelected: {
    color: '#fff',
  },
});

export default FinancialGoal; 

