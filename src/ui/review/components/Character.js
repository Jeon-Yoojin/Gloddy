import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";

const CharacterIcon = ({text, onPress, backgroundColor, textColor})=>{
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[{ width: 73, height: 32, borderRadius: 36, borderColor: '#EAEAEA', borderWidth: 1, justifyContent: 'center', alignItems: 'center'} ,backgroundColor]}>
                <Text style={[textColor, {fontSize: 13}]}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const CharacterList = [
    {
        id: 1,
        character: '🙂 차분',
        selected: false,
    },
    {
        id: 2,
        character: '😇 친절',
        selected: false,
    },
    {
        id: 3,
        character: '😝 적극',
        selected: false,
    },
    {
        id: 4,
        character: '😎 유머',
        selected: false,
    }
]

const Character = ()=>{
    const [select, setSelect] = useState(CharacterList)
    const handleOnpress = (item)=>{
        const newItem = select.map((val)=>{
            if(val.id === item.id){
                return {...val, selected:!val.selected}
            }
            else{
                return val;
            }
        })
        setSelect(newItem)
    }

    const renderItem = ({ item }) => {
        const backgroundColor = item.selected ? "#1249FC" : "white";
        const color = item.selected ? 'white' : '#7F7F7F';
    
        return (
          <CharacterIcon
            text={item.character}
            onPress={() => handleOnpress(item)}
            backgroundColor={{ backgroundColor }}
            textColor={{ color }}
          />
        );
      };

    return (
        <FlatList
            horizontal
            data={select}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            contentContainerStyle={{flexGrow: 1, justifyContent: 'space-evenly', marginHorizontal: 14}}
        />
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
})

export default Character;