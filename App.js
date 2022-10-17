import React, {useEffect} from 'react';
import { StyleSheet, View, Text, SliderBase } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './src/redux/slices';
import { QueryClient, QueryClientProvider } from 'react-query';

import RootStack from './src/navigation/RootStack';
import SplashScreen from 'react-native-splash-screen'

const store = configureStore({reducer: rootReducer});
const queryClient = new QueryClient();

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
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <View style={{flex: 1}}>
          <NavigationContainer>
            <RootStack />
          </NavigationContainer>
        </View>
      </Provider>
    </QueryClientProvider>
  )
};

export default App;
