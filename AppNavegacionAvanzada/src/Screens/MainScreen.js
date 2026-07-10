import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { useAuth } from '../Context/AuthContext';
import { useTheme } from '../Context/ThemeContext';

export default function MainScreen() {
  const { usuario } = useAuth();
  const { colors, tema, alternarTema } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.iconCircle, { backgroundColor: colors.surfaceMuted }]}>
        <Ionicons name="home" size={42} color={colors.primary} />
      </View>
      <Text style={[styles.title, { color: colors.text }]}>Inicio</Text>
      <Text style={[styles.greeting, { color: colors.primaryDark }]}>
        Bienvenida, {usuario.nombre}
      </Text>
      <Text style={[styles.text, { color: colors.textMuted }]}>
        Esta pantalla lee el usuario desde AuthContext y el modo visual desde
        TemaContext, sin pasar props entre componentes.
      </Text>

      <Pressable
        accessibilityRole="button"
        onPress={alternarTema}
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: colors.primaryDark },
          pressed && styles.buttonPressed,
        ]}
      >
        <Ionicons name={tema === 'claro' ? 'moon-outline' : 'sunny-outline'} size={20} color="#fff" />
        <Text style={styles.buttonText}>
          Cambiar a tema {tema === 'claro' ? 'oscuro' : 'claro'}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  iconCircle: {
    alignItems: 'center',
    borderRadius: 40,
    height: 80,
    justifyContent: 'center',
    marginBottom: 20,
    width: 80,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 8,
  },
  greeting: {
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 12,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 22,
    maxWidth: 340,
    textAlign: 'center',
  },
  button: {
    alignItems: 'center',
    borderRadius: 8,
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
    minHeight: 48,
    paddingHorizontal: 20,
  },
  buttonPressed: {
    opacity: 0.8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '800',
  },
});
