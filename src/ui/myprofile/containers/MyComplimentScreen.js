import React from 'react';
import {View, Pressable, StyleSheet} from 'react-native';
import Compliment from '../components/Compliment';

function MyComplimentScreen() {
  return (
    <View style={styles.container}>
      <Compliment
        style={styles.compliment}
        contents={{icon: icons.icon1, compliment: '차분해요', quantity: 8}}
      />
      <Compliment
        style={styles.compliment}
        contents={{icon: icons.icon2, compliment: '친절해요', quantity: 9}}
      />
      <Compliment
        style={styles.compliment}
        contents={{icon: icons.icon3, compliment: '적극적이에요', quantity: 0}}
      />
      <Compliment
        style={styles.compliment}
        contents={{icon: icons.icon4, compliment: '유머러스해요', quantity: 0}}
      />
    </View>
  );
}

export default MyComplimentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  compliment: {},
});

const icons = {
  // 차분
  icon1: require('../../../assets/image/compliments/icon1.png'),
  // 친절
  icon2: require('../../../assets/image/compliments/icon2.png'),
  // 적극적
  icon3: require('../../../assets/image/compliments/icon3.png'),
  // 유머러스
  icon4: require('../../../assets/image/compliments/icon4.png'),
};
