import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function SaludoScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.panel}>
        <Text style={styles.kicker}>Clase 01 V2</Text>
        <Text style={styles.titulo}>Hola desde otra pantalla</Text>
        <Text style={styles.texto}>
          Esta pantalla resuelve la navegacion hacia saludo.
        </Text>
        <Pressable
          accessibilityRole="button"
          onPress={() => navigation.navigate('Home')}
          style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
        >
          <Text style={styles.buttonText}>Volver al inicio</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
  titulo: {
    color: '#9d174d',
    fontSize: 26,
    fontWeight: '800',
  },
  texto: {
    color: '#4a2635',
    fontSize: 16,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#d63384',
    borderRadius: 8,
    marginTop: 8,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  buttonPressed: {
    opacity: 0.75,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '800',
  },
});
