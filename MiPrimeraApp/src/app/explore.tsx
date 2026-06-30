import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function ExploreScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <View style={styles.panel}>
        <Text style={styles.kicker}>React Native</Text>
        <Text style={styles.title}>Componentes nativos</Text>
        <Text style={styles.text}>View agrupa contenido.</Text>
        <Text style={styles.text}>Text muestra textos.</Text>
        <Text style={styles.text}>StyleSheet organiza estilos.</Text>
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
});
