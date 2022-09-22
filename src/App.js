import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ILLogo } from './assets';
import { Onboarding, SplashScreen } from './pages';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';

export default function App() {
  return (
    // <View>
    <NavigationContainer>
      <Router />
    </NavigationContainer>
    // <SplashScreen />
    // </View>
  );
}

const styles = StyleSheet.create({});
