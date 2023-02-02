import React from "react";
import { View, FlatList, Text, Pressable, StyleSheet } from "react-native";

const SearchResultList = ({results}) =>{
    return(
        <FlatList
            data={results}
            renderItem={(item) => console.log(item)}
            keyExtractor={(item, index) => index}
            contentContainerStyle={{paddingBottom: 100}}
        />
    )
}

const onPress = () => {
    //해당 장소 이름, 위도, 경도 모임위치에 set
}

const SearchResult = ({item}) =>{
    const {place_name, address_name} = item.item;

    return(
        <Pressable onPress={()=>{}}>
            <View style={styles.searchResult}>
                <Text style={styles.searchTitle}>{place_name}</Text>
                <Text style={styles.searchAddress}>{address_name}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    searchResult:{
        borderBottomColor: '#F5F5F5',
        borderBottomWidth: 1,
        paddingVertical: 20,
        paddingHorizontal: 40
    },
    searchTitle:{
        fontSize: 14,
        color: '#3A3A3A'
    },
    searchAddress:{
        fontSize: 12,
        color: '#AAAAAA'
    }
})

export default SearchResultList;