import { NavigationContainer } from '@react-navigation/native';
// ACÁ ESTÁ LA CLAVE: Sin llaves, y apuntando a la nueva carpeta "src"
import StackNavigation from './src/navigation/StackNavigation'; 

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}
