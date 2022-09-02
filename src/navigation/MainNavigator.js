import React, { useCallback } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MeterialIcons from 'react-native-vector-icons/MaterialIcons';

import GroupingScreen from '../ui/group/grouping/containers/GroupingScreen';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
    const screenOptions = useCallback(({route})=>{
        return {
            headerShown: false,
            tabBarIcon: ({focused, color, size})=>{
                const {name} = route;
                switch (name){
                    case "GroupingScreen":
                        return <MeterialIcons name="groups" size={size} color={color} />;
                }
            }
        }
    }, []);

    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen
                name="GroupingScreen"
                component={GroupingScreen}
            />
        </Tab.Navigator>
    );
}

export default MainNavigator;