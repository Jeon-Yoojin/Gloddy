import React from "react";
import { useNavigation } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaView, TouchableOpacity, Text, View, } from "react-native";
import ParticipatingGroupScreen from "./ParticipatingGroupScreen";
import WishlistGroupScreen from "./WishlistGroupScreen";
import GroupList from "../components/ParticipatingGroupList";

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="참여 모임" component={ParticipatingGroupScreen} />
            <Tab.Screen name="찜한 모임" component={WishlistGroupScreen} />
        </Tab.Navigator>
    );

}

const MyGroupScreen = () => {
    const navigation = useNavigation();
    const handleOnpress = ()=> navigation.navigate('ComplimentScreen')

    return (
        <SafeAreaView style={{flex:1, backgroundColor:'#FFFFFF'}}>
            <TopTabNavigator></TopTabNavigator>
            <TouchableOpacity onPress={handleOnpress}><Text>버튼</Text></TouchableOpacity>
        </SafeAreaView>
    );
}

export default MyGroupScreen;