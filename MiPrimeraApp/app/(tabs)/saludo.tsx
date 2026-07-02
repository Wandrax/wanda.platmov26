import { useLocalSearchParams, useRouter } from 'expo-router';
import { Text, View, Button, StyleSheet } from 'react-native';

export default function Saludo() {
    const { nombre } = useLocalSearchParams();
    const router = useRouter();
  return (
    <View style={{ flex: 1, backgroundColor: 'salmon' }}>
      <Text style={{ color: '#000', fontWeight: 'bold' }}>Hola desde otra pantalla</Text>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      
            <Text style={{ fontSize: 20, marginBottom: 20 }}>
        El usuario ingresado es: {nombre}
      </Text>

      <Button title="Volver atrás" onPress={() => router.back()} />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({

});
