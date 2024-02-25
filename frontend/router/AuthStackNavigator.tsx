// AuthStack.js
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from '../pages/SignUpScreen';
import SignInScreen from '../pages/SignInScreen';

const AuthStack = createStackNavigator();

const AuthStackNavigator = () => {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen 
                name="Signin" 
                component={SignInScreen} 
                options={{ headerShown: false }} 
            />
            <AuthStack.Screen 
                name="Register" 
                component={SignUpScreen} 
                options={{ headerShown: false }} 
            />
        </AuthStack.Navigator>
    );
};

export default AuthStackNavigator;
