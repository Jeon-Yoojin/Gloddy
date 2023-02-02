import React from 'react';
import { FlatList, RefreshControl } from 'react-native'
import GroupElement from './GroupElement';

const GroupInfo = ({ groups, fetchNextPage, refresh, isRefreshing }) => {
    return (
        <FlatList
            data={groups}
            renderItem={({item, index})=>{
                return (
                    <GroupElement
                        key={index}
                        groupId={item.groupId}
                        title={item.title}
                        introduction={item.content}
                        maxNum={item.memberCount}
                        place={item.place}
                        date={item.meetDate}
                    />
                )
            }}
            keyExtractor={(item, index)=>index.toString()}
            onEndReachThreshold={0.5}
            disableVirtualization={false}
            onEndReached={fetchNextPage}
            refreshControl={
                <RefreshControl onRefresh={refresh} refreshing={isRefreshing}/>
            }
            
        />
    )
    
}

export default GroupInfo;