import React, {useEffect} from 'react';
import {StyleSheet, View, Text, SliderBase} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './src/redux/slices';
import {QueryClient, QueryClientProvider} from 'react-query';

import Splash from './src/ui/splash/containers/Splash';
import MyProfileScreen from './src/ui/myprofile/containers/MyProfileScreen';

const store = configureStore({reducer: rootReducer});
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <View style={{flex: 1}}>
          <NavigationContainer>
            <Splash />
          </NavigationContainer>
        </View>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
