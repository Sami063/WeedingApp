import { View, Text, ActivityIndicator} from 'react-native'
import React, {useContext} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import SecondStack from './SecondStack';
import FirstStack from './FirstStack';
import AdminStack from './AdminStack';
import DefaultStack from '../Screens/DefaultStack';
import {AuthContext} from '../Authentication/Context/AuthContext';
import LoginScreen from '../Authentication/Login/LoginScreen';

const AppNavigation = () => {
  const {userToken, isLoading} = useContext(AuthContext);

  
  return (
    <NavigationContainer>
  {
  userToken === 'login' ? <LoginScreen/> : 
  userToken === 'verified' ? <AdminStack/> : 
  userToken === 'guest' ? <SecondStack/> : <DefaultStack/>
  }
    </NavigationContainer>
  )
}

export default AppNavigation