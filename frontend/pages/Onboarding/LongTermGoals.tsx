import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthNavigationProp } from '../../types/navigationTypes';
import {
  updateFinancialGoalsLongTerm,
} from '../../reducers/onboarding/onboardingReducer';
import { useUser } from '@clerk/clerk-expo';
import { updateMetadata } from '../../services/clerk';
import FinancialGoal from '../../components/FinancialGoal';
import WizardStep from '../../components/WizardStep';

// main component
const LongTermGoals: React.FC = () => {
  const dispatch = useDispatch();
  const { isSignedIn, user } = useUser();

  const [selectedLongTermGoals, setSelectedLongTermGoals] = useState<string[]>(
    [],
  );
  const navigate = useNavigation<AuthNavigationProp>();

  const handleSelectLongTermGoal = (goal: string) => {
    if (selectedLongTermGoals.includes(goal)) {
      setSelectedLongTermGoals(
        selectedLongTermGoals.filter(item => item !== goal),
      );
    } else {
      setSelectedLongTermGoals([...selectedLongTermGoals, goal]);
    }
  };

  const handleMetadata = async() => {
    if (isSignedIn) {
      await updateMetadata(user, "Long Term Goals", selectedLongTermGoals);
    }
  }

  const handleContinue = () => {
    if (!isSignedIn) {
      Alert.alert("Something went wrong - not signed up");
      return;
    }

    dispatch(updateFinancialGoalsLongTerm(selectedLongTermGoals));
    console.log('selectedLongTermGoals', selectedLongTermGoals);

    handleMetadata();

    // Navigate to the next page
    navigate.navigate('ExperienceAndRisk');
  };

  const longTermGoals = [
    'Build a legacy portfolio',
    'Build a retirement fund',
    'Create a passive income stream',
    'Fund a major life goal',
  ];

  // apply the active style when there are selected goals
  const continueButtonStyle =
    (selectedLongTermGoals.length) > 0
      ? styles.continueButtonActive
      : pageStyles.continueButton;

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={pageStyles.container}>
        <View style={pageStyles.top}>
          <View style={styles.image}>
            <Image source={require('../../assets/logomark.png')} style={styles.logo} />
          </View>
          <Text style={pageStyles.subtitle}>Financial Goals</Text>
          <Text style={pageStyles.description}>Select at least one long-term financial goal</Text>
          <View style={pageStyles.goalsContainer}>
            {longTermGoals.map((goal, index) => (
              <FinancialGoal
                key={index}
                goal={goal}
                isSelected={selectedLongTermGoals.includes(goal)}
                onSelect={handleSelectLongTermGoal}
              />
            ))}
          </View>
          <View style={styles.buttonCont}>
            <TouchableOpacity onPress={handleContinue} style={continueButtonStyle}>
              <Text style={pageStyles.continueButtonText}>Continue →</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.wizard}>
          <WizardStep step={3}/>
        </View>
        
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
  wizard: {
    flexDirection: "column",
    justifyContent: "flex-end",
    flex: 1,
    marginTop: "5%",
    width: "100%",
  },
  buttonCont: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end"
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
    padding: 15,
    width: '45%',
    marginTop: 8,
    backgroundColor: '#333333',
    alignItems: 'center',
    borderRadius: 20,
  },
  SafeAreaView: {
    flex: 1,
    backgroundColor: '#ffffff', // Background color for the SafeAreaView
  },
});

const pageStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 25,
    paddingTop: "10%",
    backgroundColor: '#FFFFFF', // The background color is white
  },
  top: {
    flex: 29,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: "100%"
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000', // Black color for the title
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 22,
    color: '#7C7C7C', // Adjust color to match your theme
    marginBottom: 10,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    color: '#7C7C7C', // Adjust color to match your theme
    marginBottom: 30,
  },
  goalsContainer: {
    width: '100%', // Full width to contain the goals
    marginBottom: 15,
  },
  continueButton: {
    padding: 15,
    width: '45%',
    marginTop: 8,
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#C0C0C0', // Grey color for the button
  },
  continueButtonText: {
    color: '#ffffff', // White color for the button text
    fontSize: 18,
  },
});

export default LongTermGoals;