import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Header = ({
    title,
    titlePress,
    noIcon,
    rightIcon,
    rightIconPress,
    leftIcon,
    leftIconPress,
}) => {

    return (
        <View style={styles.container}>
            <View style={[styles.titleContainer, noIcon ? {} : { alignSelf: 'center' }]}>
                <View>
                    <Text style={styles.title}> {title} </Text>
                </View>
            </View>
            {leftIcon &&
                <TouchableOpacity
                    style={styles.leftIcon}
                    onPress={leftIconPress}
                >
                    {leftIcon}
                </TouchableOpacity>

            }
            {rightIcon &&
                <TouchableOpacity
                    style={styles.rightIcon}
                    onPress={rightIconPress}
                >
                    {rightIcon}
                </TouchableOpacity>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        //height: 50,
    },
    titleContainer: {
        width: "100%",
        padding: 16,
    },
    title:{
        color: '#666666',
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'center',
        //textAlignVertical: 'center',
    },
    leftIcon: {
        position: 'absolute',
        top: 18,
        left: 21,
        justifyContent: 'center',
    },
    rightIcon: {
        position: 'absolute',
        bottom: 15,
        right: 14,
        justifyContent: 'center',
    }
})

export default Header;