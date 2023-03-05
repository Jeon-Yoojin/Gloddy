import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

function PrivacyPolicyScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text>개인정보처리방침</Text>
      </ScrollView>
    </View>
  );
}

export default PrivacyPolicyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
});
