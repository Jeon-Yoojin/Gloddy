import React from "react"
import { Text } from "react-native"
import WishlistGroupList from "../components/WishlistGroupList"

const groups = [
    {
        groupId: 20,
        title: 'title',
        introduction: 'introduction',
        maxNum: 3,
        place: 'goodplace',
        date: '04.27'
    }
]

const WishlistGroupScreen = () =>{
    return (
        <WishlistGroupList groups={groups}/>
    )
}

export default WishlistGroupScreen;