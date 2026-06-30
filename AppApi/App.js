import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
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
        setError('Error al obtener datos.');
        setLoading(false);
      });
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <FlatList
        contentContainerStyle={styles.content}
        data={loading ? [] : usuarios}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.kicker}>Practica 05</Text>
            <Text style={styles.title}>AppApi</Text>
            <Text style={styles.subtitle}>
              Usuarios cargados desde JSONPlaceholder.
            </Text>
            {loading ? (
              <View style={styles.loadingBox}>
                <ActivityIndicator size="large" color="#d63384" />
                <Text style={styles.text}>Cargando informacion...</Text>
              </View>
            ) : null}
            {error !== '' ? <Text style={styles.error}>{error}</Text> : null}
          </View>
        }
        ListEmptyComponent={
          !loading && error === '' ? (
            <Text style={styles.empty}>No hay usuarios para mostrar.</Text>
          ) : null
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.userName}>{item.name}</Text>
            <Text style={styles.text}>{item.email}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff0f6',
  },
  content: {
    padding: 18,
    paddingBottom: 32,
  },
  header: {
    backgroundColor: '#f783ac',
    borderRadius: 8,
    marginBottom: 16,
    padding: 20,
  },
  kicker: {
    color: '#6f1d46',
    fontSize: 13,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  title: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: '800',
    marginTop: 6,
  },
  subtitle: {
    color: '#ffffff',
    fontSize: 16,
    marginTop: 8,
  },
  loadingBox: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    gap: 8,
    marginTop: 16,
    padding: 14,
  },
  card: {
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
  text: {
    color: '#4a2635',
    fontSize: 15,
  },
  empty: {
    color: '#4a2635',
    textAlign: 'center',
  },
  error: {
    color: '#b00020',
    fontWeight: '800',
    marginTop: 14,
  },
});
