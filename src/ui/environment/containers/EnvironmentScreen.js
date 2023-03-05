import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Button,
  useWindowDimensions,
  Image,
} from 'react-native';
import Modal from 'react-native-modal';

function EnvironmentScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      {modalVisible && (
        <VersionModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      )}
      <View style={[styles.subcontainer, {marginTop: 0}]}>
        <Pressable style={styles.itemContainer}>
          <View>
            <Text style={styles.normalText}>회원정보 수정</Text>
          </View>
        </Pressable>
        <Pressable
          style={styles.itemContainer}
          onPress={() => {
            navigation.navigate('ProduceModifyScreen');
          }}>
          <Text style={styles.normalText}>프로필 수정</Text>
        </Pressable>
      </View>
      <View style={styles.subcontainer}>
        <Pressable
          style={styles.itemContainer}
          onPress={() => {
            setModalVisible(true);
            console.log(modalVisible);
          }}>
          <Text style={styles.normalText}>버전</Text>
        </Pressable>

        <Pressable
          style={styles.itemContainer}
          onPress={() => {
            navigation.navigate('ServiceTermScreen');
          }}>
          <Text style={styles.normalText}>서비스 약관</Text>
        </Pressable>
        <Pressable
          style={styles.itemContainer}
          onPress={() => {
            navigation.navigate('PrivacyPolicyScreen');
          }}>
          <Text style={styles.normalText}>개인정보보호정책</Text>
        </Pressable>
      </View>
      <View style={styles.subcontainer}>
        <View style={styles.itemContainer}>
          <Text style={styles.normalText}>로그아웃</Text>
        </View>
        <View style={[styles.itemContainer, {backgroundColor: '#D7533E'}]}>
          <Text style={[styles.normalText, {color: 'white'}]}>
            계정 삭제하기
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default EnvironmentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  subcontainer: {
    backgroundColor: 'white',
    marginVertical: 10,
    paddingVertical: 20,
    flexDirection: 'column',
    alignItems: 'center',
  },
  itemContainer: {
    backgroundColor: '#80808015',
    width: '80%',
    height: 50,
    borderRadius: 10,
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  //
  normalText: {
    color: 'black',
    paddingLeft: 20,
    letterSpacing: 0.4,
  },
});

function VersionModal({modalVisible, setModalVisible}) {
  console.log('VersionModal: ', modalVisible);

  return (
    <Modal
      animationType="slide"
      visible={modalVisible}
      transparent={true}
      style={[subStyles.modalContainer]}
      onBackdropPress={() => {
        setModalVisible(false);
      }}
      onRequestClose={() => {}}>
      <View style={[subStyles.container]}>
        <View style={subStyles.leftContainer}>
          <Image
            source={require('../../../assets/image/compliments/icon1.png')}
            style={{width: 100, height: 100}}
          />
        </View>
        <View style={subStyles.rightContainer}>
          <View style={subStyles.rightTextView}>
            <Text style={[subStyles.normalText, subStyles.boldText]}>
              Version 1.0.0{' '}
            </Text>
            <Text style={{color: 'blue'}}>Beta</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const subStyles = StyleSheet.create({
  modalContainer: {
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  leftContainer: {
    flex: 2,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  rightContainer: {
    flex: 4,
    justifyContent: 'center',
  },
  //
  rightTextView: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'blue',
    backgroundColor: 'white',
  },
  //
  modalHideBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  normalText: {
    fontSize: 20,
    color: 'black',
  },
  boldText: {
    fontWeight: 'bold',
  },
});
