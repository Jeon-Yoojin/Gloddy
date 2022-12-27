import React, { useCallback } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';

import GroupIcon from '../assets/image/navigator/grouping.svg';
import MyGroupIcon from '../assets/image/navigator/mine.svg';
import ProfileIcon from '../assets/image/navigator/profile.svg';

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
                const iconColor = focused ? '#1249FC' : '#E5E5E5';
                let icon;

                if(name == 'GroupingScreen'){
                    icon = <GroupIcon fill={iconColor} />;
                }
                else if(name == 'MyGroupScreen'){
                    icon = <MyGroupIcon fill={iconColor} />
                }
                else if(name == 'MyProfileScreen'){
                    icon = <ProfileIcon fill={iconColor} />
                }

                return icon;
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