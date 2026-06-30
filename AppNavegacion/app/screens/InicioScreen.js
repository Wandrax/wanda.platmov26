import { Pressable, StyleSheet, Text, View } from 'react-native';

const usuario = {
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

export default function InicioScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.panel}>
        <Text style={styles.kicker}>Practica 06</Text>
        <Text style={styles.title}>Pantalla de Inicio</Text>
        <Text style={styles.text}>
          StackNavigator con pantallas, parametros y botones de navegacion.
        </Text>
        <PinkButton
          title="Ir a Detalle"
          onPress={() => navigation.navigate('Detalle', { datos: usuario })}
        />
        <PinkButton
          title="Ir a Acerca De"
          onPress={() => navigation.navigate('AcercaDe')}
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
    fontSize: 28,
    fontWeight: '800',
  },
  text: {
    color: '#4a2635',
    fontSize: 16,
    lineHeight: 22,
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
