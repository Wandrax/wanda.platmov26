import React, { useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function SetingScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [compactMode, setCompactMode] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.iconCircle}>
        <Ionicons name="settings" size={42} color="#ed3a8e" />
      </View>
      <Text style={styles.title}>Configuración</Text>

      <View style={styles.option}>
        <View style={styles.optionText}>
          <Text style={styles.optionTitle}>Notificaciones</Text>
          <Text style={styles.optionDescription}>Avisos de la aplicación</Text>
        </View>
        <Switch
          value={notificationsEnabled}
          onValueChange={setNotificationsEnabled}
          trackColor={{ false: '#e1cbd4', true: '#fdb5df' }}
          thumbColor={notificationsEnabled ? '#ed3a61' : '#fcf8fa'}
        />
      </View>

      <View style={styles.option}>
        <View style={styles.optionText}>
          <Text style={styles.optionTitle}>Modo compacto</Text>
          <Text style={styles.optionDescription}>Vista más reducida</Text>
        </View>
        <Switch
          value={compactMode}
          onValueChange={setCompactMode}
          trackColor={{ false: '#e1cbd6', true: '#fdb5d3' }}
          thumbColor={compactMode ? '#ed3a8e' : '#fcf8fa'}
        />
      </View>
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
    backgroundColor: '#ede9fe',
    borderRadius: 40,
    height: 80,
    justifyContent: 'center',
    marginBottom: 20,
    width: 80,
  },
  title: {
    color: '#2a0f20',
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 22,
  },
  option: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderColor: '#e2e8f0',
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
    color: '#2a0f22',
    fontSize: 16,
    fontWeight: '700',
  },
  optionDescription: {
    color: '#8b647f',
    fontSize: 13,
    marginTop: 3,
  },
});
