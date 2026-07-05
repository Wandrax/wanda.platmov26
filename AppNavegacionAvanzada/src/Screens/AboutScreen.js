import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.iconCircle}>
        <Ionicons name="information-circle" size={46} color="#ea0c61" />
      </View>
      <Text style={styles.title}>Acerca de</Text>
      <Text style={styles.text}>
        Práctica 07: combinación de DrawerNavigator, TabNavigator, rutas
        protegidas e íconos personalizados en una app Expo.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fcf8fb',
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  iconCircle: {
    alignItems: 'center',
    backgroundColor: '#ffd5ea',
    borderRadius: 44,
    height: 88,
    justifyContent: 'center',
    marginBottom: 20,
    width: 88,
  },
  title: {
    color: '#2a0f1a',
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 10,
  },
  text: {
    color: '#69475b',
    fontSize: 16,
    lineHeight: 24,
    maxWidth: 340,
    textAlign: 'center',
  },
});
