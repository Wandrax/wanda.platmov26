import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const peliculas = [
  {
    titulo: 'Interstellar',
    anio: 2014,
    genero: 'Ciencia ficcion',
  },
  {
    titulo: 'Barbie',
    anio: 2023,
    genero: 'Comedia',
  },
  {
    titulo: 'Intensamente',
    anio: 2015,
    genero: 'Animacion',
  },
];

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

function Section({ title, children }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
}

function Card({ titulo, children, imagen, boton }) {
  return (
    <View style={styles.card}>
      <Image source={imagen} style={styles.imagen} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{titulo}</Text>
        <Text style={styles.text}>{children}</Text>
        <PinkButton title={boton} onPress={() => Alert.alert(titulo)} />
      </View>
    </View>
  );
}

export default function HomeScreen({ navigation }) {
  const [activo, setActivo] = useState(false);
  const [contador, setContador] = useState(0);
  const [texto, setTexto] = useState('');
  const [formulario, setFormulario] = useState({ nombre: '', password: '' });
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => {
        setUsuarios(json);
        setLoading(false);
      })
      .catch(() => {
        setError('No se pudieron cargar los usuarios.');
        setLoading(false);
      });
  }, []);

  const header = (
    <View>
      <View style={styles.hero}>
        <Text style={styles.kicker}>Plataformas Moviles</Text>
        <Text style={styles.title}>Hola, Wanda</Text>
        <Text style={styles.heroText}>
          Practicas integradas de React Native con Expo.
        </Text>
      </View>

      <Section title="Clase 01 - MiPrimeraApp">
        <Text style={styles.text}>Texto principal modificado con tu nombre.</Text>
        <View style={styles.buttonRow}>
          <PinkButton
            title="Ir a saludo"
            onPress={() => navigation.navigate('Saludo')}
          />
          <PinkButton
            title="Ver perfil"
            onPress={() => navigation.navigate('Perfil')}
          />
        </View>
      </Section>

      <Section title="Clase 02 - Card, props y children">
        <Card
          titulo="Tarjeta de React Native"
          imagen={require('../../assets/icon.png')}
          boton="Ver React"
        >
          Esta tarjeta usa props, children, Image, Text y boton.
        </Card>
        <Card
          titulo="Tarjeta de Expo"
          imagen={require('../../assets/splash-icon.png')}
          boton="Ver Expo"
        >
          Segunda tarjeta con otra imagen y descripcion.
        </Card>
        <Card
          titulo="Tarjeta de App"
          imagen={require('../../assets/android-icon-foreground.png')}
          boton="Ver App"
        >
          Tercera tarjeta diferente para completar la practica.
        </Card>
      </Section>

      <Section title="Clase 03 - Flexbox y estilos condicionales">
        <View style={styles.boxRow}>
          <View style={[styles.box, styles.boxRose]}>
            <Text style={styles.boxText}>1</Text>
          </View>
          <Pressable
            onPress={() => setActivo((valor) => !valor)}
            style={[styles.box, activo ? styles.boxActive : styles.boxInactive]}
          >
            <Text style={styles.boxText}>Tocar</Text>
          </Pressable>
          <View style={[styles.box, styles.boxSoft]}>
            <Text style={styles.boxText}>3</Text>
          </View>
        </View>
      </Section>

      <Section title="useState - contador e input">
        <Text style={styles.label}>Valor: {contador}</Text>
        <PinkButton
          title="Sumar"
          onPress={() => setContador((valor) => valor + 1)}
        />
        <TextInput
          style={styles.input}
          placeholder="Escribi algo"
          placeholderTextColor="#9b5a73"
          value={texto}
          onChangeText={setTexto}
        />
        <Text style={styles.text}>Escribiste: {texto}</Text>
      </Section>

      <Section title="Clase 04 - Formulario">
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          placeholderTextColor="#9b5a73"
          value={formulario.nombre}
          onChangeText={(valor) =>
            setFormulario({ ...formulario, nombre: valor })
          }
        />
        <TextInput
          style={styles.input}
          placeholder="Contrasena"
          placeholderTextColor="#9b5a73"
          secureTextEntry
          value={formulario.password}
          onChangeText={(valor) =>
            setFormulario({ ...formulario, password: valor })
          }
        />
        {formulario.nombre !== '' && formulario.password !== '' ? (
          <Text style={styles.welcome}>Hola, {formulario.nombre}</Text>
        ) : null}
      </Section>

      <Section title="AppPeliculas - Navegacion con parametros">
        <Text style={styles.text}>
          Cada boton envia titulo, anio y genero a la pantalla Pelicula.
        </Text>
        <View style={styles.buttonRow}>
          {peliculas.map((pelicula) => (
            <PinkButton
              key={pelicula.titulo}
              title={pelicula.titulo}
              onPress={() => navigation.navigate('Pelicula', { pelicula })}
            />
          ))}
          <PinkButton
            title="Contacto"
            onPress={() => navigation.navigate('Contacto')}
          />
        </View>
      </Section>

      <Section title="Clase 05 - API y FlatList">
        <Text style={styles.text}>Usuarios cargados: {usuarios.length}</Text>
        {loading ? (
          <View style={styles.loadingBox}>
            <ActivityIndicator size="large" color="#d63384" />
            <Text style={styles.text}>Cargando usuarios...</Text>
          </View>
        ) : null}
        {error !== '' ? <Text style={styles.error}>{error}</Text> : null}
      </Section>
    </View>
  );

  return (
    <FlatList
      style={styles.screen}
      contentContainerStyle={styles.content}
      data={loading ? [] : usuarios}
      keyExtractor={(item) => item.id.toString()}
      ListHeaderComponent={header}
      ListEmptyComponent={
        !loading && error === '' ? (
          <Text style={styles.emptyText}>No hay usuarios para mostrar.</Text>
        ) : null
      }
      renderItem={({ item }) => (
        <View style={styles.userCard}>
          <Text style={styles.userName}>{item.name}</Text>
          <Text style={styles.text}>{item.email}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff0f6',
  },
  content: {
    padding: 18,
    paddingBottom: 32,
  },
  hero: {
    backgroundColor: '#f783ac',
    borderRadius: 8,
    padding: 20,
    marginBottom: 18,
  },
  kicker: {
    color: '#6f1d46',
    fontSize: 13,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  title: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: '800',
    marginTop: 6,
  },
  heroText: {
    color: '#ffffff',
    fontSize: 16,
    marginTop: 8,
  },
  section: {
    marginBottom: 22,
  },
  sectionTitle: {
    color: '#9d174d',
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 10,
  },
  text: {
    color: '#4a2635',
    fontSize: 15,
    lineHeight: 21,
  },
  label: {
    color: '#4a2635',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10,
  },
  buttonRow: {
    gap: 10,
    marginTop: 10,
  },
  button: {
    backgroundColor: '#d63384',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 12,
    alignItems: 'center',
  },
  buttonPressed: {
    opacity: 0.75,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '700',
  },
  card: {
    backgroundColor: '#ffffff',
    borderColor: '#f8a5c2',
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 12,
    marginBottom: 10,
    padding: 12,
  },
  cardContent: {
    flex: 1,
    gap: 8,
  },
  cardTitle: {
    color: '#9d174d',
    fontSize: 16,
    fontWeight: '800',
  },
  imagen: {
    width: 64,
    height: 64,
    borderRadius: 8,
  },
  boxRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  box: {
    width: 88,
    height: 88,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  boxRose: {
    backgroundColor: '#ff85a1',
  },
  boxInactive: {
    backgroundColor: '#f06595',
  },
  boxActive: {
    backgroundColor: '#c2255c',
  },
  boxSoft: {
    backgroundColor: '#fcc2d7',
  },
  boxText: {
    color: '#ffffff',
    fontWeight: '800',
  },
  input: {
    backgroundColor: '#ffffff',
    borderColor: '#f8a5c2',
    borderRadius: 8,
    borderWidth: 1,
    color: '#4a2635',
    marginTop: 10,
    padding: 12,
  },
  welcome: {
    color: '#9d174d',
    fontSize: 16,
    fontWeight: '800',
    marginTop: 10,
  },
  loadingBox: {
    alignItems: 'center',
    gap: 8,
    paddingVertical: 12,
  },
  error: {
    color: '#b00020',
    fontWeight: '700',
    marginTop: 8,
  },
  emptyText: {
    color: '#4a2635',
    textAlign: 'center',
  },
  userCard: {
    backgroundColor: '#ffffff',
    borderColor: '#f8a5c2',
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 10,
    padding: 12,
  },
  userName: {
    color: '#9d174d',
    fontSize: 16,
    fontWeight: '800',
    marginBottom: 4,
  },
});
