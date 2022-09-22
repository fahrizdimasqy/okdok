import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { ILLogo2 } from '../../assets';
import { Button, Gap, Input, Link } from '../../components';

export default function Register() {
  return (
    <ScrollView>
      <View style={styles.page}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 64,
          }}>
          <ILLogo2 />
        </View>
        <Text style={styles.title}>Register</Text>
        <Input label="Full Name" />
        <Gap height={24} />
        <Input label="Phone Number" />
        <Gap height={24} />
        <Input label="Email Address" />
        <Gap height={24} />
        <Input type={'password'} label="Password" />
        <Gap height={10} />
        <Link text={'Link'} />
        <Gap height={10} />
        <Button title="Sign Up" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 38,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'Nunito-SemiBold',
    color: '#000D4B',
    marginBottom: 40,
  },
  input: {
    height: 40,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 8,
    // borderColor: '#effe',
  },
});
