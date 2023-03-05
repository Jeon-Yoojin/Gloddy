import React, {useState} from 'react';
import {
  FlatList,
  View,
  SafeAreaView,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import Review from '../components/Review';

const reviewTexts = [
  {
    author: 'Ahn Ki Hyeon',
    text: '글로디 어플을 사용하면서 첫 모임을 해보았던 건데 어색함 없이 모임을 잘 이끌어주시고 너무 친절하셔서 덕분에 거리낌 없이 즐거운 모임을 한 것 같습니다. 좋은 추억 만들어 주셔서 감사합니다~',
    location: '경기도',
    date: '1일 전',
  },
  {
    author: 'Lim suwon',
    text: '다음엔 좀 맛집가서 합시다',
    location: '서울특별시',
    date: '4일 전',
  },
  {
    author: 'yoon',
    text: '친절하시고 잘 대해주셔서 좋았습니다. 덕분에 첫 모임이었는데 글로디 서비스에 대한 믿음이 생겼어요',
    location: '인천광역시',
    date: '8일 전',
  },
  {
    author: 'Ahn Ki Hyeon',
    text: '글로디 어플을 사용하면서 첫 모임을 해보았던 건데 어색함 없이 모임을 잘 이끌어주시고 너무 친절하셔서 덕분에 거리낌 없이 즐거운 모임을 한 것 같습니다. 좋은 추억 만들어 주셔서 감사합니다~',
    location: '경기도',
    date: '1일 전',
  },
  {
    author: 'Lim suwon',
    text: '다음엔 좀 맛집가서 합시다',
    location: '서울특별시',
    date: '4일 전',
  },
  {
    author: 'yoon',
    text: '친절하시고 잘 대해주셔서 좋았습니다. 덕분에 첫 모임이었는데 글로디 서비스에 대한 믿음이 생겼어요',
    location: '인천광역시',
    date: '8일 전',
  },
];

function GroupReviewScreen() {
  const {width} = useWindowDimensions();
  return (
    <SafeAreaView style={[styles.container, {width: width}]}>
      <FlatList
        contentContainerStyle={styles.flatListView}
        data={reviewTexts}
        renderItem={({item}) => <Review content={item} />}
      />
    </SafeAreaView>
  );
}

export default GroupReviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  //
  flatListView: {
    alignItems: 'center',
    paddingBottom: 100,
  },
});
