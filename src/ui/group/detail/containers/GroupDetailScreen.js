import React, { useState } from 'react';
import { SafeAreaView, Image, StyleSheet, View, Text } from 'react-native';

import GroupDetailHeader from '../components/GroupDetailHeader';
import DetailInfoTab from '../containers/DetailInfoTab';
import BoardTab from './BoardTab';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const FirstRoute = () => {
    return <DetailInfoTab/>
}

const SecondRoute = () => {
    return <BoardTab/>
}

const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute
});

const GroupDetailScreen = ()=>{
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        {key: 'first', title: '상세 정보'},
        {key: 'second', title: '모임 게시판'}
    ]);

    return(
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <GroupDetailHeader/>
            <Image source={require('../../../../assets/image/group/groupSample_big.png')} style={{width: '100%'}}/>
            {/* tab navigator */}
            <TabView
                navigationState={{index, routes}}
                renderScene={renderScene}
                onIndexChange={setIndex}
                swipeEnabled={false}
                renderTabBar={props => (
                    <TabBar
                        {...props}
                        indicatorStyle={{
                            backgroundColor: '#1249FC'
                        }}
                        style={{
                            backgroundColor: '#FFFFFF'
                        }}
                        renderLabel={({route, focused, color}) => (
                            <Text style={focused ? {color: '#1249FC'} : {color: '#7F7F7F'}}>
                                {route.title}
                            </Text>
                        )}
                    />
                )}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white'
    },
    subContainer:{
        borderBottomColor: '#EAEAEA',
        borderBottomWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 13,
        //marginHorizontal: 14,
        width: '50%'
    },
    tab:{
        fontSize: 14,
    },
    intro:{
        fontSize: 12,
        color: '#1A1A1A',
        marginVertical: 14
    },
    button:{
        alignItems: 'center',
        marginVertical: 10
    }
})

export default GroupDetailScreen;