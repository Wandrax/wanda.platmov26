import { Pressable, StyleSheet, Text, View } from 'react-native';

const peliculaFallback = {
  titulo: 'Interstellar',
  anio: 2014,
  genero: 'Ciencia ficcion',
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

export default function PeliculaScreen({ route, navigation }) {
  const { pelicula = peliculaFallback } = route.params ?? {};

  return (
    <View style={styles.container}>
      <View style={styles.panel}>
        <Text style={styles.kicker}>Detalle de Pelicula</Text>
        <Text style={styles.titulo}>{pelicula.titulo}</Text>
        <Text style={styles.texto}>Anio: {pelicula.anio}</Text>
        <Text style={styles.texto}>Genero: {pelicula.genero}</Text>
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
