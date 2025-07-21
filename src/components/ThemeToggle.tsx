import styled from "@emotion/styled";
import { useThemeToggle } from "../theme/CustomThemeProvider";
import { Moon, Sun } from "lucide-react";
import { ThemeType } from "../../theme";

export interface ThemedProps {
  theme: ThemeType;
}

const Button = styled.button<ThemedProps>`
  padding: 0.5em 1em;
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};  // Changed from background to primary
  color: ${({ theme }) => theme.colors.text};
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5em;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.9;
    transform: scale(1.02);
    background-color: ${({ theme }) => theme.colors.background};  // Added hover state
  }
`;

const Icon = styled.div<ThemedProps>`
  width: 1.24rem;
  height: 1.24rem;
  color: ${({ theme }) => theme.colors.icon};
`;

const Text = styled.span`
  white-space: nowrap;
`;

const ThemeToggle = () => {
  const { toggleTheme, mode, currentTheme } = useThemeToggle();
  
  return (
    <Button 
      onClick={toggleTheme}
      aria-label={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}
      theme={currentTheme}  // Properly passing the theme prop
    >
      <Icon as={mode === 'dark' ? Moon : Sun} theme={currentTheme} />
      <Text>{mode === 'dark' ? 'Dark' : 'Light'} Mode</Text>
    </Button>
  );
};

export default ThemeToggle;