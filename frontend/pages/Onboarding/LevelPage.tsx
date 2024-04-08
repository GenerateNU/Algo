import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LevelPageNavigationProp } from '../../types/navigationTypes';
import { useUser } from '@clerk/clerk-expo';
import { updateMetadata } from '../../services/clerk';
import WizardStep from '../../components/WizardStep';

const FinancialLiteracyLevelPage: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const navigation = useNavigation<LevelPageNavigationProp>();
  const { isSignedIn, user} = useUser();

  const handleSelection = (option: string) => {
    setSelectedOption(option);
  };

  const handleContinue = () => {
    console.log(selectedOption);
    console.log(user)
    if (!isSignedIn) {
      Alert.alert('Something went wrong - not signed in');
      return;
    }
    updateMetadata(user, "Financial Literacy", selectedOption);
    navigation.navigate('ConnectPage');
  };

  // Dynamically determine the continue button's background color
  const continueButtonStyle = selectedOption !== '' ? styles.continueButtonActive : styles.continueButton;

  return (
    <View style={styles.container}>
      <View style={styles.image}>
          <Image source={require('../../assets/logomark.png')} style={styles.logo} />
        </View>
      <Text style={styles.subtitle}>Financial Literacy</Text>
      <Text style={styles.description}>What’s your current level of financial literacy?</Text>
      
      <View style={styles.optionsContainer}>
        <TouchableOpacity onPress={() => handleSelection('Beginner')} style={selectedOption === 'Beginner' ? styles.selectedOption : styles.option}>
          <Text style={selectedOption === 'Beginner' ? styles.selectedText : styles.optionText}>Beginner</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => handleSelection('Intermediate')} style={selectedOption === 'Intermediate' ? styles.selectedOption : styles.option}>
          <Text style={selectedOption === 'Intermediate' ? styles.selectedText : styles.optionText}>Intermediate</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => handleSelection('Expert')} style={selectedOption === 'Expert' ? styles.selectedOption : styles.option}>
          <Text style={selectedOption === 'Expert' ? styles.selectedText : styles.optionText}>Expert</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.bottomCont}>
        <TouchableOpacity onPress={handleContinue} style={continueButtonStyle}>
          <Text style={styles.continueButtonText}>Continue →</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.wizard}>
        <WizardStep step={4}/>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: "25%",
    padding: 25,
    backgroundColor: '#ffffff', // White background as seen in the image
  },
  wizard: {
    flexDirection: "column",
    justifyContent: "flex-start",
    flex: 1,
    marginTop: "80%",
    width: "100%",
  },
  subtitle: {
    fontSize: 22,
    color: '#7C7C7C', // Adjust color to match your theme
    marginBottom: 10,
  },
  bottomCont: {
    flexDirection: "row",
    marginTop: "15%",
    justifyContent: "flex-end",
    width: "100%",
  },
  description: {
    fontSize: 16,
    color: '#7C7C7C', // Adjust color to match your theme
    marginBottom: 30,
  },
  image: {
    justifyContent: "center",
    flexDirection: "row",
    width: "100%"
  },
  logo: {
    width: 85,
    height: 85,
    marginBottom: 40, 
    alignSelf: 'center', 
  },
  continueButton: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 30,
    width: "45%",
    backgroundColor: '#C0C0C0', // Original grey color
    marginTop: "5%",
  },
  selectedText: {
    color: "#ffffff"
  },
  continueButtonActive: {
    // Duplicate the continueButton styles here
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 30,
    marginTop: "5%",
    width: "45%",
    backgroundColor: '#333333', // Darker grey color for active state
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
    borderRadius: 18,
    backgroundColor: '#F1F1F1', // Background color for the input
    borderWidth: 1,
    borderColor: '#F1F1F1', // Border color for the input
    fontSize: 16,
    height: 40,
  },
  selectedOption: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#02AD98', // Black border color for the selected option
    borderRadius: 18,
    backgroundColor: '#02AD98', // Black background for the selected option
    height: 40,
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
