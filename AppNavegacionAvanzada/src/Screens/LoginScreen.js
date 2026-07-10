import React, { useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { useAuth } from '../Context/AuthContext';
import { useTheme } from '../Context/ThemeContext';

export default function LoginScreen() {
  const { login } = useAuth();
  const { colors, tema, alternarTema } = useTheme();
  const [nombre, setNombre] = useState('');

  const handleLogin = () => {
    if (!nombre.trim()) {
      Alert.alert('Falta el nombre', 'Ponga un nombre');
      return;
    }

    login(nombre);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.logo, { backgroundColor: colors.surfaceMuted }]}>
        <Ionicons name="lock-closed" size={42} color={colors.primary} />
      </View>
      <Text style={[styles.title, { color: colors.text }]}>AppContext</Text>
      <Text style={[styles.subtitle, { color: colors.textMuted }]}>
        Inicia sesion para ver las rutas protegidas desde AuthContext.
      </Text>

      <TextInput
        autoCapitalize="words"
        onChangeText={setNombre}
        placeholder="Escribi tu nombre"
        placeholderTextColor={colors.textSubtle}
        returnKeyType="done"
        value={nombre}
        style={[
          styles.input,
          {
            backgroundColor: colors.surface,
            borderColor: colors.border,
            color: colors.text,
          },
        ]}
      />

      <Pressable
        accessibilityRole="button"
        onPress={handleLogin}
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: colors.primaryDark },
          pressed && styles.buttonPressed,
        ]}
      >
        <Ionicons name="log-in-outline" size={20} color="#fff" />
        <Text style={styles.buttonText}>Ingresar</Text>
      </Pressable>

      <Pressable
        accessibilityRole="button"
        onPress={alternarTema}
        style={({ pressed }) => [
          styles.secondaryButton,
          { borderColor: colors.border, backgroundColor: colors.surface },
          pressed && styles.buttonPressed,
        ]}
      >
        <Ionicons name={tema === 'claro' ? 'moon-outline' : 'sunny-outline'} size={20} color={colors.primary} />
        <Text style={[styles.secondaryButtonText, { color: colors.primary }]}>
          Tema {tema}
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
  logo: {
    alignItems: 'center',
    borderRadius: 44,
    height: 88,
    justifyContent: 'center',
    marginBottom: 22,
    width: 88,
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 22,
    maxWidth: 320,
    textAlign: 'center',
  },
  input: {
    borderRadius: 8,
    borderWidth: 1,
    fontSize: 16,
    marginBottom: 14,
    maxWidth: 320,
    minHeight: 48,
    paddingHorizontal: 16,
    textAlign: 'center',
    width: '100%',
  },
  button: {
    alignItems: 'center',
    borderRadius: 8,
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
    marginBottom: 12,
    minHeight: 48,
    paddingHorizontal: 24,
  },
  secondaryButton: {
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
    minHeight: 44,
    paddingHorizontal: 18,
  },
  buttonPressed: {
    opacity: 0.8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '800',
  },
  secondaryButtonText: {
    fontSize: 15,
    fontWeight: '800',
  },
});
