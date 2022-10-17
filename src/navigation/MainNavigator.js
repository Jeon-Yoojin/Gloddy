import React, { useCallback } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Text } from 'react-native';
import MeterialIcons from 'react-native-vector-icons/MaterialIcons';

import GroupingScreen from '../ui/group/grouping/containers/GroupingScreen';
import MyGroupsScreen from '../ui/mygroup/MyGroupsScreen';
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
                else if(name == 'MyGroupsScreen') label = '나의모임';
                else if(name == 'MyProfileScreen') label = '프로필';
                
                return <Text style={{color: color, fontSize:10}}>{label}</Text>
            },
            tabBarIcon: ({focused, color, size})=>{
                const {name} = route;
                let image;

                if(name == 'GroupingScreen'){
                    image = focused ? require('../assets/image/navigator/groupingActive.svg') : require('../assets/image/navigator/grouping.svg')
                }
                return <Image source={image} s/>
                {/* 
                switch (name){
                    case "GroupingScreen":
                        return <MeterialIcons name="groups" size={size} color={color} />;
                }
                */}
            }
        }
    }, []);

    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen
                name="GroupingScreen"
                component={GroupingScreen}
            />
            <Tab.Screen
                name="MyGroupsScreen"
                component={MyGroupsScreen}
            />
            <Tab.Screen
                name="MyProfileScreen"
                component={MyProfileScreen}
            />
        </Tab.Navigator>
    );
}

export default MainNavigator;