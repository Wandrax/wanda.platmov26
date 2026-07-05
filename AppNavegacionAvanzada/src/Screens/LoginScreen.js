import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function LoginScreen({ onLogin }) {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Ionicons name="lock-closed" size={42} color="#760f48" />
      </View>
      <Text style={styles.title}>App Navegación Avanzada</Text>
      <Text style={styles.subtitle}>
        Iniciá sesión para habilitar las rutas protegidas.
      </Text>
      <Pressable
        accessibilityRole="button"
        onPress={onLogin}
        style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
      >
        <Ionicons name="log-in-outline" size={20} color="#fff" />
        <Text style={styles.buttonText}>Ingresar</Text>
      </Pressable>
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
  logo: {
    alignItems: 'center',
    backgroundColor: '#fbccef',
    borderRadius: 44,
    height: 88,
    justifyContent: 'center',
    marginBottom: 22,
    width: 88,
  },
  title: {
    color: '#2a0f1a',
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    color: '#69475b',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 28,
    maxWidth: 320,
    textAlign: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#760f4b',
    borderRadius: 8,
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
    minHeight: 48,
    paddingHorizontal: 24,
  },
  buttonPressed: {
    opacity: 0.8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '800',
  },
});
