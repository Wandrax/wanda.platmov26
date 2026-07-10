import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { useTheme } from '../Context/ThemeContext';

export default function AboutScreen() {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.iconCircle, { backgroundColor: colors.warningSoft }]}>
        <Ionicons name="information-circle" size={46} color={colors.warning} />
      </View>
      <Text style={[styles.title, { color: colors.text }]}>Acerca de</Text>
      <Text style={[styles.text, { color: colors.textMuted }]}>
        Practica 08: Context API para tema global y autenticacion global,
        integrada con la navegacion de la clase anterior.
      </Text>
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
    borderRadius: 44,
    height: 88,
    justifyContent: 'center',
    marginBottom: 20,
    width: 88,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    maxWidth: 340,
    textAlign: 'center',
  },
});
