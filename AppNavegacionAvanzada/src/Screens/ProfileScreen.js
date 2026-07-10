import React, { useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { useAuth } from '../Context/AuthContext';
import { useTheme } from '../Context/ThemeContext';

export default function ProfileScreen() {
  const { usuario, logout, actualizarNombre } = useAuth();
  const { colors } = useTheme();
  const [nombreEditado, setNombreEditado] = useState(usuario.nombre);

  const guardarNombre = () => {
    if (!nombreEditado.trim()) {
      Alert.alert('Falta el nombre', 'Ponga un nombre');
      return;
    }

    actualizarNombre(nombreEditado);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.avatar, { backgroundColor: colors.accentSoft }]}>
        <Ionicons name="person" size={46} color={colors.accent} />
      </View>
      <Text style={[styles.title, { color: colors.text }]}>Perfil</Text>
      <Text style={[styles.name, { color: colors.accent }]}>
        Usuario: {usuario.nombre}
      </Text>
      <Text style={[styles.text, { color: colors.textMuted }]}>
        Podes modificar tu nombre y guardarlo en el estado global de AuthContext.
      </Text>

      <TextInput
        autoCapitalize="words"
        onChangeText={setNombreEditado}
        placeholder="Nuevo nombre"
        placeholderTextColor={colors.textSubtle}
        returnKeyType="done"
        value={nombreEditado}
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
        onPress={guardarNombre}
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: colors.accent },
          pressed && styles.buttonPressed,
        ]}
      >
        <Ionicons name="save-outline" size={20} color="#fff" />
        <Text style={styles.buttonText}>Guardar nombre</Text>
      </Pressable>

      <Pressable
        accessibilityRole="button"
        onPress={logout}
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: colors.primaryDark },
          pressed && styles.buttonPressed,
        ]}
      >
        <Ionicons name="log-out-outline" size={20} color="#fff" />
        <Text style={styles.buttonText}>Cerrar sesion</Text>
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
  avatar: {
    alignItems: 'center',
    borderRadius: 48,
    height: 96,
    justifyContent: 'center',
    marginBottom: 18,
    width: 96,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
    maxWidth: 340,
    textAlign: 'center',
  },
  input: {
    borderRadius: 8,
    borderWidth: 1,
    fontSize: 16,
    marginBottom: 12,
    maxWidth: 340,
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
    marginTop: 10,
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
