import React, {useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SlideScreen from '../ui/tutorial/containers/SlideScreen';
import SelectSchool from '../ui/register/containers/SelectSchool';
import EmailAuthScreen from '../ui/register/containers/EmailAuthScreen';
import EmailAuthScreen2 from '../ui/register/containers/EmailAuthScreen2';
import LoginScreen from '../ui/login/containers/LoginScreen';
import LoginScreen2 from '../ui/login/containers/LoginScreen2';
import EmailConfirmScreen from '../ui/register/containers/EmailConfirmScreen';
import PersonalityScreen from '../ui/register/containers/PersonalityScreen';
import RegisterScreen from '../ui/register/containers/RegisterScreen';
import CreateGroupScreen from '../ui/group/create/containers/CreateGroupScreen';
import GroupDetailScreen from '../ui/group/detail/containers/GroupDetailScreen';
import RoomSettingScreen from '../ui/group/detail/containers/RoomSettingScreen';
import ApplicationScreen from '../ui/apply/containers/ApplicationScreen';
import ApplicationManageScreen from '../ui/apply/containers/ApplicationManageScreen';
import MyGroupsScreen from '../ui/mygroup/MyGroupsScreen';
import ComplimentScreen from '../ui/review/containers/ComplimentScreen';
import BestPartnerScreen from '../ui/review/containers/BestPartnerScreen';
import MainScreen from '../ui/MainScreen';
import PostingScreen from '../ui/group/detail/containers/PostingScreen';
import GroupMembers from '../ui/group/detail/containers/GroupMembers';
import PWSettingScreen from '../ui/register/containers/PWSettingScreen';

/* 테스트 screen */
import TestModalNavigatorScreen from '../ui/register/components/TestModalNavigatorScreen';

const Stack = createStackNavigator();

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
              name="AuthScreen2"
              component={EmailAuthScreen2}
              options={{headerShown: false}}
            />
            {/* 
            <Stack.Screen
              name="CheckModal"
              component={TestModalNavigatorScreen}
              options={{
                headerShown: false,
                presentation: 'modal',
                cardStyle: {backgroundColor: 'transparent'},
                cardOverlayEnabled: true,
              }}
            />
            */}
            <Stack.Screen
              name="PWSettingScreen"
              component={PWSettingScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="LoginScreen2"
              component={LoginScreen2}
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
              name="MyGroupsScreen"
              component={MyGroupsScreen}
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
              name="MainScreen"
              component={MainScreen}
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
      </Stack.Navigator>
    );
  }
  
  export default RootStack;