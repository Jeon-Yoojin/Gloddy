import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, TouchableOpacity } from "react-native";

const MyGroupsScreen = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{flex:1, backgroundColor:'#FFFFFF'}}>
            <TouchableOpacity onPress={()=>navigation.navigate('ComplimentScreen')} style={{flex:1}}></TouchableOpacity>
        </SafeAreaView>
    );
}

export default MyGroupsScreen;