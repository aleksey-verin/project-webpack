import { FC, ReactNode, useMemo, useState } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext'

interface ThemeProviderProps {
  children: ReactNode
}

const defaultValue = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultValue)

  const defaultProps = useMemo(
    () => ({
      theme: theme,
      setTheme: setTheme,
    }),
    [theme]
  )

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
