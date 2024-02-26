import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { updateRisk } from '../../reducers/onboarding/onboardingReducer';
import Slider from '@react-native-community/slider';
import { GoalsPageNavigationProp } from '../../types/navigationTypes';

const ExperienceAndRisk: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<GoalsPageNavigationProp>();

  const [risk, setRisk] = useState<string | null>();
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

  const handleContinue = () => {
    dispatch(updateRisk(risk));
    // dispatch(updateExperience(experience));
    // Navigate to the next page
    navigation.navigate('Confirmation' as never);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.container}>What is your Risk tolerance?</Text>
      <Slider
        minimumValue={0}
        maximumValue={1}
        step={0.01}
        value={sliderValue}
        onValueChange={handleSliderChange}
        thumbTintColor="#007AFF" // Optional: customizes the slider thumb color
        minimumTrackTintColor="#007AFF" // Optional: customizes the slider track color before the thumb
        maximumTrackTintColor="#000000" // Optional: customizes the slider track color after the thumb
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 18,
        }}>
        <Text className={`${'low' == risk ? 'text-bold' : ''}`}>Low</Text>
        <Text className={`${'medium' == risk ? 'text-bold' : ''}`}>Medium</Text>
        <Text className={`${'hish' == risk ? 'text-bold' : ''}`}>High</Text>
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

export default ExperienceAndRisk;
