export const theme = {
  mode: ['light', 'dark'] as const,
  light: {
    colors: {
      inputBg: "#f0f0f0",
      background: '#ffffff',
      text: '#1a1a1a',
      primary: '#307cd3ff',
      icon: '#3b3939ff',
      placeholder: '#6b7280',
    },
  },
  dark: {
    colors: {
      inputBg: "#2e2e2e",
      background: '#1a1a1a',
      text: '#ffffff',
      primary: '#70dcc5ff',
      icon: '#b4b4b4',
      placeholder: '#9ca3af',
    },
  },
};



export type ThemeMode = typeof theme.mode[number];
export type ThemeType = typeof theme.light | typeof theme.dark;