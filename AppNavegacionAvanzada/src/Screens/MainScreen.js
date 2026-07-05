import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.iconCircle}>
        <Ionicons name="home" size={42} color="#760f48" />
      </View>
      <Text style={styles.title}>Inicio</Text>
      <Text style={styles.text}>
        Bienvenida a la app de Navegación Avanzada. Desde acá podés recorrer las
        pestañas inferiores y abrir el menú lateral.
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
    backgroundColor: '#fbcceb',
    borderRadius: 40,
    height: 80,
    justifyContent: 'center',
    marginBottom: 20,
    width: 80,
  },
  title: {
    color: '#2a0f23',
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 10,
  },
  text: {
    color: '#694761',
    fontSize: 16,
    lineHeight: 24,
    maxWidth: 320,
    textAlign: 'center',
  },
});
