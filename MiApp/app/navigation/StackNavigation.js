import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ContactoScreen from '../screens/ContactoScreen';
import HomeScreen from '../screens/HomeScreen';
import PeliculaScreen from '../screens/PeliculaScreen';
import PerfilScreen from '../screens/PerfilScreen';
import SaludoScreen from '../screens/SaludoScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: '#d63384' },
        headerTintColor: '#ffffff',
        headerTitleStyle: { fontWeight: '800' },
        contentStyle: { backgroundColor: '#fff0f6' },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'MiApp - Practicas' }}
      />
      <Stack.Screen
        name="Pelicula"
        component={PeliculaScreen}
        options={{ title: 'Detalle de Pelicula' }}
      />
      <Stack.Screen
        name="Contacto"
        component={ContactoScreen}
        options={{ title: 'Contacto' }}
      />
      <Stack.Screen
        name="Saludo"
        component={SaludoScreen}
        options={{ title: 'Saludo' }}
      />
      <Stack.Screen
        name="Perfil"
        component={PerfilScreen}
        options={{ title: 'Perfil' }}
      />
    </Stack.Navigator>
  );
}
