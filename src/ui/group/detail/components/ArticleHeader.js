import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import MoreIcon from "../../../../assets/image/group/detail/more.svg";

const ArticleHeader = ({profileImgSrc, name, date}) => {
    return (
        <View style={styles.user}>
            <View style={{ flexDirection: 'row' }}>
                <Image source={profileImgSrc} style={styles.img} />
                <View style={styles.row}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.date}>{date}</Text>
                </View>
            </View>
            <TouchableOpacity>
                <MoreIcon/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        justifyContent: 'center',
        marginLeft: 10,
    },
    user: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    img: {
        width: 38,
        height: 38,
        borderRadius: 19,
    },
    name: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#3A3A3A'
    },
    date: {
        fontSize: 10,
        color: '#B7B7B7',
        marginTop: 2,
    },
})

export default ArticleHeader;