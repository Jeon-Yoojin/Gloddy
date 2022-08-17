import React, { useEffect } from "react";
import { View, Text, StyleSheet, Animated, Dimensions } from "react-native";

const ProgressBar = ({ fullWidth, Height, widthPct }) => {
    const barWidth = React.useRef(new Animated.Value(0)).current;
    const finalWidth = (fullWidth * widthPct) / 10;

    useEffect(() => {
        Animated.spring(barWidth, {
            toValue: finalWidth,
            bounciness: 5,
            speed: 0.5,
            useNativeDriver: false,
        }).start();
    }, []);

    return (
        <View style={styles.barContainer(fullWidth)}>
            <Animated.View style={[styles.progressBar(Height), { width: barWidth }]}>
                <View style={{width: Height*0.8, height: Height*0.8, borderRadius: Height*0.8, backgroundColor: 'white', marginRight: Height*0.2}}></View>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    barContainer: fullWidth=>({
        //marginHorizontal: 40,
        width: fullWidth,
        backgroundColor: '#CCCCCC',
        borderRadius: 15,
    }),
    progressBar: Height=>({
        backgroundColor: '#2c4d81',
        height: Height,
        borderRadius: 15,
        alignItems: 'flex-end',
        justifyContent: 'center'
    }),
})

export default ProgressBar;