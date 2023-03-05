import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function ServiceTermScreen() {
  return (
    <View style={styles.container}>
      <Text>서비스 약관</Text>
    </View>
  );
}

export default ServiceTermScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
