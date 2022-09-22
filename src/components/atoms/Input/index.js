import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';

export default function Input({ type, label }) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput textContentType={type} style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#DBDBDB',
    borderRadius: 8,
    padding: 12,
  },
  label: {
    fontSize: 16,
    color: '#699591',
    marginBottom: 6,
    fontFamily: 'Nunito-Regular',
  },
});
