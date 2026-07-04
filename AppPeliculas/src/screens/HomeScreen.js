import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';

export default function HomeScreen({ navigation }) {
  const pelicula = {
    Nombre: 'Interestelar',
    Anio: 2014,
    Genero: 'Ciencia Ficcion',
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style= {{width: '100%', backgroundColor: 'pink', alignItems: 'center', padding: '5%'}}>
        <Text style={styles.titulo}>Bienvenido a App Películas</Text>
      
        <Pressable style={styles.boton} onPress={() => navigation.navigate('Pelicula', { datoPeli: pelicula })}>
          <Text style={styles.textoBoton}>Ir a Película</Text>
        </Pressable>

        <Pressable style={styles.boton} onPress={() => navigation.navigate('Contacto')}>
          <Text style={styles.textoBoton}>Ir a Contacto</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: 'white',
  },
  titulo: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 20 
  },
  boton: { 
    backgroundColor: 'salmon', 
    padding: 12, 
    borderRadius: 8, 
    marginVertical: 10, 
    width: '20%', 
    alignItems: 'center' 
  },
  textoBoton: { 
    color: '#fff', 
    fontSize: 16,
    fontWeight: '600'
  },
});
