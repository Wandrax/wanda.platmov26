import React, { createContext, useContext, useMemo, useState } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);

  const value = useMemo(
    () => ({
      usuario,
      login: (nombre) => setUsuario({ nombre: nombre.trim() }),
      logout: () => setUsuario(null),
      actualizarNombre: (nombre) => {
        setUsuario((actual) => (actual ? { ...actual, nombre: nombre.trim() } : actual));
      },
    }),
    [usuario]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth debe usarse dentro de AuthProvider');
  }

  return context;
}
