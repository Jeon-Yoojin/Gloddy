import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import CustomInput from "../../../../common/CustomInput";
import Header from "../../../../common/Header";
import SearchResultList from "./SearchResultList";
import { searchLocation } from "../../../../api/API";

import Magnify from '../../../../assets/image/magnify.svg';
import ModalHeader from "./ModalHeader";

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
    const [searchText, setSearchText] = useState("");
    const [results, setResults] = useState({});

    useEffect(() => {
            searchLocation(searchText)
            .then(
                res => {
                    setResults(res.documents)
                    //console.log(results, 'results')
                }
            )
            .catch(
                error => console.log('searchErr', error)
            )
    }, [searchText]);

    return(
        <View>
            <CustomInput
                style={styles.searchBar}
                placeholder={<Magnify />}
                value={searchText}
                onChangeText={setSearchText}
                rightSpace={true}
            />
            <SearchResultList results={results}/>
        </View>
    )
}

const CreateGroupModal = () => {
    return (
        <View style={styles.backdrop}>
            <ModalHeader title={'모임위치'}/>
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
    }
})

export default CreateGroupModal;