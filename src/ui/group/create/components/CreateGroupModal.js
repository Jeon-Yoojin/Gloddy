import React, {useState} from "react";
import { Modal, View, Text, StyleSheet, Dimensions } from "react-native";
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
            headerStyle={{width: windowWidth}}
            noBorderLine={true}
        />
    )
}

const GroupModalBody = () => {
    const [searchText, setSearchText] = useState('');

    return(
        <CustomInput
            style={styles.searchBar}
            placeholder={<Magnify/>}
            value={searchText}
            onChangeText={setSearchText}
            rightSpace={true}
        />
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
    }  
})

export default CreateGroupModal;