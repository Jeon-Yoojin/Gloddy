import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import ActiveIcon from "../../../assets/image/review/active.svg";
import HumorIcon from "../../../assets/image/review/humor.svg";
import CalmIcon from "../../../assets/image/review/calm.svg";
import KindIcon from "../../../assets/image/review/kind.svg";


const CharacterIcon = ({text, onPress, isSelected})=>{
    const iconColor = isSelected ? "#1249FC" : "#ABC1FC";
    const color = isSelected ? '#1249FC' : '#3A3A3A';
    const weight = isSelected ? '700' : '500';

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{backgroundColor: "#F5F5F5"}}>
                {
                    text==="적극" ? <ActiveIcon fill={iconColor}/> 
                    : text==="유머" ? <HumorIcon fill={iconColor}/>
                    : text==="차분" ? <CalmIcon fill={iconColor}/>
                    : text==="친절" ? <KindIcon fill={iconColor}/>
                    : <></>
                }
                <Text style={{color: color, fontWeight: weight, fontSize: 12, textAlign: 'center'}}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const CharacterList = [
    {
        id: 1,
        character: '차분',
        selected: false,
    },
    {
        id: 2,
        character: '친절',
        selected: false,
    },
    {
        id: 3,
        character: '적극',
        selected: false,
    },
    {
        id: 4,
        character: '유머',
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
        return (
          <CharacterIcon
            text={item.character}
            onPress={() => handleOnpress(item)}
            isSelected={item.selected}
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