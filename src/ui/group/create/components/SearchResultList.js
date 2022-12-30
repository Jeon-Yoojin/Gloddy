import React from "react";
import { View, FlatList, Text, Pressable, StyleSheet } from "react-native";

const SearchResultList = ({results}) =>{
    return(
        <FlatList
            data={results}
            renderItem={(item) => <SearchResult item={item}/>}
            keyExtractor={(item, index) => index}
        />
    )
}

const SearchResult = ({item}) =>{
    console.log(item.item)
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