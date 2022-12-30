import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import GetPermission from "../../../../common/GetPermission";
import * as ImagePicker from "react-native-image-picker";
import PlusIcon from "../../../../assets/image/plusIcon.svg";


const GroupInfoInput = ({selectedImages, setSelectedImages, onChangeInput, contentLength})=>{
    const getPhotoWithPermission = async () => {
        try{
            const hasPermission = await GetPermission();
            console.log("hasPermission", hasPermission);

            if(hasPermission){
                ImagePicker.launchImageLibrary(
                    {
                        mediaType: 'photo',
                    },
                    (res)=>{
                        if(res.didCancel){
                            setSelectedImages([]);
                            return;
                        }
                        console.log("selected photo", res);
                        setSelectedImages(res.assets);
                    }
                )
            }
            else{
                Alert.alert(
                    "권한이 없습니다",
                    "갤러리 접근 권한이 필요합니다"
                );
            }
        }catch (error){
            console.log("getPhotoWithPermission error", error);
        }
    }

    return (
        <>
        {/* 이미지 */}
            <TouchableOpacity
                onPress={getPhotoWithPermission}
                style={{backgroundColor: '#F5F5F5', alignSelf: 'center', marginTop: 25, width: 92, height: 92, borderRadius: 10}}
            >
                <Image
                    style={{width: 92, height: 92, borderRadius: 10}}
                    source={{uri: selectedImages[0]?.uri}}
                />
                <PlusIcon
                    fill={'#1249FC'}
                    style={{position: 'absolute', right: -6, top: -6}}
                />
            </TouchableOpacity>

            {/* 방제목 */}
            <View style={styles.subContainer}>
                <Text style={styles.titleText}>방제목</Text>
                <TextInput
                    style={styles.inputBox}
                    placeholder="제목을 입력해주세요"
                    onChange={event => onChangeInput(event, 'title')}
                    autoCorrect={false}
                    autoCapitalize={'none'}
                />
            </View>

            {/* 활동 소개글 */}
            <View style={styles.subContainer}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.titleText}>활동 소개글</Text>
                    <Text style={{color: '#AAAAAA', fontSize: 12}}>{contentLength}/30</Text>
                </View>
                <TextInput
                    style={[styles.inputBox, {paddingTop: 15, height: 110, textAlignVertical: 'top',}]}
                    multiline={true}
                    maxLength={30}
                    placeholder="내용을 입력해주세요"
                    onChange={event => onChangeInput(event, 'content')}
                    autoCorrect={false}
                    autoCapitalize={'none'}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    subContainer: {
        backgroundColor: 'white',
        justifyContent: 'center',
        marginHorizontal: 14,
        marginTop: 10
    },
    titleText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#1A1A1A',
        marginTop: 5,
        marginBottom: 10,
    },
    inputBox: {
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 13,
    }
})

export default GroupInfoInput;