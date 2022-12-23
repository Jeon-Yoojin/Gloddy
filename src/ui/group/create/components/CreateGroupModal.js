import React, {useState} from "react";
import { Modal, View, Text, StyleSheet, Dimensions, FlatList } from "react-native";
import CustomInput from "../../../../common/CustomInput";
import Header from "../../../../common/Header";

import X_shape from '../../../../assets/image/X_shape.svg';
import BackArrow from '../../../../assets/image/backarrow.svg';
import Magnify from '../../../../assets/image/magnify.svg';

const windowWidth = Dimensions.get("window").width;

const GroupModalHeader = () => {
    return(
        <Header
            title={<Text style={{fontSize: 18}}>모임위치</Text>}
            noIcon={false}
            leftIcon={<BackArrow/>}
            rightIcon={<X_shape/>}
            leftIconPress={()=>{}}
            rightIconPress={()=>{}}
            headerStyle={{width: windowWidth}}
            noBorderLine={true}
        />
    )
}

const GroupModalBody = () => {
    const [searchText, setSearchText] = useState('');

    return(
        <View>
            <CustomInput
                style={styles.searchBar}
                placeholder={<Magnify />}
                value={searchText}
                onChangeText={setSearchText}
                rightSpace={true}
            />
            <SearchResult/>
        </View>
    )
}

const SearchResultList = ({results}) =>{
    return(
        <FlatList
            data={results}
            renderItem={(item) => <SearchResult item={item}/>}
            keyExtractor={(item, index)=>index}
            ItemSeparatorComponent={()=>{<View style={{borderBottomColor: 'black'}}/>}}
        />
    )
}

const SearchResult = ({item}) =>{
    const {title, address} = item;

    return(
        <View style={styles.searchResult}>
            <Text style={styles.searchTitle}>{title}</Text>
            <Text style={styles.searchAddress}>{address}</Text>
        </View>
    )
}

const CreateGroupModal = () => {
    return (
        <View style={styles.backdrop}>
            <GroupModalHeader/>
            {/* 모임 위치 검색 */}
            <GroupModalBody />
        </View>
    )
}

const styles = StyleSheet.create({
    backdrop:{
        backgroundColor: "white",
        marginVertical: 22,
        marginHorizontal: 22,
        alignItems: 'center'
    },
    searchBar:{
        alignItems: 'center',
    },
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

export default CreateGroupModal;