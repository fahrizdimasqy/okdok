import { StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import { ILLogo } from '../../assets';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Onboarding');
    }, 3000);
  }, []);
  return (
    <View style={styles.page}>
      <ILLogo style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#63ADBD',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: { width: 204, height: 262 },
});
