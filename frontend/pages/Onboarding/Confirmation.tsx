import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground,} from 'react-native';
import Animated, {FadeIn} from 'react-native-reanimated';
import { useDispatch} from 'react-redux';
import { completeOnboarding } from '../../reducers/onboarding/onboardingReducer';
// import { registerUser } from '../../services/users';
//import { RootState } from '../../components/LayoutWrapper';
//import { User } from '../../types/types';

const Confirmation: React.FC = () => {
  const dispatch = useDispatch();
  //const onboarding = useSelector((state: RootState) => state.onboarding);

  const handleContinue = async () => {
    //console.log("completting onboarding");
    dispatch(completeOnboarding());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome To</Text>
      {/* <Text style={styles.subHeader}>How do I use Carbon?</Text>
      <View style={styles.walkthroughContainer}>
        
        <Text style={styles.walkthroughText}>*insert walk through of app</Text>
      </View> */}
      <View className='w-full flex-row items-center'>
        <Animated.View
          entering={FadeIn.delay(500)} style={styles.left}>
          <ImageBackground 
            source={require('../../assets/logomark.png')} 
            style={styles.logo} 
            imageStyle={
              {
                opacity: 0.15,
                objectFit: "contain"
              }}>
            <Animated.View entering={FadeIn.delay(1000)}>
              <Text style={styles.carbon}>carbon</Text>
            </Animated.View>
          </ImageBackground>
        </Animated.View>
        <View style={styles.right}>
          <Animated.View entering={FadeIn.delay(1500)}>
            <Text style={styles.text}>
              learn
            </Text>
          </Animated.View>
          <Animated.View entering={FadeIn.delay(2000)}>
            <Text style={styles.copy}>
              copy
            </Text>
          </Animated.View>
          <Animated.View entering={FadeIn.delay(2500)}>
            <Text style={styles.text}>
              socialize
            </Text>
          </Animated.View>
        </View>
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
    backgroundColor: '#FFFFFF', // Set the background color to white
  },
  carbon: {
    fontWeight: 'bold',
    fontSize: 48,
    color: '#02AD98',
    lineHeight: 48
  },
  left: {
    width: "50%",
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  right: {
    width: "50%",
    paddingVertical: 20,
    justifyContent: "center",
  },
  text: {
    fontWeight: 'bold',
    fontSize: 48,
    color: '#B7B7B7',
    lineHeight: 48
  },
  copy: {
    fontWeight: 'bold',
    fontSize: 48,
    color: '#666666',
    lineHeight: 48
  },
  logo: {
    width: "100%",
    objectFit: "contain",
    height: 120,
    //marginBottom: 40, 
    alignSelf: 'flex-end', 
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    fontSize: 48,
    fontWeight: 'bold',
    color: "#B7B7B7",
    marginBottom: 8,
  },
  subHeader: {
    fontSize: 18,
    marginBottom: 32,
  },
  walkthroughContainer: {
    width: '80%',
    height: 300, // Adjust the height as needed
    backgroundColor: '#A9A9A9', // This is the placeholder for the walkthrough container
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
    borderWidth: 2,
    borderColor: '#0000FF', // The border color is set to blue
  },
  walkthroughText: {
    textAlign: 'center',
    color: '#FFFFFF', // The text color is white for contrast
  },
  continueButton: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 30,
    marginTop: "10%",
    width: "45%",
    backgroundColor: '#333333', // Darker grey color for active state
  },
  continueButtonText: {
    fontSize: 18,
    color: '#FFFFFF', // Continue button text color
  },
});

export default Confirmation;
