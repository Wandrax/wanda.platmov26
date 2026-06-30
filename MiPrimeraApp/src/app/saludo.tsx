import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function SaludoScreen() {
  return (
    <View style={styles.screen}>
      <View style={styles.panel}>
        <Text style={styles.kicker}>Saludo</Text>
        <Text style={styles.title}>Hola desde otra pantalla</Text>
        <Link href="/" style={styles.button}>
          Volver al inicio
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff0f6',
  },
  panel: {
    backgroundColor: '#ffffff',
    borderColor: '#f8a5c2',
    borderRadius: 8,
    borderWidth: 1,
    gap: 12,
    padding: 18,
  },
  kicker: {
    color: '#d63384',
    fontSize: 13,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  title: {
    color: '#9d174d',
    fontSize: 26,
    fontWeight: '800',
  },
  button: {
    backgroundColor: '#d63384',
    borderRadius: 8,
    color: '#ffffff',
    fontWeight: '800',
    overflow: 'hidden',
    paddingHorizontal: 14,
    paddingVertical: 12,
    textAlign: 'center',
  },
});
