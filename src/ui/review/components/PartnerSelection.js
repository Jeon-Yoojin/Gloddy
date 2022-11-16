import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Image, Text, TouchableOpacity, View, Dimensions } from "react-native";

import UserProfile from "../../../common/UserProfile";
import CheckButton from "../../../common/CheckButton";
import { TextInput } from "react-native-gesture-handler";

const windowHeight = Dimensions.get('window').height;

const PartnerSelection = ({ data, imgSize, textSize, onSelect }) => {
    const [userOption, setUserOption] = useState(null);

    const selectHandler = (value) => {
        onSelect(value);
        setUserOption(value);
    }

    return (
        <View>
            {data.map((item, index)=>{
                return (
                    <TouchableOpacity key={index} style={ userOption == item.name ? styles.selected : styles.unselected} onPress={() => selectHandler(item.name)}>
                        <View style={{paddingLeft: 17}}>
                            <UserProfile imgSrc={item.imgSrc} imgSize={imgSize} name={item.name} textSize={textSize} textColor={ userOption == item.name ? '#FFFFFF' : null }/>
                        </View>
                        {userOption == item.name ?
                            <TextInput
                                multiline={true}
                                textAlignVertical='top'
                                placeholder="선정이유는 무엇인가요?"
                                style={{backgroundColor: '#FFFFFF', borderRadius: 8, width: '90%', height: '65%', alignSelf: 'center', paddingLeft: 20, paddingTop: 20}}
                            />
                            : null
                        }
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    selected: {
        justifyContent: 'space-between',
        alignSelf: 'center',
        width: '90%',
        height: windowHeight*0.27,
        backgroundColor: '#1249FC',
        borderColor: '#F7F7F7',
        borderRadius: 8,
        borderWidth: 1,
        marginBottom: 12,
        paddingVertical: 15
    },
    unselected: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        width: '90%',
        height: windowHeight*0.08,
        backgroundColor: '#F5F5F5',
        borderColor: '#F7F7F7',
        borderRadius: 8,
        borderWidth: 1,
        marginBottom: 12,
    },
})

export default PartnerSelection;