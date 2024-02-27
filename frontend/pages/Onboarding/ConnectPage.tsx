import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { AuthNavigationProp } from '../../types/navigationTypes';

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
      <Text style={styles.title}>Connect your brokerage</Text>

      <Button mode="outlined" onPress={() => handleConnect('Etrade')} style={styles.button} labelStyle={{ color: 'black'}}>
        Etrade
      </Button>
      
      <Button mode="outlined" onPress={() => handleConnect('Brokerage Option 2')} style={styles.button} labelStyle={{ color: 'black'}}>
        Brokerage Option 2
      </Button>
      
      <Button mode="outlined" onPress={() => handleConnect('Brokerage Option 3')} style={styles.button} labelStyle={{ color: 'black'}}>
        Brokerage Option 3
      </Button>

      <TouchableOpacity onPress={handleSkip}>
        <Text style={styles.skipText}>Skip for now</Text>
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
    backgroundColor: '#FFFFFF', // The background color is white
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    color: '#7C7C7C', // Subtitle color as in the screenshot
    marginBottom: 30,
  },
  button: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    borderColor: '#D3D3D3', // Border color to match the screenshot
    marginBottom: 10,
  },
  skipText: {
    fontSize: 16,
    color: '#7C7C7C', // Skip text color as in the screenshot
    marginTop: 20,
  },
});

export default ConnectPage;
