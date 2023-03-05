import {StyleSheet, View, Button, Text, Pressable} from 'react-native';
import Modal from 'react-native-modal';
import React, {useState} from 'react';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {Picker} from '@react-native-picker/picker';
import {useEffect} from 'react';
function GenderModal({isModalVisible, setModalIsVisible, setGender}) {
  return (
    <Modal
      isVisible={isModalVisible}
      animationIn="slideInUp"
      style={styles.container}>
      <View style={[styles.subContainer, {backgroundColor: 'white'}]}>
        <View style={[styles.upperContainer]}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 20,
            }}>
            <AntIcon name="left" color="black" style={{fontSize: 24}} />
          </View>

          <Text style={[styles.normalText, {fontSize: 18}]}>성별</Text>
          <Pressable
            onPress={() => {
              setModalIsVisible(false);
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 20,
              }}>
              <MaterialIcon name="clear" color="black" style={{fontSize: 24}} />
            </View>
          </Pressable>
        </View>
        <View style={[styles.lowerContainer]}>
          <View style={styles.genderView}>
            <Picker
              dropdownIconColor="black"
              mode="dropdown"
              selectedValue={setGender}
              onValueChange={(itemValue, itemIndex) => setGender(itemValue)}>
              <Picker.Item
                label="성별을 선택해주세요"
                value="성별"
                color="black"
                enabled={false}
              />
              <Picker.Item label="남자" value="남자" color="black" />
              <Picker.Item label="여자" value="여자" color="black" />
            </Picker>
          </View>
          <Pressable
            onPress={() => {
              setModalIsVisible(false);
            }}>
            <View style={[styles.finishBtn]}>
              <Text style={{fontWeight: 'bold'}}>완료</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

export default GenderModal;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    margin: 0,
    justifyContent: 'flex-end',
  },
  subContainer: {
    padding: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: '30%',
  },
  upperContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  lowerContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  //
  genderView: {
    padding: 15,
  },

  //
  normalText: {
    color: 'black',
  },
  finishBtn: {
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '50%',
    borderRadius: 10,
  },
});
