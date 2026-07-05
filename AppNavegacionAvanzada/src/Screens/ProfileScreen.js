import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Ionicons name="person" size={46} color="#d81d7a" />
      </View>
      <Text style={styles.title}>Perfil</Text>
      <Text style={styles.name}>Usuario invitado</Text>
      <Text style={styles.text}>
        Esta ruta está protegida por el login simulado de App.js. Al cerrar sesión
        vuelve a aparecer la pantalla de ingreso.
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
  avatar: {
    alignItems: 'center',
    backgroundColor: '#fedbec',
    borderRadius: 48,
    height: 96,
    justifyContent: 'center',
    marginBottom: 18,
    width: 96,
  },
  title: {
    color: '#2a0f20',
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 8,
  },
  name: {
    color: '#d81d90',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
  },
  text: {
    color: '#69475a',
    fontSize: 16,
    lineHeight: 24,
    maxWidth: 320,
    textAlign: 'center',
  },
});
