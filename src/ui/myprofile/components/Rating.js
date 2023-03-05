import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';

const ReviewCircle = () => {
  return (
    <View
      style={{
        backgroundColor: '#F7F7F7',
        width: 47,
        height: 47,
        borderRadius: 23.5,
        marginRight: 15,
      }}
    />
  );
};

const Rating = ({compliment, review}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        {/* */}
        <View style={styles.itemContainer}>
          <Pressable
            onPress={() => {
              navigation.navigate('RecentGroup');
            }}>
            {/*
            TODO: 최근모임 추가
             */}
            <Text style={styles.text}>최근 모임</Text>
            <Text style={[styles.text, styles.bold]}>5회</Text>
          </Pressable>
        </View>

        {/* */}
        {/* <View style={{borderRightColor: '#E5E5E5', borderRightWidth: 1}} /> */}
        <View style={styles.itemContainer}>
          <Pressable
            onPress={() => {
              navigation.navigate('MyComplimentScreen');
            }}>
            <Text style={styles.text}>받은 칭찬</Text>
            <Text style={[styles.text, styles.bold, {color: 'blue'}]}>
              {compliment}개
            </Text>
          </Pressable>
        </View>

        {/* */}
        <View style={(styles.itemContainer, {})}>
          <Pressable
            onPress={() => {
              navigation.navigate('GroupReviewScreen');
            }}>
            <View>
              <Text style={styles.text}>모임 후기</Text>
              <Text style={[styles.text, styles.bold, {color: 'blue'}]}>
                {review}개
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
  subContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  itemContainer: {
    flex: 1,
  },
  bold: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    color: 'black',
  },
});

export default Rating;
