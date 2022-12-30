import React from "react";
import { StyleSheet, FlatList } from "react-native";
import GroupElement from "../../group/grouping/components/GroupElement";

const WishlistGroupList = ({groups})=>{
    return(
        <FlatList
            data={groups}
            renderItem={({item, index}) => {
                return (
                    <GroupElement
                        groupId={item.groupId}
                        title={item.title}
                        introduction={item.introduction}
                        maxNum={item.maxNum}
                        place={item.place}
                        date={item.date}
                    />
                )
            }}
            keyExtractor={(item, index)=> index}
            contentContainerStyle={{paddingVertical: 11}}
        />
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        backgroundColor: '#FFFFFF', 
        paddingVertical: 14, 
        paddingHorizontal: 13.5, 
        marginVertical: 6,
        width: '92%', 
        alignSelf: 'center',
        borderRadius: 8
    },
    emptyProfile:{
        width: 60, 
        height: 60, 
        backgroundColor: '#F7F7F7', 
        borderColor: '#EAEAEA', 
        borderWidth: 0.5, 
        borderRadius: 10
    },
    title:{
        fontSize: 14,
        fontWeight: 'bold',
        color: '#1A1A1A'
    },
    place:{
        fontSize: 12,
        fontWeight: 'normal',
        color: '#7F7F7F',
        marginHorizontal: 2.5
    },
    meetDate:{
        fontSize: 12,
        fontWeight: 'normal',
        color: '#3A6DFC',
        marginHorizontal: 2.5
    },
    reviewCircle:{
        width: 9,
        height: 9, 
        backgroundColor: '#1249FC', 
        borderRadius: 4.5, 
        alignSelf: 'center'
    }
})

export default WishlistGroupList;