export const theme = {
  mode: ['light', 'dark'] as const,
  light: {
    colors: {
      background: '#ffffff',
      text: '#1a1a1a',
      primary: '#307cd3ff',
      icon: '#3b3939ff',
    },
  },
  dark: {
    colors: {
      background: '#1a1a1a',
      text: '#ffffff',
      primary: '#70dcc5ff',
      icon: '#b4b4b4',
    },
  },
};



export type ThemeMode = typeof theme.mode[number];
export type ThemeType = typeof theme.light | typeof theme.dark;