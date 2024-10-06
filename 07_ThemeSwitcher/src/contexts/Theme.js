import React, { createContext, useContext } from 'react'

export const ThemeContext = createContext({
  themeMode:"light",
  DarkMode:()=>{},
  LightMode:()=>{},
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
  return useContext(ThemeContext)
}

