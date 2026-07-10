import React, { createContext, useContext, useMemo, useState } from 'react';

const lightColors = {
  mode: 'claro',
  background: '#fff1f7',
  surface: '#ffffff',
  surfaceMuted: '#ffe4f1',
  primary: '#db2777',
  primaryDark: '#be185d',
  accent: '#ec4899',
  accentSoft: '#fce7f3',
  warning: '#f43f5e',
  warningSoft: '#ffe4e6',
  text: '#3f0a22',
  textMuted: '#7a294b',
  textSubtle: '#9d4267',
  border: '#f9a8d4',
  tabInactive: '#a8557a',
  cardShadow: '#831843',
};

const darkColors = {
  mode: 'oscuro',
  background: '#2a0617',
  surface: '#3a0b21',
  surfaceMuted: '#5b1134',
  primary: '#f472b6',
  primaryDark: '#ec4899',
  accent: '#f9a8d4',
  accentSoft: '#64133b',
  warning: '#fb7185',
  warningSoft: '#4c1022',
  text: '#fff1f7',
  textMuted: '#fbcfe8',
  textSubtle: '#f9a8d4',
  border: '#9d174d',
  tabInactive: '#f0a3c7',
  cardShadow: '#1f0511',
};

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [tema, setTema] = useState('claro');

  const value = useMemo(() => {
    const isDark = tema === 'oscuro';
    const colors = isDark ? darkColors : lightColors;

    return {
      tema,
      isDark,
      colors,
      alternarTema: () => setTema((actual) => (actual === 'claro' ? 'oscuro' : 'claro')),
    };
  }, [tema]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme debe usarse dentro de ThemeProvider');
  }

  return context;
}
