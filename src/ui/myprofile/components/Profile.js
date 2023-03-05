import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, Text, Image, Pressable} from 'react-native';
import IconAnt from 'react-native-vector-icons/AntDesign';
const profileSize = 98;

const Profile = ({name, gender, age, school, since = {year, month, day}}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{position: 'relative'}}>
        <Image
          source={require('../../../assets/image/group/userSample.png')}
          style={styles.profileImg}
        />

        <IconAnt
          name="pluscircle"
          color="blue"
          style={{
            fontSize: 25,
            position: 'absolute',
            bottom: 20,
            right: 0,
            zIndex: 1,
          }}
          onPress={() => {
            console.log('profile plus-btn pressed');
            navigation.navigate('AccountModifyScreen');
          }}
        />
      </View>

      <View style={{alignItems: 'flex-start'}}>
        <Text style={{alignSelf: 'center', marginVertical: 5}}>
          <Text style={styles.name}>{name}</Text>
          <Text style={[styles.largeSize, {color: '#AAAAAA'}]}> 님</Text>
        </Text>
        <Text style={[styles.text, styles.largeSize]}>
          {gender} ㅣ {age}세ㅣ {school}
        </Text>
        <Text style={[styles.text, styles.mediumSize]}>
          {since.year}년 {since.month}월 {since.day}일 가입
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 25,
    marginHorizontal: 18,
    alignItems: 'center',
    borderBottomColor: '#E5E5E5',
    borderBottomWidth: 1,
  },
  profileImg: {
    width: profileSize,
    height: profileSize,
    borderRadius: profileSize / 2,
    marginTop: 35,
    marginBottom: 20,
  },
  name: {
    color: '#1A1A1A',
    fontWeight: 'bold',
    fontSize: 20,
  },
  text: {
    color: '#AAAAAA',
    alignSelf: 'center',
    marginVertical: 5,
  },
  largeSize: {
    fontSize: 14,
  },
  mediumSize: {
    fontSize: 10,
  },
});

export default Profile;
