import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Image,
  Pressable,
} from 'react-native';
import Map from '../../group/detail/components/Map';
import ProgressBar from '../components/ProgressBar';

const Reliability = () => {
  return (
    <View style={{marginHorizontal: 10}}>
      <Text style={{fontSize: 12, color: '#000000', marginBottom: 12}}>
        신뢰도 지표
      </Text>

      {/* soulmate까지 width 62.5%, 길이 328, 높이 12를 의미*/}
      <ProgressBar widthPct={62.5} fullWidth={350} Height={21} />
      <View style={{flexDirection: 'row', marginVertical: 8}}>
        <Text style={styles.reliability}>HOOD</Text>
        <Text style={styles.reliability}>MATE</Text>
        <Text style={styles.reliability}>SOUL{'\n'}MATE</Text>
        <Text style={styles.reliability}>GLODDY</Text>
      </View>
    </View>
  );
};

const Profile = ({name, address, age}) => {
  return (
    <View
      style={[
        {paddingVertical: 25, alignItems: 'center'},
        styles.subContainer,
      ]}>
      <Image
        source={require('../../../assets/image/group/userSample.png')}
        style={styles.img}
      />
      <View style={{alignItems: 'flex-start'}}>
        <Text style={{alignSelf: 'center'}}>
          <Text style={styles.name}>글로디관리자</Text>
          <Text style={{fontSize: 14, color: '#AAAAAA'}}> 님</Text>
        </Text>
        <Text style={{fontSize: 14, color: '#AAAAAA', alignSelf: 'center'}}>
          남 ㅣ 20세ㅣ 경희대학교 서울캠퍼스
        </Text>
        <Text style={{fontSize: 10, color: '#AAAAAA', alignSelf: 'center'}}>
          2022년 01월 01일 가입
        </Text>
      </View>
    </View>
  );
};

const Rating = ({compliment, review}) => {
  const navigation = useNavigation();
  return (
    <View style={[{flexDirection: 'row', paddingVertical: 10}]}>
      <View style={{width: '50%', flexDirection: 'row'}}>
        <View
          style={{
            backgroundColor: '#F7F7F7',
            width: 47,
            height: 47,
            borderRadius: 23.5,
            marginHorizontal: 10,
          }}
        />
        <Pressable
          onPress={() => {
            navigation.navigate('MyComplimentScreen');
          }}>
          <View>
            <Text style={styles.text}>받은 칭찬</Text>
            <Text style={[styles.text, {fontSize: 20, fontWeight: 'bold'}]}>
              15
            </Text>
          </View>
        </Pressable>
      </View>
      <View style={{width: '50%', flexDirection: 'row'}}>
        <View
          style={{
            backgroundColor: '#F7F7F7',
            width: 47,
            height: 47,
            borderRadius: 23.5,
            marginHorizontal: 10,
          }}
        />
        <Pressable
          onPress={() => {
            navigation.navigate('GroupReviewScreen');
          }}>
          <View>
            <Text style={styles.text}>모임 후기</Text>
            <Text style={[styles.text, {fontSize: 20, fontWeight: 'bold'}]}>
              111
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const SelfIntro = () => {
  return (
    <View style={{marginHorizontal: 20, marginVertical: 5}}>
      <Text style={styles.subTitle}>자기 소개</Text>
      <View
        style={{
          backgroundColor: '#FFFFFF',
          paddingHorizontal: 20,
          paddingVertical: 16,
          borderRadius: 10,
        }}>
        <Text
          style={{
            fontWeight: '500',
            fontSize: 12,
            lineHeight: 24,
            color: '#3A3A3A',
          }}>
          안녕하세요, 경희대학교에 재학중인 글로디 관리자 입니다. 잘 부탁 드려요
          !
        </Text>
      </View>
    </View>
  );
};

const Personalities = () => {
  return (
    <View style={{marginHorizontal: 20, marginVertical: 5}}>
      <Text style={styles.subTitle}>성격</Text>
      <View style={{flexDirection: 'row'}}>
        <PersonalityCard personality={'신중한'} />
        <PersonalityCard personality={'친절한'} />
        <PersonalityCard personality={'센스있는'} />
      </View>
    </View>
  );
};

const PersonalityCard = ({personality}) => {
  return (
    <View
      style={{
        paddingVertical: 2,
        paddingHorizontal: 14,
        borderRadius: 14,
        backgroundColor: '#FFFFFF',
        marginHorizontal: 4,
      }}>
      <Text style={{fontSize: 12, lineHeight: 24, fontWeight: 'bold'}}>
        {personality}
      </Text>
    </View>
  );
};

const MyProfileScreen = () => {
  // return(
  //     <Map/>
  // )

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          borderBottomEndRadius: 35,
          borderBottomStartRadius: 35,
          backgroundColor: '#FFFFFF',
        }}>
        {/* 상단 이름, 나이, 거주지 */}
        <Profile />

        <View style={[styles.subContainer]}>
          {/* 신뢰도 지표 */}
          <Reliability />
        </View>

        <View style={[styles.subContainer]}>
          {/* 평가 - 칭찬과 모임 후기 */}
          <Rating />
        </View>
      </View>

      <View>
        <SelfIntro />
        <Personalities />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#FFFFFF'
  },
  subContainer: {
    marginHorizontal: 18,
    borderBottomColor: '#E5E5E5',
    borderBottomWidth: 1,
  },
  whiteBox: {
    backgroundColor: 'white',
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 14,
  },
  img: {
    width: 98,
    height: 98,
    borderRadius: 49,
  },
  reliability: {
    width: 82,
    textAlign: 'center',
    fontSize: 12,
    color: '#000000',
  },
  name: {
    color: '#1A1A1A',
    fontWeight: 'bold',
    fontSize: 20,
  },
  subTitle: {
    color: '#1A1A1A',
    fontSize: 12,
    fontWeight: '500',
    marginVertical: 8,
  },
});

export default MyProfileScreen;
