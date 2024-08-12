import React, { createContext } from "react";

export const ThemeContext = createContext('light')

export const useTheme = () => {
    return React.useContext(ThemeContext)
}

export const ThemeProvider = ThemeContext.Provider