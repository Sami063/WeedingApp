import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // **
import LoginScreen from '../Authentication/Login/LoginScreen';
const Stack = createNativeStackNavigator()

const FirstStack = () => {

  return (
      <Stack.Navigator initialRouteName="Discover"> 
        <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default FirstStack;