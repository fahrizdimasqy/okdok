import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ILOnboarding } from '../../assets';
import { Button } from '../../components';

export default function Onboarding({ navigation }) {
  return (
    <View style={styles.page}>
      <View>
        <View style={{ alignItems: 'flex-end' }}>
          <Text style={{ color: '#25316D' }}>Skip</Text>
          <ILOnboarding style={styles.image} />
        </View>
        <View style={styles.line}></View>
        <Text style={styles.title}>
          Read Patients Stories & book doctor appointment
        </Text>
        <Text style={styles.subtitle}>
          These are Specialist in the nervous system ,which includes the Brain &
          Nervers
        </Text>
      </View>
      <View>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 21,
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  image: {
    width: 252,
    height: 182,
    marginTop: 53,
  },
  line: {
    width: 72,
    height: 3,
    backgroundColor: '#63ADBD',
    marginTop: 44,
    marginBottom: 11,
  },
  title: {
    fontSize: 24,
    color: '#000D4B',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#8C8D9A',
    marginTop: 23,
  },
});
