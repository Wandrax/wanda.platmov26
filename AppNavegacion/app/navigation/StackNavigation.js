import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AcercaDeScreen from '../screens/AcercaDeScreen';
import DetalleScreen from '../screens/DetalleScreen';
import InicioScreen from '../screens/InicioScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Inicio"
      screenOptions={{
        headerStyle: { backgroundColor: '#d63384' },
        headerTintColor: '#ffffff',
        headerTitleStyle: { fontWeight: '800' },
        contentStyle: { backgroundColor: '#fff0f6' },
      }}
    >
      <Stack.Screen
        name="Inicio"
        component={InicioScreen}
        options={{ title: 'Inicio' }}
      />
      <Stack.Screen
        name="Detalle"
        component={DetalleScreen}
        options={{ title: 'Informacion del Usuario' }}
      />
      <Stack.Screen
        name="AcercaDe"
        component={AcercaDeScreen}
        options={{ title: 'Acerca de' }}
      />
    </Stack.Navigator>
  );
}
