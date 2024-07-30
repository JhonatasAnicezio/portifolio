'use client'
import { ReactNode, createContext, useState } from 'react';

interface ThemeModeContext {
    isDark: boolean,
    setTheme: () => void,
}

export const ThemeModeContext = createContext({} as ThemeModeContext);

type Prop = {
  children: ReactNode,
}

export function ThemeModeProvider({ children }: Prop) {
  const [isDark, setIsDark] = useState<boolean>(true);

  const setTheme = () => {
    setIsDark(!isDark);
  }

  const context = {
    isDark,
    setTheme,
  };

  return (
    <ThemeModeContext.Provider value={context}>
      {children}
    </ThemeModeContext.Provider>
  )
}