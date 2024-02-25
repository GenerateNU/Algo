import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LevelPageNavigationProp } from '../types/navigationTypes';

const FinancialLiteracyLevelPage: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const navigation = useNavigation<LevelPageNavigationProp>();

  const handleSelection = (option: string) => {
    setSelectedOption(option);
    // TODO: Handle the selection here, possibly update the state or navigate
  };

  const handleContinue = () => {
    // TODO: Navigate to the next screen or handle the continue action
    console.log(selectedOption);
    navigation.navigate('TutorialPage');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let's get started</Text>
      <Text style={styles.question}>What’s your current level of financial literacy?</Text>
      
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
      
      <TouchableOpacity onPress={handleContinue} style={styles.continueButton}>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000', // Black color for the title
    marginBottom: 20,
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
    backgroundColor: '#000000', // Black background for the selected option
  },
  optionText: {
    color: '#000000', // Black text color for the option
  },
  continueButton: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#C0C0C0', // Grey color for the continue button as seen in the image
  },
  continueButtonText: {
    color: '#ffffff', // White text color for the continue button
    fontSize: 18,
  },
});

export default FinancialLiteracyLevelPage;
