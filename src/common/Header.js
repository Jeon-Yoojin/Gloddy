import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Header = ({
    title,
    titlePress,
    noIcon,
    noBorderLine,
    rightIcon,
    rightIconPress,
    leftIcon,
    leftIconPress,
    headerStyle
}) => {

    return (
        <View style={[styles.container, headerStyle]}>
            {leftIcon &&
                <TouchableOpacity
                    style={styles.leftIcon}
                    onPress={leftIconPress}
                >
                    {leftIcon}
                </TouchableOpacity>

            }
            <View style={[styles.titleContainer, noIcon ? {} : { alignSelf: 'center', }, noBorderLine? {borderBottomWidth: 0} : {}]}>
                <View>
                    <Text style={styles.title}> {title} </Text>
                </View>
            </View>
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
        flexShrink: 0,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    titleContainer: {
        padding: 16,
        textAlign: 'center',
        alignSelf: 'center'
    },
    title:{
        color: '#666666',
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'center',
    },
    leftIcon: {
        alignSelf: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 17
    },
    rightIcon: {
        alignSelf: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 17,
    }
})

export default Header;