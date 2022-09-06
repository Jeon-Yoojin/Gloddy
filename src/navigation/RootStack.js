import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SlideScreen from '../ui/tutorial/containers/SlideScreen';
import EmailAuthScreen from '../ui/register/containers/EmailAuthScreen';
import EmailConfirmScreen from '../ui/register/containers/EmailConfirmScreen';
import PersonalityScreen from '../ui/register/containers/PersonalityScreen';
import RegisterScreen from '../ui/register/containers/RegisterScreen';
import CreateGroupScreen from '../ui/group/create/containers/CreateGroupScreen';
import GroupDetailScreen from '../ui/group/detail/containers/GroupDetailScreen';
import ApplicationScreen from '../ui/apply/containers/ApplicationScreen';
import ApplicationManageScreen from '../ui/apply/containers/ApplicationManageScreen';
import ComplimentScreen from '../ui/review/containers/ComplimentScreen';
import BestPartnerScreen from '../ui/review/containers/BestPartnerScreen';
import GroupingScreen from '../ui/group/grouping/containers/GroupingScreen';
import PostingScreen from '../ui/group/detail/containers/PostingScreen';

/* 테스트 screen */
import ModalTestScreen from '../ui/register/containers/ModalTestScreen';

const Stack = createNativeStackNavigator();

function RootStack() {
    return (
      <Stack.Navigator>
            <Stack.Screen
              name="Slide"
              component={SlideScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="AuthScreen"
              component={EmailAuthScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ConfirmScreen"
              component={EmailConfirmScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="RegisterScreen"
              component={RegisterScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="PersonalityScreen"
              component={PersonalityScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="CreateGroupScreen"
              component={CreateGroupScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="GroupDetailScreen"
              component={GroupDetailScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ApplicationScreen"
              component={ApplicationScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ApplicationManageScreen"
              component={ApplicationManageScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ComplimentScreen"
              component={ComplimentScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="BestPartnerScreen"
              component={BestPartnerScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="GroupingScreen"
              component={GroupingScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="PostingScreen"
              component={PostingScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ModalTestScreen"
              component={ModalTestScreen}
              options={{headerShown: false}}
            />
      </Stack.Navigator>
    );
  }
  
  export default RootStack;