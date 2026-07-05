import 'react-native-gesture-handler';

import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

import ScreenNavigation from './src/Navigation/ScreenNavigation';
import LoginScreen from './src/Screens/LoginScreen';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        {isLoggedIn ? (
          <ScreenNavigation onLogout={() => setIsLoggedIn(false)} />
        ) : (
          <LoginScreen onLogin={() => setIsLoggedIn(true)} />
        )}
      </NavigationContainer>
      <StatusBar style="auto" />
    </GestureHandlerRootView>
  );
}
