import React, {useEffect} from 'react';
import { StyleSheet, View, Text, SliderBase } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RootStack from './src/navigation/RootStack';
import SplashScreen from 'react-native-splash-screen'

const App = ()=>{

  useEffect(() => {
    try {
      setTimeout(() => {
        SplashScreen.hide();
      }, 5000);
    } catch(e) {
      console.warn('error');
      console.warn(e);
    }
  });
  
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </View>
  )

};

export default App;
