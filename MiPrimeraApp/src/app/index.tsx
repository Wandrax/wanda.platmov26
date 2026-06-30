import { Link } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <View style={styles.hero}>
        <Image source={require('@/assets/images/icon.png')} style={styles.logo} />
        <Text style={styles.kicker}>MiPrimeraApp</Text>
        <Text style={styles.title}>Wanda</Text>
        <Text style={styles.subtitle}>
          Primera practica con React Native, Expo Router y pantallas en app/.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Pantallas</Text>
        <Link href="/saludo" style={styles.button}>
          Ir a saludo
        </Link>
        <Link href="/perfil" style={styles.button}>
          Ir a perfil
        </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff0f6',
  },
  content: {
    padding: 20,
    paddingBottom: 32,
  },
  hero: {
    alignItems: 'center',
    backgroundColor: '#f783ac',
    borderRadius: 8,
    padding: 22,
  },
  logo: {
    width: 86,
    height: 86,
    borderRadius: 8,
    marginBottom: 14,
  },
  kicker: {
    color: '#6f1d46',
    fontSize: 13,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  title: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: '800',
    marginTop: 6,
  },
  subtitle: {
    color: '#ffffff',
    fontSize: 16,
    lineHeight: 22,
    marginTop: 8,
    textAlign: 'center',
  },
  section: {
    gap: 10,
    marginTop: 22,
  },
  sectionTitle: {
    color: '#9d174d',
    fontSize: 20,
    fontWeight: '800',
  },
  button: {
    backgroundColor: '#d63384',
    borderRadius: 8,
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '800',
    overflow: 'hidden',
    paddingHorizontal: 14,
    paddingVertical: 12,
    textAlign: 'center',
  },
});
