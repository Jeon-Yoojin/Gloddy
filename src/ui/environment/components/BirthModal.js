import {StyleSheet, View, Button, Text, Pressable} from 'react-native';
import Modal from 'react-native-modal';
import React, {useState} from 'react';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {Picker} from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker';
import {color} from 'react-native-reanimated';
import {useEffect} from 'react';

function BirthModal({
  isModalVisible,
  setModalIsVisible,
  setBirth,
  openNextModal,
}) {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setBirth(date.toISOString().substring(0, 10));
  }, [date]);

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

          <Text style={[styles.normalText, {fontSize: 18}]}>생년월일</Text>
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
          <View
            style={{
              alignItems: 'center',
              marginVertical: 10,
            }}>
            <DatePicker
              date={date}
              onDateChange={setDate}
              style={{color: 'black'}}
              textColor="black"
              mode="date"
            />
          </View>
          <Pressable
            onPress={() => {
              setModalIsVisible(false);
              openNextModal(true);
            }}>
            <View style={[styles.finishBtn]}>
              <Text style={{fontWeight: 'bold'}}>다음</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

export default BirthModal;

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
    height: '40%',
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
