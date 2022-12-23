import React from 'react';
import { TouchableOpacity, Image, StyleSheet, ImageBackground } from 'react-native';

const PictureIcon = ()=>{
    const PictureImg = '../../../../assets/image/group/galleryIcon.png';

    return(
        <TouchableOpacity>
            <ImageBackground style={styles.background}>
                <Image source={require(PictureImg)} style={styles.img} />
            </ImageBackground>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    background:{
        width:92,
        height: 92,
        backgroundColor: 'rgb(242, 242, 242)',
        borderRadius: 8,

        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 23,
    },
    img:{
        width: 24,
        height: 24,
        tintColor: 'rgb(183, 183, 183)'
    }
})

export default PictureIcon;