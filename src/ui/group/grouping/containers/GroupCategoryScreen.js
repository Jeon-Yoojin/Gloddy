import React from "react";
import { SafeAreaView, View } from "react-native";

import Header from "../../../../common/Header";
import Category from "../components/Category";

const GroupCategoryScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, }}>
            <Header title={'모임 카테고리'} />
            <View style={{marginTop: 15,}}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <Category imgSrc={require('../../../../assets/image/group/category/sports.png')} title={'운동/스포츠'} />
                    <Category imgSrc={require('../../../../assets/image/group/category/book.png')} title={'인문학/책/글'} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <Category imgSrc={require('../../../../assets/image/group/category/work.png')} title={'업종/직무'} />
                    <Category imgSrc={require('../../../../assets/image/group/category/language.png')} title={'언어'} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <Category imgSrc={require('../../../../assets/image/group/category/craft.png')} title={'공예/만들기'} />
                    <Category imgSrc={require('../../../../assets/image/group/category/dance.png')} title={'댄스/무용'} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <Category imgSrc={require('../../../../assets/image/group/category/cooking.png')} title={'요리/제조'} />
                    <Category imgSrc={require('../../../../assets/image/group/category/animal.png')} title={'반려동물'} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <Category imgSrc={require('../../../../assets/image/group/category/shopping.png')} title={'쇼핑'} />
                    <Category imgSrc={require('../../../../assets/image/group/category/game.png')} title={'게임'} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default GroupCategoryScreen;