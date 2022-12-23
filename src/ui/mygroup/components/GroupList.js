import React from "react";
import { View, Text,  } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Circle } from "react-native-svg";

const GroupList = (list)=>{
    return(
        <GroupItem/>
        /*
        <FlatList
            data={list}
            renderItem={renderItem}
            keyExtractor={(item, index)=> index}
        />
        */
    )
}

const GroupItem = (item) => {

    return(
        <View style={{flexDirection: 'column'}}>
            <View style={{width: 60, height: 60, backgroundColor: '#EAEAEA'}}/>
            <View>
                <Text>그룹 제목</Text>
                <Text>그룹 주소</Text>
            </View>
        </View>
    )
}

const ReviewCircle = () => {
    return(
        <View style={{width: 10, height: 10, backgroundColor: 'red'}}></View>
    )
}

export default GroupList;