import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

function Compliment({contents}) {
  const content = {
    icon: contents.icon,
    compliment: contents.compliment,
    quantity: contents.quantity,
  };

  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text style={styles.normalText}>
          <Image source={content.icon} style={styles.icons} />
        </Text>
      </View>
      <View style={styles.box2}>
        <Text style={styles.normalText}>{content.compliment}</Text>
      </View>
      <View style={styles.box3}>
        <Text style={styles.normalText}>{content.quantity}명</Text>
      </View>
    </View>
  );
}

export default Compliment;

const styles = StyleSheet.create({
  container: {
    // container style 정의
    color: 'white',
    backgroundColor: '#D3D3D350',
    width: '90%',
    height: '11%',
    borderRadius: 10,
    padding: '4%',
    marginTop: '4%',
    // flex
    flexDirection: 'row',
  },
  //
  box1: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box2: {
    flex: 7,
    justifyContent: 'center',
  },
  box3: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  //
  icons: {
    padding: 0,
    width: 40,
    height: 30,
  },
  //
  normalText: {
    color: 'black',
  },
});
