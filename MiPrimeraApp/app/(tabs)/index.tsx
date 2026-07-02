import { Link, router } from 'expo-router';
import { useState } from 'react';
import { Button, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const [activo, setActivo] = useState(false);
  const [nombre, setNombre] = useState('');
  const [password, setPassword] = useState('');
  const [nombreIngresado, setNombreIngresado] = useState('');


  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'salmon', width: '100%', height: '100%'}}>

      <Text style={{ color: '#000', fontWeight: 'bold', margin: 20, fontSize: 50 }}>Hola soy Wanda</Text>
      <Link href="/(tabs)/saludo" style={{ color: 'fuchsia', margin: 20 }}>Ir a otra pantalla</Link>

      <View style={{ width: '100%', flexDirection: 'row', marginTop: 20, justifyContent: 'center' }}>
        <View style={styles.card1}>
          <Card titulo="Mi primer card">
            <Text>Esta es la descripción de mi primer card</Text>
            <Image source={{ uri: 'https://images.pexels.com/photos/37037572/pexels-photo-37037572.jpeg' }} style={styles.imagen} />
            <Button title="Ver más" onPress={() => alert('Messi')} />
          </Card>
        </View>
        <View style={styles.card2}>
          <Card titulo="Mi segundo card">
            <Text>Esta es la descripción de mi segundo card</Text>
            <Image source={{ uri: 'https://images.pexels.com/photos/38046540/pexels-photo-38046540.jpeg' }} style={styles.imagen} />
            <Button title="Ver más" onPress={() => alert('Ronaldo')} />
          </Card>
        </View>
      </View>
      

      <View style={styles.cajacontenedordecajitas}>
        <View style={styles.cajita1}>
            <Text>
                Esta es la cajita 1
            </Text>
        </View>
        <Pressable onPress={() => setActivo(!activo)}>
            <View style={[styles.cajita2, activo ? styles.colorVerde : styles.cajita2]}>
              <Text>
                Esta es la cajita 2
            </Text>
            </View>
        </Pressable>
        <View style={styles.cajita3}>
            <Text>
                Esta es la cajita 3
            </Text>
        </View>
      </View>


      <View style={styles.formulariotp4}>
        <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>
          Ingrese su nombre: 
        </Text>
          <TextInput placeholder="Nombre..." value={nombre} onChangeText={setNombre} />

        <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>
          Ingrese su contraseña: 
        </Text>
          <TextInput placeholder="Contraseña" value={password} onChangeText={setPassword} secureTextEntry={true} style={{ marginTop: 10 }} />

          {nombre !== '' && password !== '' && (
            <Text style={{fontWeight: 'bold', fontSize: 18, margin: 10}}>¡Hola, {nombre}!</Text>
            )}

      </View>

      <View style={{flex:1, padding:30}}>
        <View style={{backgroundColor: 'white', padding: 30, borderRadius: 10, width: '20%'}}>

          <Text style={{fontWeight: 'bold'}}>Nombre: </Text>
          <TextInput placeholder='Escribe tu nombre...' value={nombreIngresado} onChangeText={setNombreIngresado}/>

            {nombreIngresado !== '' &&(
              <TouchableOpacity onPress={() => { router.push ({pathname: '/saludo', params: { nombre: nombreIngresado } });}} style={{backgroundColor: 'fuchsia', marginTop: 20, padding: 20, width: 90}}>
               Enviar
              </TouchableOpacity>
            )}
            {nombreIngresado == '' &&(
              <Pressable onPress={()=> alert("Ingrese Los datos!")}  style={{backgroundColor: 'gray', marginTop: 20, padding: 20, width: 90}}>Entrar</Pressable>
            )}
            
          
        </View>
      </View>
    </ScrollView>
  );
}

function Card({ titulo, children }) {
  return(
    <View style={{ padding: 20, margin: 20, width: '50%', alignItems: 'flex-start' }}>

      <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 18, marginBottom: 10 }}>
        {titulo}
      </Text>
      <View style={{alignItems: 'flex-start',}}>
        {children}
      </View>

    </View>
  );
}



const styles = StyleSheet.create({
  imagen: {
    width: 200,
    height: 200,
    marginBottom: 20,
    marginTop: 20,
  },

  card1: {
    backgroundColor: 'pink',
    padding: 10,
    borderRadius: 10,
    margin: 20,
  },
  card2: {
    backgroundColor: 'lightblue',
    padding: 10,
    margin: 20,
    borderRadius: 10,
  },

  cajacontenedordecajitas: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    padding: 20,
    marginTop: 40,
    justifyContent: 'space-evenly',
  },
  cajita1: {
    backgroundColor: 'lightblue',
    padding: 20,
    },

  cajita2: {
    backgroundColor: 'pink',
    padding: 20,
  },
  colorVerde: {
    backgroundColor: 'lightgreen',
  },

  cajita3: {
    backgroundColor: 'lightyellow',
    padding: 20,
  },

  formulariotp4: {
    backgroundColor: 'pink',
    width: '100%',
    padding: 20,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },

});
