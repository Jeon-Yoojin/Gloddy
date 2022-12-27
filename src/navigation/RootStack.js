import React, {useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SlideScreen from '../ui/tutorial/containers/SlideScreen';
import LoginScreen from '../ui/login/containers/LoginScreen';
import SelectSchool from '../ui/register/containers/SelectSchool';
import EmailAuthScreen from '../ui/register/containers/EmailAuthScreen';
import PWSettingScreen from '../ui/register/containers/PWSettingScreen';
import PWConfirmScreen from '../ui/register/containers/PWConfirmScreen';
import RegisterScreen from '../ui/register/containers/RegisterScreen';
import PersonalityScreen from '../ui/register/containers/PersonalityScreen';
import MainScreen from '../ui/MainScreen';
import CreateGroupScreen from '../ui/group/create/containers/CreateGroupScreen';
import GroupDetailScreen from '../ui/group/detail/containers/GroupDetailScreen';
import RoomSettingScreen from '../ui/group/detail/containers/RoomSettingScreen';
import ApplicationScreen from '../ui/apply/containers/ApplicationScreen';
import ApplicationManageScreen from '../ui/apply/containers/ApplicationManageScreen';
import MyGroupScreen from '../ui/mygroup/containers/MyGroupScreen';
import ComplimentScreen from '../ui/review/containers/ComplimentScreen';
import BestPartnerScreen from '../ui/review/containers/BestPartnerScreen';
import ArticleDetailScreen from '../ui/group/detail/containers/ArticleDetailScreen';
import PostingScreen from '../ui/group/detail/containers/PostingScreen';
import GroupMembers from '../ui/group/detail/containers/GroupMembers';

import { useSelector } from 'react-redux';

const Stack = createStackNavigator();

function RootStack() {
  const isSignedIn = useSelector(state=>state.auth.loginIndicator.isSignedIn);

  return (
    <Stack.Navigator>
      {isSignedIn ? (
        <>
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
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
          name="RoomSettingScreen"
          component={RoomSettingScreen}
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
          name="MyGroupScreen"
          component={MyGroupScreen}
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
          name="ArticleDetailScreen"
          component={ArticleDetailScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PostingScreen"
          component={PostingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="GroupMembers"
          component={GroupMembers}
          options={{headerShown: false}}
        />
        </>
      ) : (
        <>
        <Stack.Screen
          name="Slide"
          component={SlideScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SelectSchoolScreen"
          component={SelectSchool}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AuthScreen"
          component={EmailAuthScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PWSettingScreen"
          component={PWSettingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PWConfirmScreen"
          component={PWConfirmScreen}
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
          name="MainScreen"
          component={MainScreen}
          options={{headerShown: false}}
        />
        </>
      )}
    </Stack.Navigator>
  );
}

export default RootStack;