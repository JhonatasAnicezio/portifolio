'use client'
import { ReactNode, createContext, useEffect, useState } from 'react';

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

  useEffect(() => {

    const theme = localStorage.getItem('themeSystem');

    if(theme) {
      setIsDark(JSON.parse(theme));
    }
  }, [])

  const setTheme = () => {
    setIsDark(!isDark);
    
    localStorage.setItem('themeSystem', JSON.stringify(!isDark));
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