import { Pressable, StyleSheet, Text, View } from 'react-native';

const datosFallback = {
  nombre: 'Yesica',
  edad: 25,
};

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

export default function DetalleScreen({ route, navigation }) {
  const { datos = datosFallback } = route.params ?? {};

  return (
    <View style={styles.container}>
      <View style={styles.panel}>
        <Text style={styles.kicker}>Parametro recibido</Text>
        <Text style={styles.title}>Nombre: {datos.nombre}</Text>
        <Text style={styles.text}>Edad: {datos.edad}</Text>
        <PinkButton title="Volver" onPress={() => navigation.goBack()} />
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
  text: {
    color: '#4a2635',
    fontSize: 18,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#d63384',
    borderRadius: 8,
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
