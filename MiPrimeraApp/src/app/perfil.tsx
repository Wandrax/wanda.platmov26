import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function PerfilScreen() {
  return (
    <View style={styles.screen}>
      <View style={styles.panel}>
        <Text style={styles.kicker}>Perfil</Text>
        <Text style={styles.title}>Wanda</Text>
        <Text style={styles.text}>Edad: 25</Text>
        <Text style={styles.text}>Curso: Plataformas Moviles</Text>
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
    gap: 10,
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
    fontSize: 28,
    fontWeight: '800',
  },
  text: {
    color: '#4a2635',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#d63384',
    borderRadius: 8,
    color: '#ffffff',
    fontWeight: '800',
    marginTop: 8,
    overflow: 'hidden',
    paddingHorizontal: 14,
    paddingVertical: 12,
    textAlign: 'center',
  },
});
