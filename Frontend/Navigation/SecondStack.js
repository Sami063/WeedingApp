import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // **
// import Discover from '../Screens/Discover';
import Weeding from '../Screens/Weeding';
import BookingScreen from '../Screens/BookingScreen';
import Reservations from '../Screens/Admin/Reservations';
import RegisterScreen from '../Authentication/Register/RegisterScreen';
const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator();

const SecondStack = () => {

  return (
      <Stack.Navigator initialRouteName="Weeding" useLegacyImplementation={true}> 
        {/* <Drawer.Screen name="Home" component={More} /> */}
        <Drawer.Screen name="Upcomming weeding" component={Weeding} />
        <Drawer.Screen name="Join" component={RegisterScreen} />
        <Drawer.Screen name="Food & Drink" component={BookingScreen} />
        <Drawer.Screen name="Reservations" component={Reservations} />
    </Stack.Navigator>
  );
};

export default SecondStack;