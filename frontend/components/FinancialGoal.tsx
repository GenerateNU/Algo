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
    paddingHorizontal: 14,
    borderWidth: 1,
    borderRadius: 18,
    //marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 4,
    height: 45,
    width: '100%', // Adjust width as per your layout
    backgroundColor: '#F1F1F1', // Background color for the input
    borderColor: '#F1F1F1', // Border color for the input
    fontSize: 16,
  },
  goalSelected: {
    paddingHorizontal: 14,
    borderRadius: 18,
    //marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 4,
    height: 45,
    width: '100%', // Adjust width as per your layout
    backgroundColor: '#02AD98', // Background color for the input
    fontSize: 16,
  },
  goalText: {
    color: '#000',
  },
  goalTextSelected: {
    color: '#FFFFFF',
  },
});

export default FinancialGoal; 

