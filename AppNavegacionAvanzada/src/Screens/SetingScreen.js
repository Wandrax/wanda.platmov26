import React, { useState } from 'react';
import { Pressable, StyleSheet, Switch, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { useTheme } from '../Context/ThemeContext';

export default function SetingScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [compactMode, setCompactMode] = useState(false);
  const { colors, tema, alternarTema } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.iconCircle, { backgroundColor: colors.surfaceMuted }]}>
        <Ionicons name="settings" size={42} color={colors.primary} />
      </View>
      <Text style={[styles.title, { color: colors.text }]}>Configuracion</Text>

      <View style={[styles.option, { backgroundColor: colors.surface, borderColor: colors.border }]}>
        <View style={styles.optionText}>
          <Text style={[styles.optionTitle, { color: colors.text }]}>Notificaciones</Text>
          <Text style={[styles.optionDescription, { color: colors.textSubtle }]}>
            Avisos de la aplicacion
          </Text>
        </View>
        <Switch
          value={notificationsEnabled}
          onValueChange={setNotificationsEnabled}
          trackColor={{ false: colors.border, true: colors.surfaceMuted }}
          thumbColor={notificationsEnabled ? colors.primary : colors.textSubtle}
        />
      </View>

      <View style={[styles.option, { backgroundColor: colors.surface, borderColor: colors.border }]}>
        <View style={styles.optionText}>
          <Text style={[styles.optionTitle, { color: colors.text }]}>Modo compacto</Text>
          <Text style={[styles.optionDescription, { color: colors.textSubtle }]}>
            Vista mas reducida
          </Text>
        </View>
        <Switch
          value={compactMode}
          onValueChange={setCompactMode}
          trackColor={{ false: colors.border, true: colors.surfaceMuted }}
          thumbColor={compactMode ? colors.primary : colors.textSubtle}
        />
      </View>

      <Pressable
        accessibilityRole="button"
        onPress={alternarTema}
        style={({ pressed }) => [
          styles.themeButton,
          { backgroundColor: colors.primaryDark },
          pressed && styles.buttonPressed,
        ]}
      >
        <Ionicons name={tema === 'claro' ? 'moon-outline' : 'sunny-outline'} size={20} color="#fff" />
        <Text style={styles.themeButtonText}>Alternar tema</Text>
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
    marginBottom: 22,
  },
  option: {
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    maxWidth: 360,
    padding: 16,
    width: '100%',
  },
  optionText: {
    flex: 1,
    paddingRight: 12,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: '700',
  },
  optionDescription: {
    fontSize: 13,
    marginTop: 3,
  },
  themeButton: {
    alignItems: 'center',
    borderRadius: 8,
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
    marginTop: 10,
    minHeight: 48,
    paddingHorizontal: 20,
  },
  themeButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '800',
  },
  buttonPressed: {
    opacity: 0.8,
  },
});
