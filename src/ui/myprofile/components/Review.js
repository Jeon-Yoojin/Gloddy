import React, {useState} from 'react';
import {View, Image, Text, Pressable, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import ReviewDeleteModal from './ReviewDeleteModal';

const Review = ({content}) => {
  const [visibleModal, setVisibleModal] = useState(false);

  return (
    <View style={styles.ReviewContainer}>
      {visibleModal && (
        <ReviewDeleteModal
          visible={visibleModal}
          setVisible={setVisibleModal}
          author={content.author}
        />
      )}
      <View style={styles.ReviewUpperContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../../assets/image/sample/Lucy.png')}
            style={{width: 50, height: 50}}
          />
        </View>
        <View style={styles.textContainer}>
          <View style={styles.textContainer1}>
            <Text style={styles.titleText}>{content.author}</Text>
          </View>
          <View style={styles.textContainer2}>
            <Text style={styles.subText}>
              {content.location} | {content.date}
            </Text>
          </View>
        </View>
        <View style={styles.iconContainer}>
          <Pressable
            onPress={() => {
              setVisibleModal(true);
            }}>
            <Icon name="dots-three-vertical" size={24} color="#000000" />
          </Pressable>
        </View>
      </View>
      <View style={styles.ReviewLowerContainer}>
        <Text style={{lineHeight: 22}}>{content.text}</Text>
      </View>
    </View>
  );
};

export default Review;

const styles = StyleSheet.create({
  // 리뷰
  ReviewContainer: {
    backgroundColor: '#F5F5F5',
    width: '90%',
    borderRadius: 10,
    padding: 13,
    marginTop: 30,
    alignItems: 'center',
  },
  // 리뷰 - 컨테이너 상단
  // 1:4:1
  ReviewUpperContainer: {
    flexDirection: 'row',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginRight: 10,
    marginBottom: 10,
  },
  textContainer: {
    flex: 4,
  },
  iconContainer: {flex: 1, alignItems: 'flex-end'},
  textContainer1: {
    marginBottom: 4,
  },
  textContainer2: {
    flexDirection: 'row',
  },

  // 리뷰- 컨테이너 하단
  ReviewLowerContainer: {
    borderRadius: 10,
    padding: 20,
    backgroundColor: 'white',
    marginTop: 8,
  },
  // 세부 스타일
  titleText: {fontWeight: 'bold', fontSize: 17},
  subText: {color: '#AAAAAA'},
  normalText: {},
});
