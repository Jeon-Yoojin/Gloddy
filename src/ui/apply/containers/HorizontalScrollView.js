import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

const data = [
  { id: '1', title: 'Component 1' },
  { id: '2', title: 'Component 2' },
  { id: '3', title: 'Component 3' },
  { id: '4', title: 'Component 4' },
  { id: '5', title: 'Component 5' },
];

const HorizontalScrollView = () => {
    return (
        <ScrollView horizontal={true} style={{ flex: 1 }}>
            <View style={{ backgroundColor: 'red', width: 100, height: 100, marginLeft: -50, zIndex: 2 }} />
            <View style={{ backgroundColor: 'blue', width: 100, height: 100, marginLeft: -50, zIndex: 1 }} />
            <View style={{ backgroundColor: 'green', width: 100, height: 100, marginLeft: -50, zIndex: 0 }} />
        </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    alignItems: 'center',
  },
  componentContainer: {
    backgroundColor: 'grey',
    padding: 20,
    borderRadius: 10,
    marginRight: 10,
    width: 200,
    height: 200,
  },
  componentText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default HorizontalScrollView;
