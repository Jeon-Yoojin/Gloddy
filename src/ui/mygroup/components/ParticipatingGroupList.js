import React from "react";
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import GloddyZone from '../../../assets/image/gloddyzone.svg'

const ParticipatingGroupList = ({groups})=>{
    return(
        <FlatList
            data={groups}
            renderItem={(item) => <GroupItem item={item}/>}
            keyExtractor={(item, index)=> index}
            contentContainerStyle={{paddingVertical: 11}}
        />
    )
}

const GroupItem = ({item}) => {
    const {title, place, meetDate} = item.item;

    return(
        <Pressable onPress={()=>{console.log(item)}}>
            <View style={styles.container}>
                <View style={styles.emptyProfile} />
                <View style={{ justifyContent: 'center', flex: 1, paddingLeft: 16.5 }}>
                    <Text style={styles.title}>{title}</Text>
                    <View style={{ flexDirection: 'row', marginTop: 7 }}>
                        <GloddyZone style={{ alignSelf: 'center' }} />
                        <Text style={styles.place}>{place}</Text>
                        <Text style={styles.meetDate}>{meetDate}</Text>
                    </View>
                </View>
                <ReviewCircle />
            </View>
        </Pressable>
    )
}

const ReviewCircle = () => {
    return(
        <View style={styles.reviewCircle}></View>
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

export default ParticipatingGroupList;