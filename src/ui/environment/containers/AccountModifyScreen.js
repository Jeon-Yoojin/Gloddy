import React, {useState} from 'react';
import {useEffect} from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  Dimensions,
  Pressable,
  Button,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import AntIcon from 'react-native-vector-icons/AntDesign';
import BirthModal from '../components/BirthModal';
import GenderModal from '../components/GenderModal';
import DatePickerModal from '../components/GenderModal';

function AccountModifyScreen() {
  const {width} = Dimensions.get('window');
  const [isGenderModalVisible, setIsGenderModalVisible] = useState(false);
  const [isBirthModalVisible, setIsBirthModalVisible] = useState(false);
  const [nickName, setNickName] = useState();
  const [birth, setBirth] = useState();
  const [gender, setGender] = useState();
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (birth && gender && nickName) {
      setIsComplete(true);
    }
  }, [nickName, birth, gender]);

  console.log(isComplete);
  return (
    <View style={styles.container}>
      {isBirthModalVisible && (
        <BirthModal
          isModalVisible={isBirthModalVisible}
          setModalIsVisible={setIsBirthModalVisible}
          setBirth={setBirth}
          openNextModal={setIsGenderModalVisible}
        />
      )}
      {isGenderModalVisible && (
        <GenderModal
          isModalVisible={isGenderModalVisible}
          setModalIsVisible={setIsGenderModalVisible}
          setGender={setGender}
        />
      )}

      <View style={styles.upperContainer}>
        <View style={{position: 'relative'}}>
          <Image
            source={require('../../../assets/image/compliments/icon1.png')}
            style={{width: 100, height: 100}}
          />
          <AntIcon
            name="pluscircle"
            style={{
              position: 'absolute',
              bottom: 5,
              right: 5,
              fontSize: 30,
              zIndex: 1,
              color: 'blue',
            }}
          />
        </View>
      </View>
      <View style={styles.lowerContainer}>
        <View style={styles.itemContainer}>
          <Text style={[styles.normalText, styles.boldText]}>닉네임</Text>
          <TextInput
            color="black"
            placeholder="닉네임"
            placeholderTextColor="black"
            textAlign="center"
            textAlignVertical="center"
            style={[styles.inputText, {width: width * 0.9}, styles.boldText]}
            value={nickName}
            onChange={event => {
              setNickName(event.nativeEvent.text);
            }}
          />
        </View>
        <View style={styles.itemContainer}>
          <Text style={[styles.normalText, styles.boldText]}>생년월일</Text>
          <Pressable
            onPress={() => {
              setIsBirthModalVisible(true);
            }}>
            <View
              style={[
                styles.birthView,
                {justifyContent: 'center', alignItems: 'center'},
              ]}>
              <Text style={[styles.normalText, styles.boldText]}>
                {birth ? birth : '생년월일을 선택해주세요'}
              </Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.itemContainer}>
          <Text style={[styles.normalText, styles.boldText]}>성별</Text>
          <Pressable
            onPress={() => {
              setIsGenderModalVisible(true);
            }}>
            <View
              style={[
                styles.birthView,
                {justifyContent: 'center', alignItems: 'center'},
              ]}>
              <Text style={[styles.normalText, styles.boldText]}>
                {gender ? gender : '성별을 선택해주세요'}
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
      <View style={[styles.moreLowerContainer]}>
        <Pressable>
          <View
            style={[isComplete ? styles.completeBtn : styles.notCompleteBtn]}>
            <Text
              style={[
                styles.normalText,
                styles.boldText,
                {fontSize: 18, color: 'white'},
              ]}>
              다음
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

export default AccountModifyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperContainer: {
    backgroundColor: 'white',
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lowerContainer: {
    backgroundColor: 'white',
    flex: 6,
    alignItems: 'center',
    paddingTop: 30,
    width: '100%',
  },
  moreLowerContainer: {
    flex: 1,
    marginBottom: 20,
    backgroundColor: 'white',
    padding: 30,
  },

  itemContainer: {
    marginBottom: 25,
    width: '90%',
  },
  //
  birthView: {
    backgroundColor: '#80808030',
    width: '100%',
    height: 50,
    borderRadius: 10,
  },
  completeBtn: {
    width: '100%',
    borderRadius: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  notCompleteBtn: {
    backgroundColor: '#80808030',
    width: '100%',
    borderRadius: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  //
  inputText: {
    borderRadius: 10,
    backgroundColor: '#80808030',
  },
  normalText: {
    color: 'black',
  },
  boldText: {
    fontWeight: 'bold',
  },
});
