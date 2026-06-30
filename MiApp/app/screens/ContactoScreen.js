import { Pressable, StyleSheet, Text, View } from 'react-native';

function PinkButton({ title, onPress }) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}

export default function ContactoScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.panel}>
        <Text style={styles.kicker}>Contacto</Text>
        <Text style={styles.titulo}>AppPeliculas</Text>
        <Text style={styles.texto}>Email: contacto@appeliculas.com</Text>
        <Text style={styles.texto}>Telefono: 11 5555 1234</Text>
        <PinkButton
          title="Volver al inicio"
          onPress={() => navigation.navigate('Home')}
        />
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
    fontSize: 28,
    fontWeight: '800',
  },
  texto: {
    color: '#4a2635',
    fontSize: 17,
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
