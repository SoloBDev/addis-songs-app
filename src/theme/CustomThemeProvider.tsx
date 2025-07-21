import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useState, createContext, useContext, ReactNode, useEffect } from "react";
import { theme, ThemeType, ThemeMode } from "../../theme";

interface ThemeContextType {
  toggleTheme: () => void;
  currentTheme: ThemeType;
  mode: ThemeMode;
}

const ThemeToggleContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeToggle = () => {
  const context = useContext(ThemeToggleContext);
  if (!context) {
    throw new Error("useThemeToggle must be used within CustomThemeProvider");
  }
  return context;
};

const Wrapper = styled.div<{ theme: ThemeType }>`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  min-height: 100vh;
  transition: background-color 0.3s ease, color 0.3s ease;
`;

export interface CustomThemeProviderProps {
  children: ReactNode;
  defaultTheme?: ThemeMode;
}

export const CustomThemeProvider: React.FC<CustomThemeProviderProps> = ({
  children,
  defaultTheme = "dark",
}) => {
  const [mode, setMode] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme') as ThemeMode | null;
      return saved || defaultTheme;
    }
    return defaultTheme;
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', mode);
    localStorage.setItem('theme', mode);
  }, [mode]);

  const toggleTheme = () => setMode(prev => prev === 'dark' ? 'light' : 'dark');
  const selectedTheme = mode === 'dark' ? theme.dark : theme.light;

  return (
    <EmotionThemeProvider theme={selectedTheme}>
      <ThemeToggleContext.Provider value={{ toggleTheme, mode, currentTheme: selectedTheme }}>
        <Wrapper theme={selectedTheme}>{children}</Wrapper>
      </ThemeToggleContext.Provider>
    </EmotionThemeProvider>
  );
};