import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import PeliculaScreen from '../screens/PeliculaScreen';
import ContactoScreen from '../screens/ContactoScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator initialRouteName="Inicio">
      <Stack.Screen name="Inicio" component={HomeScreen} />
      <Stack.Screen name="Pelicula" component={PeliculaScreen} />
      <Stack.Screen name="Contacto" component={ContactoScreen} />
    </Stack.Navigator>
  );
}