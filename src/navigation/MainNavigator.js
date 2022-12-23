import React, { useCallback } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';

import GroupIcon from '../assets/image/navigator/grouping.svg';
import GroupActiveIcon from '../assets/image/navigator/groupingActive.svg';
import MyGroupIcon from '../assets/image/navigator/mine.svg';
import MyGroupActiveIcon from '../assets/image/navigator/mineActive.svg';
import ProfileIcon from '../assets/image/navigator/profile.svg';
import ProfileActiveIcon from '../assets/image/navigator/profileActive.svg';

import GroupingScreen from '../ui/group/grouping/containers/GroupingScreen';
import MyGroupScreen from '../ui/mygroup/containers/MyGroupScreen';
import MyProfileScreen from '../ui/myprofile/containers/MyProfileScreen';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
    const screenOptions = useCallback(({route})=>{
        return {
            headerShown: false,
            title: ({focused, color, fontSize})=>{
                const {name} = route;
                let label;

                if(name == 'GroupingScreen') label = '그루핑';
                else if(name == 'MyGroupScreen') label = '나의모임';
                else if(name == 'MyProfileScreen') label = '프로필';
                
                return <Text style={{color: color, fontSize:10}}>{label}</Text>
            },
            tabBarIcon: ({focused, color, size})=>{
                const {name} = route;
                let icon;

                if(name == 'GroupingScreen'){
                    icon = focused ? <GroupActiveIcon/> : <GroupIcon/>;
                }
                else if(name == 'MyGroupScreen'){
                    icon = focused ? <MyGroupActiveIcon/> : <MyGroupIcon/>;
                }
                else if(name == 'MyProfileScreen'){
                    icon = focused ? <ProfileActiveIcon/> : <ProfileIcon/>;
                }

                return icon;
                {/* 
                switch (name){
                    case "GroupingScreen":
                        return <MeterialIcons name="groups" size={size} color={color} />;
                }
                */}
            },
            tabBarStyle: {
                height: 100, 
                borderTopLeftRadius: 25,
                borderTopRightRadius: 25,
                backgroundColor: '#FFFFFF'
            },
            style: {backgroundColor: '#FFFFFF'}
        }
    }, []);

    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen
                name="GroupingScreen"
                component={GroupingScreen}
            />
            <Tab.Screen
                name="MyGroupScreen"
                component={MyGroupScreen}
            />
            <Tab.Screen
                name="MyProfileScreen"
                component={MyProfileScreen}
            />
        </Tab.Navigator>
    );
}

export default MainNavigator;