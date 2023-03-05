import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet, Text, Pressable } from 'react-native';

import Profile from '../components/Profile';
import ReliabilityIndicator from '../components/ReliabilityIndicator';
import Rating from '../components/Rating';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const SelfIntro = ({ intro }) => {
  return (
    <View style={{ marginHorizontal: 20, marginVertical: 5 }}>
      <Text style={styles.subTitle}>자기 소개</Text>
      <View style={styles.introContainer}>
        <Text style={styles.introText}>{intro}</Text>
      </View>
    </View>
  );
};

const Personalities = ({ personalities }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={{ marginHorizontal: 20, marginVertical: 5 }}
      onPress={() => {
        navigation.navigate('ProduceModifyScreen');
      }}>
      <Text style={styles.subTitle}>성격</Text>
      <View style={{ flexDirection: 'row' }}>
        {personalities.map((item, index) => {
          return <PersonalityCard key={index} personality={item} />;
        })}
      </View>
    </Pressable>
  );
};

const PersonalityCard = ({ personality }) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={[styles.cardText, { color: 'black' }]}>{personality}</Text>
    </View>
  );
};

const MyProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ position: 'relative' }}>
        <View
          style={[
            {
              borderBottomEndRadius: 35,
              borderBottomStartRadius: 35,
              backgroundColor: '#FFFFFF',
            },
          ]}>
          <Pressable
            style={{
              position: 'absolute',
              top: '5%',
              right: '5%',
              zIndex: 1,
            }}
            onPress={() => {
              navigation.navigate('EnvironmentScreen');
            }}>
            <View>
              <Icon name="settings" color="black" style={{ fontSize: 30 }} />
            </View>
          </Pressable>

          {/* 상단 이름, 나이, 거주지 */}
          <Profile
            name={'글로디관리자'}
            gender={'남성'}
            age={'22'}
            school={'경희대학교 서울캠퍼스'}
            since={{ year: '2022', month: '02', day: '18' }}
          />
          {/* 신뢰도 지표 */}
          <View style={styles.subContainer}>
            <ReliabilityIndicator widthPct={50} />
          </View>
          {/* 평가 - 칭찬과 모임 후기 */}
          <View style={[styles.subContainer]}>
            <Rating compliment={11} review={100} />
          </View>
        </View>
        <View>
          <Pressable
            onPress={() => {
              navigation.navigate('ProduceModifyScreen');
            }}>
            {/* TODO: 
            navigate에  Argument로 자기소개 내용을 전달해야함
            */}
            <SelfIntro
              intro={
                '안녕하세요, 경희대학교에 재학중인 글로디 관리자 입니다. 잘 부탁 드려요 !'
              }
            />
          </Pressable>

          <Personalities personalities={['신중한', '친절한', '센스있는']} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    marginHorizontal: 18,
    borderBottomColor: '#E5E5E5',
    borderBottomWidth: 1,
  },
  subTitle: {
    color: '#1A1A1A',
    fontSize: 12,
    fontWeight: '500',
    marginVertical: 8,
  },
  introText: {
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 24,
    color: '#3A3A3A',
  },
  introContainer: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 10,
  },
  cardContainer: {
    paddingVertical: 2,
    paddingHorizontal: 14,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 4,
  },
  cardText: {
    fontSize: 12,
    lineHeight: 24,
    fontWeight: 'bold',
  },
});

export default MyProfileScreen;
