import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // **

import Weeding from '../Screens/Admin/Weeding';
import BookingScreen from '../Screens/BookingScreen';
import Reservations from '../Screens/Admin/Reservations';
import LogoutScreen from '../Authentication/Logout/LogoutScreen';
import LoginScreen from '../Authentication/Login/LoginScreen';

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator();

const AdminStack = () => {
    return ( 
        <Drawer.Navigator initialRouteName="Weeding" useLegacyImplementation={true}> 
        {/* <Drawer.Screen name="Home" component={More} /> */}
        <Drawer.Screen name="Upcomming weeding" component={Weeding} />
        {/* <Drawer.Screen name="Guests" component={RegisterScreen} /> */}
        <Drawer.Screen name="Reservations" component={Reservations} />
        <Drawer.Screen name="Logout" component={LogoutScreen} />
    </Drawer.Navigator>
  );
};

export default AdminStack;