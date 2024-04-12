import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { updateKnowledge, updateRisk } from '../../reducers/onboarding/onboardingReducer';
import Slider from '@react-native-community/slider';
import { AuthNavigationProp } from '../../types/navigationTypes';
import { useUser } from '@clerk/clerk-expo';
import { updateMetadata } from '../../services/clerk';
import WizardStep from '../../components/WizardStep';

const ExperienceAndRisk: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<AuthNavigationProp>();
  const { isSignedIn, user} = useUser();

  const updateMetada = async () => {
    if (!isSignedIn) {
      Alert.alert('Something went wrong - not signed in');
      return
    }

    await updateMetadata(user, "Risk Tolerance", risk);
    updateMetadata(user, "Knowledge", knowledge);
  }

  const [risk, setRisk] = useState("medium");
  const [knowledge, setKnowledge] = useState("intermediate");
  // this one is page value
  const [riskSliderValue, setRiskSliderValue] = useState(0.5);
  const [knowledgeSliderValue, setKnowledgeSliderValue] = useState(0.5);

  const handleRiskSliderChange = (value: number) => {
    setRiskSliderValue(value);
    if (value < 0.25) {
      setRisk('low'); // will use reducer
    } else if (value < 0.75) {
      setRisk('medium');
    } else {
      setRisk('high');
    }
  };

  const handleKnowledgeSliderChange = (value: number) => {
    setKnowledgeSliderValue(value);
    if (value < 0.25) {
      setKnowledge('beginner'); // will use reducer
    } else if (value < 0.75) {
      setKnowledge('intermediate');
    } else {
      setKnowledge('expert');
    }
  };

  useEffect(() => {
    console.log(risk);
  }, [risk]);

  const handleContinue = () => {
    dispatch(updateRisk(risk));
    dispatch(updateKnowledge(knowledge))
    if (!isSignedIn) {
      Alert.alert('Something went wrong - not signed in');
      return
    }
    updateMetada();
    // Navigate to the next page
    navigation.navigate('ConnectPage');
  };


  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.image}>
          <Image source={require('../../assets/logomark.png')} style={styles.logo} />
        </View>
        <Text style={styles.subtitle}>Risk and Knowledge</Text>
        <View className='w-full'>
          <Text style={styles.description}>What is your Risk Tolerance?</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 15,
            }}>
            <Text style={styles.textColor} className={`${'low' == risk ? 'font-bold' : ''}`}>Low</Text>
            <Text style={styles.textColor} className={`${'medium' == risk ? 'font-bold' : ''}`}>Medium</Text>
            <Text style={styles.textColor} className={`${'high' == risk ? 'font-bold' : ''}`}>High</Text>
          </View>
          <Slider
            minimumValue={0}
            maximumValue={1}
            step={0.10}
            value={riskSliderValue}
            onValueChange={handleRiskSliderChange}
            thumbTintColor="#02AD98" // Optional: customizes the slider thumb color
            minimumTrackTintColor="#02AD98" // Optional: customizes the slider track color before the thumb
            maximumTrackTintColor="#DADADA" // Optional: customizes the slider track color after the thumb
          />

          <Text style={styles.description}>What is your level of Financial Knowledge?</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 15,
            }}>
            <Text style={styles.textColor} className={`${'beginner' == knowledge ? 'font-bold' : ''}`}>Beginner</Text>
            <Text style={styles.textColor} className={`${'intermediate' == knowledge ? 'font-bold' : ''}`}>Intermediate</Text>
            <Text style={styles.textColor} className={`${'expert' == knowledge ? 'font-bold' : ''}`}>Expert</Text>
          </View>
          <Slider
            minimumValue={0}
            maximumValue={1}
            step={0.10}
            value={knowledgeSliderValue}
            onValueChange={handleKnowledgeSliderChange}
            thumbTintColor="#02AD98" // Optional: customizes the slider thumb color
            minimumTrackTintColor="#02AD98" // Optional: customizes the slider track color before the thumb
            maximumTrackTintColor="#DADADA" // Optional: customizes the slider track color after the thumb
          />
        </View>
        
        <View style={styles.bottomCont}>
          <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
            <Text style={styles.continueButtonText}>Continue →</Text>
          </TouchableOpacity>
        </View>
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
    padding: 25,
    paddingTop: "20%",
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: '#fff',
  },
  wizard: {
    flexDirection: "column",
    justifyContent: "flex-end",
    flex: 1,
    marginBottom: "10%",
    width: "100%",
  },
  bottomCont: {
    flexDirection: "row",
    marginTop: "15%",
    justifyContent: "flex-end",
    width: "100%",
  },
  image: {
    justifyContent: "center",
    flexDirection: "row",
    width: "100%"
  },
  spacer: {
    marginTop: 20,
  },
  textColor: {
    color: '#333333'
  },
  logo: {
    width: 85,
    height: 85,
    marginBottom: 60, 
    alignSelf: 'center', 
  },
  top: {
    flex: 5,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: "100%"
  },
  title: {
    marginTop: "10%",
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: '#7C7C7C', // Adjust color to match your theme
    marginBottom: 10,
  },
  description: {
    marginTop: "10%",
    fontSize: 16,
    color: '#7C7C7C', // Adjust color to match your theme
    marginBottom: 30,
  },
  goalsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  input: {
    height: 60,
    width: '100%', // Adjust width as per your layout
    backgroundColor: '#F1F1F1', // Background color for the input
    borderWidth: 1,
    borderColor: '#F1F1F1', // Border color for the input
    borderRadius: 18,
    padding: 14,
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
    borderRadius: 20,
    width: '45%',
    backgroundColor: '#333333',
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ExperienceAndRisk;
