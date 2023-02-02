import React, { useEffect } from "react";
import { View, Text, StyleSheet, Animated, Dimensions } from "react-native";

const ProgressBar = ({ fullWidth, Height, widthPct }) => {
    const barWidth = React.useRef(new Animated.Value(0)).current;
    const finalWidth = (fullWidth * widthPct)/100;

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
            <Animated.View style={[styles.progressBar(Height), { width: barWidth }]}/>
        </View>
    );
};

const styles = StyleSheet.create({
    barContainer: fullWidth=>({
        //marginHorizontal: 40,
        width: fullWidth,
        backgroundColor: '#F7F7F7',
        borderRadius: 15,
        alignSelf: 'center'
    }),
    progressBar: Height=>({
        backgroundColor: '#1249FC',
        height: Height,
        borderRadius: 15,
        alignItems: 'flex-end',
        justifyContent: 'center'
    }),
})

export default ProgressBar;