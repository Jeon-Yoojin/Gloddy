import React from "react";
import { View, ImageBackground, StyleSheet, Text, TouchableOpacity } from "react-native";

const Category = ({ imgSrc, title }) => {
    return (
        <>
            <TouchableOpacity>
                <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', marginBottom: 15, }}>
                    <ImageBackground source={imgSrc} style={styles.img}>
                        <Text style={styles.title}>{title}</Text>
                    </ImageBackground>
                </View>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    img: {
        width: 167,
        height: 108,
        //backgroundColor: 'rgba(0, 0, 0, 0.4)',
        justifyContent: 'flex-end'
    },
    title: {
        fontSize: 14,
        fontWeight: '600',
        color: 'white',
        marginLeft: 10,
        marginBottom: 10
    }
})

export default Category;