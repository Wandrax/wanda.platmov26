import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import StackNavigation from './app/navigation/StackNavigation';

const pinkTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff0f6',
    card: '#d63384',
    primary: '#d63384',
    text: '#4a2635',
    border: '#f8a5c2',
  },
};

export default function App() {
  return (
    <NavigationContainer theme={pinkTheme}>
      <StatusBar style="light" />
      <StackNavigation />
    </NavigationContainer>
  );
}
