import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function RecentGroup() {
  return (
    <View style={styles.container}>
      <Text>최근 모임</Text>
    </View>
  );
}

export default RecentGroup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
