import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { AuthNavigationProp } from '../../types/navigationTypes';
import WizardStep from '../../components/WizardStep';

const ConnectPage: React.FC = () => {
  const navigation = useNavigation<AuthNavigationProp>();

  // You might want to handle selection or connection logic here
  const handleConnect = (option: string) => {
    if (option === 'Etrade') {
      navigation.navigate('Etrade');
    }
  };
  
  const handleSkip = () => {
    navigation.navigate('Confirmation');
  };

  // const handleBack = () => {
  //   navigation.navigate('GoalsPage'); 
  // };

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image source={require('../../assets/logomark.png')} style={styles.logo} />
      </View>
      <Text style={styles.subtitle}>Let's get started</Text>
      <Text style={styles.description}>Connect your brokerage</Text>

      <Button mode="outlined" onPress={() => handleConnect('Etrade')} style={styles.button} labelStyle={{ color: 'black'}}>
        Etrade
      </Button>
      
      <Button mode="outlined" onPress={() => handleConnect('Brokerage Option 2')} style={styles.button} labelStyle={{ color: 'black'}}>
        Brokerage Option 2
      </Button>
      
      <Button mode="outlined" onPress={() => handleConnect('Brokerage Option 3')} style={styles.button} labelStyle={{ color: 'black'}}>
        Brokerage Option 3
      </Button>

      <TouchableOpacity onPress={handleSkip} className='w-full flex-row justify-center'>
        <Text style={styles.skipText}>Skip for now</Text>
      </TouchableOpacity>

      <View style={styles.wizard}>
        <View className='w-full flex-row justify-end mb-[12]'><Text style={styles.almost}>Allmost done!</Text></View>
        <WizardStep step={5}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 25,
    paddingTop: "25%",
    backgroundColor: '#FFFFFF', // The background color is white
  },
  almost: {
    color: "#808080"
  },
  wizard: {
    flexDirection: "column",
    justifyContent: "flex-start",
    flex: 1,
    marginTop: "30%",
    width: "100%",
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
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 22,
    color: '#7C7C7C', // Adjust color to match your theme
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#7C7C7C', // Adjust color to match your theme
    marginBottom: 30,
  },
  button: {
    height: 60,
    width: '100%', // Adjust width as per your layout
    backgroundColor: '#F1F1F1', // Background color for the input
    borderWidth: 1,
    justifyContent: "center",
    borderColor: '#F1F1F1', // Border color for the input
    borderRadius: 18,
    paddingHorizontal: 14,
    marginBottom: 15,
    color: "#808080",
    fontSize: 16,
  },
  skipText: {
    fontSize: 16,
    color: '#7C7C7C', // Skip text color as in the screenshot
    marginTop: 20,
  },
});

export default ConnectPage;
