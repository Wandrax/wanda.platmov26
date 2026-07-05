import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import AboutScreen from '../Screens/AboutScreen';
import MainScreen from '../Screens/MainScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import SetingScreen from '../Screens/SetingScreen';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const colors = {
  primary: '#760f43',
  primaryDark: '#5e113b',
  muted: '#8b6481',
  surface: '#ffffff',
  border: '#eadbe4',
};

const tabIcons = {
  Inicio: ['home-outline', 'home'],
  Perfil: ['person-outline', 'person'],
  Configuración: ['settings-outline', 'settings'],
};

const drawerIcons = {
  Principal: 'grid-outline',
  'Acerca de': 'information-circle-outline',
  Salir: 'log-out-outline',
};

function MenuButton({ onPress }) {
  return (
    <Pressable
      accessibilityLabel="Abrir menú"
      onPress={onPress}
      style={({ pressed }) => [styles.headerButton, pressed && styles.pressed]}
    >
      <Ionicons name="menu" size={26} color="#fff" />
    </Pressable>
  );
}

function TabsNavigator({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerStyle: styles.header,
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerLeft: () => <MenuButton onPress={() => navigation.openDrawer()} />,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.muted,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarIcon: ({ focused, color, size }) => {
          const [outlineIcon, filledIcon] = tabIcons[route.name] ?? ['ellipse-outline', 'ellipse'];
          return (
            <Ionicons
              name={focused ? filledIcon : outlineIcon}
              size={size}
              color={color}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Inicio" component={MainScreen} />
      <Tab.Screen name="Perfil" component={ProfileScreen} />
      <Tab.Screen name="Configuración" component={SetingScreen} />
    </Tab.Navigator>
  );
}

function LogoutScreen() {
  return null;
}

export default function ScreenNavigation({ onLogout }) {
  return (
    <Drawer.Navigator
      initialRouteName="Principal"
      screenOptions={({ route }) => ({
        headerStyle: styles.header,
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        drawerActiveTintColor: colors.primaryDark,
        drawerInactiveTintColor: '#553344',
        drawerLabelStyle: styles.drawerLabel,
        drawerIcon: ({ color, size }) => (
          <Ionicons name={drawerIcons[route.name]} size={size} color={color} />
        ),
      })}
    >
      <Drawer.Screen
        name="Principal"
        component={TabsNavigator}
        options={{ drawerLabel: 'Inicio', headerShown: false }}
      />
      <Drawer.Screen name="Acerca de" component={AboutScreen} />
      <Drawer.Screen
        name="Salir"
        component={LogoutScreen}
        listeners={{
          focus: () => onLogout(),
        }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary,
  },
  headerButton: {
    alignItems: 'center',
    height: 44,
    justifyContent: 'center',
    marginLeft: 8,
    width: 44,
  },
  pressed: {
    opacity: 0.7,
  },
  tabBar: {
    backgroundColor: colors.surface,
    borderTopColor: colors.border,
    height: 64,
    paddingBottom: 8,
    paddingTop: 6,
  },
  tabBarLabel: {
    fontSize: 12,
    fontWeight: '700',
  },
  drawerLabel: {
    fontSize: 15,
    fontWeight: '700',
  },
});
