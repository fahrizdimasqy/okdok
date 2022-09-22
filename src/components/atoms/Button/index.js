import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

export default function Button({ title, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#22C7B8',
    paddingVertical: 11,
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: 'white',
  },

  //   button: {
  //     width: 311,
  //     height: 49,
  //     backgroundColor: '#22C7B8',
  //     color: 'white',
  //     marginTop: 36,
  //     borderRadius: 8,
  //     paddingVertical: 11,
  //     justifyContent: 'center',
  //   },
  //   text: {
  //     color: 'white',
  //     textAlign: 'center',
  //   },
});
