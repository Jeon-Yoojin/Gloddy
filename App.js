import React, {useEffect} from 'react';
import { StyleSheet, View, Text, SliderBase } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './src/redux/slices';
import { QueryClient, QueryClientProvider } from 'react-query';

import Splash from './src/ui/splash/containers/Splash';
import RootStack from './src/navigation/RootStack';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useAuthActions from './src/redux/hooks/useAuthAction';
import { useSelector } from 'react-redux';

const store = configureStore({reducer: rootReducer});
const queryClient = new QueryClient();

const App = ()=>{
  
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <NavigationContainer><Splash/></NavigationContainer>
        </View>
      </Provider>
    </QueryClientProvider>
  )
};

export default App;
