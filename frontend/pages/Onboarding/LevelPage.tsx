import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LevelPageNavigationProp } from '../../types/navigationTypes';

const FinancialLiteracyLevelPage: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const navigation = useNavigation<LevelPageNavigationProp>();

  const handleSelection = (option: string) => {
    setSelectedOption(option);
  };

  const handleContinue = () => {
    console.log(selectedOption);
    navigation.navigate('ConnectPage');
  };

  // Dynamically determine the continue button's background color
  const continueButtonStyle = selectedOption !== '' ? styles.continueButtonActive : styles.continueButton;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What’s your current level of financial literacy?</Text>
      
      <View style={styles.optionsContainer}>
        <TouchableOpacity onPress={() => handleSelection('Beginner')} style={selectedOption === 'Beginner' ? styles.selectedOption : styles.option}>
          <Text style={styles.optionText}>Beginner</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => handleSelection('Intermediate')} style={selectedOption === 'Intermediate' ? styles.selectedOption : styles.option}>
          <Text style={styles.optionText}>Intermediate</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => handleSelection('Expert')} style={selectedOption === 'Expert' ? styles.selectedOption : styles.option}>
          <Text style={styles.optionText}>Expert</Text>
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity onPress={handleContinue} style={continueButtonStyle}>
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
    padding: 20,
    backgroundColor: '#ffffff', // White background as seen in the image
  },
  continueButton: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 30,
    backgroundColor: '#C0C0C0', // Original grey color
    position: 'absolute', // Position button over the component
    bottom: 20, // Distance from the bottom
    right: 20, // Distance from the right
  },
  continueButtonActive: {
    // Duplicate the continueButton styles here
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 30,
    position: 'absolute', // Position button over the component
    bottom: 20, // Distance from the bottom
    right: 20, // Distance from the right
    backgroundColor: '#6F6F6F', // Darker grey color for active state
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000', // Black color for the title
    marginBottom: 60,
  },
  question: {
    fontSize: 18,
    color: '#000000', // Black color for the question
    marginBottom: 40,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%', // Full width to space out the options
    marginBottom: 30,
  },
  option: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#000000', // Black border color for the option
    borderRadius: 20,
  },
  selectedOption: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#000000', // Black border color for the selected option
    borderRadius: 20,
    backgroundColor: '#6F6F6F', // Black background for the selected option
  },
  optionText: {
    color: '#000000', // Black text color for the option
  },
  continueButtonText: {
    color: '#ffffff', // White text color for the continue button
    fontSize: 18,
  },
});

export default FinancialLiteracyLevelPage;
