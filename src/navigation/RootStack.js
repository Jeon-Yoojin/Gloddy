import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SlideScreen from '../ui/tutorial/containers/SlideScreen';
import LoginScreen from '../ui/login/containers/LoginScreen';
import SelectSchoolScreen from '../ui/register/containers/SelectSchoolScreen';
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
import GroupReviewScreen from '../ui/myprofile/containers/GroupReviewScreen';

import {useSelector} from 'react-redux';
import MyComplimentScreen from '../ui/myprofile/containers/MyComplimentScreen';
import EnvironmentScreen from '../ui/environment/containers/EnvironmentScreen';
import AccountModifyScreen from '../ui/environment/containers/AccountModifyScreen';
import ProduceModifyScreen from '../ui/environment/containers/ProduceModifyScreen';
import PersonalitySelectionScreen from '../ui/environment/containers/PersonalitySelectionScreen';
import ServiceTermScreen from '../ui/environment/containers/ServiceTermScreen';
import PrivacyPolicyScreen from '../ui/environment/containers/PrivacyPolicyScreen';
import RecentGroup from '../ui/myprofile/containers/RecentGroup';

const Stack = createStackNavigator();

function RootStack() {
  const isSignedIn = useSelector(state => state.auth.loginIndicator.isSignedIn);

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
          <Stack.Screen
            name="GroupReviewScreen"
            component={GroupReviewScreen}
            options={{headerShown: true, title: '모임후기'}}
          />
          <Stack.Screen
            name="MyComplimentScreen"
            component={MyComplimentScreen}
            options={{headerShown: true, title: '받은칭찬'}}
          />
          <Stack.Screen
            name="EnvironmentScreen"
            component={EnvironmentScreen}
            options={{headerShown: true, title: '환경설정'}}
          />
          <Stack.Screen
            name="AccountModifyScreen"
            component={AccountModifyScreen}
            options={{headerShown: true, title: '회원정보 수정'}}
          />
          <Stack.Screen
            name="ProduceModifyScreen"
            component={ProduceModifyScreen}
            options={{headerShown: true, title: '프로필 수정'}}
          />
          <Stack.Screen
            name="PersonalitySelectionScreen"
            component={PersonalitySelectionScreen}
            options={{headerShown: true, title: '성격'}}
          />
          <Stack.Screen
            name="ServiceTermScreen"
            component={ServiceTermScreen}
            options={{headerShown: true, title: '서비스 약관'}}
          />
          <Stack.Screen
            name="PrivacyPolicyScreen"
            component={PrivacyPolicyScreen}
            options={{headerShown: true, title: '개인정보처리방침'}}
          />
          <Stack.Screen
            name="RecentGroup"
            component={RecentGroup}
            options={{headerShown: true, title: '최근 모임'}}
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
            component={SelectSchoolScreen}
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

          {/* 임시추가 - 로그인 했다치고.. */}
          <Stack.Screen
            name="GroupReviewScreen"
            component={GroupReviewScreen}
            options={{headerShown: true, title: '모임후기'}}
          />
          <Stack.Screen
            name="MyComplimentScreen"
            component={MyComplimentScreen}
            options={{headerShown: true, title: '받은칭찬'}}
          />
          <Stack.Screen
            name="EnvironmentScreen"
            component={EnvironmentScreen}
            options={{headerShown: true, title: '환경설정'}}
          />
          <Stack.Screen
            name="AccountModifyScreen"
            component={AccountModifyScreen}
            options={{headerShown: true, title: '회원정보 수정'}}
          />
          <Stack.Screen
            name="ProduceModifyScreen"
            component={ProduceModifyScreen}
            options={{headerShown: true, title: '프로필 수정'}}
          />
          <Stack.Screen
            name="PersonalitySelectionScreen"
            component={PersonalitySelectionScreen}
            options={{headerShown: true, title: '성격'}}
          />
          <Stack.Screen
            name="ServiceTermScreen"
            component={ServiceTermScreen}
            options={{headerShown: true, title: '서비스 약관'}}
          />
          <Stack.Screen
            name="PrivacyPolicyScreen"
            component={PrivacyPolicyScreen}
            options={{headerShown: true, title: '개인정보처리방침'}}
          />
          <Stack.Screen
            name="RecentGroup"
            component={RecentGroup}
            options={{headerShown: true, title: '최근 모임'}}
          />
        </>
      )}
    </Stack.Navigator>
  );
}

export default RootStack;
