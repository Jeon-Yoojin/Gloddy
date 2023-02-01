import React from 'react';
import {View, Text, StyleSheet, Image, Modal, Pressable} from 'react-native';

function ReviewDeleteModal({author, visible, setVisible}) {
  return (
    <Modal animationType="slide" visible={visible} transparent={true}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.container}>
          <View style={styles.upperContainer}>
            <View style={styles.imageContainer}>
              <Image
                source={require('../../../assets/image/sample/Lucy.png')}
                style={{width: 100, height: 100}}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={[styles.normalText, {lineHeight: 30}]}>
                {author} 님의{'\n'}후기를 삭제하시겠어요?
              </Text>
            </View>
          </View>
          <View style={styles.lowerContainer}>
            <View style={styles.buttonContainer}>
              <Pressable>
                <View style={[styles.button, {backgroundColor: '#D7533E'}]}>
                  <Text style={{color: 'white'}}>네</Text>
                </View>
              </Pressable>
              <Pressable
                onPress={() => {
                  setVisible(false);
                }}>
                <View style={[styles.button, {backgroundColor: '#CDCDCD'}]}>
                  <Text style={{color: 'white'}}>아니오</Text>
                </View>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default ReviewDeleteModal;

const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: '50%',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffffdf',
    padding: 30,
  },
  upperContainer: {
    flex: 5,
    width: '100%',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 2,
    width: '80%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  //
  lowerContainer: {
    flex: 2,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: '100%',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '60%',
    borderRadius: 10,
  },
  // texts
  normalText: {},
});
