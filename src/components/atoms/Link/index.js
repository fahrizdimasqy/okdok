import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Link({ text }) {
  return (
    <View>
      <Text style={styles.link}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  link: {
    color: '#DBDBDB',
    textDecorationLine: 'underline',
  },
});
