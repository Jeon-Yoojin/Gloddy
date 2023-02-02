import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Review from '../components/Review';

const reviewTexts = {
  author: 'Ahn Ki Hyeon',
  text: '글로디 어플을 사용하면서 첫 모임을 해보았던 건데 어색함 없이 모임을 잘 이끌어주시고 너무 친절하셔서 덕분에 거리낌 없이 즐거운 모임을 한 것 같습니다. 좋은 추억 만들어 주셔서 감사합니다~',
  location: '경기도',
  date: '1일 전',
};

function GroupReviewScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Review content={reviewTexts} />
      <Review content={reviewTexts} />
      <Review content={reviewTexts} />
    </SafeAreaView>
  );
}

export default GroupReviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
});
