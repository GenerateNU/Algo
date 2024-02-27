import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { updateRisk } from '../../reducers/onboarding/onboardingReducer';
import Slider from '@react-native-community/slider';
import { AuthNavigationProp } from '../../types/navigationTypes';

const ExperienceAndRisk: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<AuthNavigationProp>();

  const [risk, setRisk] = useState("medium");
  const [experience, setExperience] = React.useState("0");
  // const [experience, setExperience] = useState<number | null>();
  // this one is page value
  const [sliderValue, setSliderValue] = useState(0.5);

  const handleSliderChange = (value: number) => {
    setSliderValue(value);
    if (value < 0.25) {
      setRisk('low'); // will use reducer
    } else if (value < 0.75) {
      setRisk('medium');
    } else {
      setRisk('high');
    }
  };

  useEffect(() => {
    console.log(risk);
  }, [risk]);

  const handleContinue = () => {
    dispatch(updateRisk(risk));
    // dispatch(updateExperience(experience));
    // Navigate to the next page
    navigation.navigate('LevelPage');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Risk and Experience</Text>
      <View>
        <Text style={styles.subtitle}>What is your Risk Tolerance?</Text>
        <Slider
          minimumValue={0}
          maximumValue={1}
          step={0.10}
          value={sliderValue}
          onValueChange={handleSliderChange}
          thumbTintColor="#34A853" // Optional: customizes the slider thumb color
          minimumTrackTintColor="#34A853" // Optional: customizes the slider track color before the thumb
          maximumTrackTintColor="#000000" // Optional: customizes the slider track color after the thumb
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 25,
          }}>
          <Text className={`${'low' == risk ? 'font-bold' : ''}`}>Low</Text>
          <Text className={`${'medium' == risk ? 'font-bold' : ''}`}>Medium</Text>
          <Text className={`${'high' == risk ? 'font-bold' : ''}`}>High</Text>
        </View>
        <Text style={styles.subtitle}>How many years of experience do you have?</Text>
        <TextInput
          style={styles.input}
          keyboardType='numeric'
          onChangeText={setExperience}
          value={experience}
          placeholder="Password"
        />
      </View>
      
      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: '#fff',
  },
  title: {
    marginTop: "10%",
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
  input: {
    height: 50,
    width: '100%', // Adjust width as per your layout
    backgroundColor: '#fff', // Background color for the input
    borderWidth: 1,
    borderColor: '#ddd', // Border color for the input
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
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
    marginBottom: '8%',
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

export default ExperienceAndRisk;
