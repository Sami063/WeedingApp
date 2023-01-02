// import * as React from 'react';
import AppNavigation from './Navigation/AppNavigation';
import AuthProvider from './Authentication/Context/AuthContext';
import React, {useContext} from 'react';
import Location from './Screens/Location';
export default function App() {
  
  return (
    // <Location/>
    <AuthProvider>
       <AppNavigation/>
    </AuthProvider>
  );
};