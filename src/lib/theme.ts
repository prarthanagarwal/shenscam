export type ThemeColor = {
  DEFAULT: string;
  foreground: string;
};

export type ThemeColors = {
  background: string;
  foreground: string;
  card: ThemeColor;
  popover: ThemeColor;
  primary: ThemeColor;
  secondary: ThemeColor;
  muted: ThemeColor;
  accent: ThemeColor;
  destructive: ThemeColor;
  border: string;
  input: string;
  ring: string;
  radius: string;
};

export type BrandColors = {
  maroonBg: string;
  creamBg: string;
  folderPink: string;
};

export type Fonts = {
  primary: string;
  system: string;
};

export type Theme = {
  colors: ThemeColors;
  brand: BrandColors;
  fonts: Fonts;
};

const theme: Theme = {
  colors: {
    background: '#fbf4eb',
    foreground: '#09090b',
    card: {
      DEFAULT: '#ffffff',
      foreground: '#09090b',
    },
    popover: {
      DEFAULT: '#ffffff',
      foreground: '#09090b',
    },
    primary: {
      DEFAULT: '#c4b5fd',
      foreground: '#ffffff',
    },
    secondary: {
      DEFAULT: '#e4e4e7',
      foreground: '#18181b',
    },
    muted: {
      DEFAULT: '#e4e4e7',
      foreground: '#71717a',
    },
    accent: {
      DEFAULT: '#e4e4e7',
      foreground: '#18181b',
    },
    destructive: {
      DEFAULT: '#ef4444',
      foreground: '#ffffff',
    },
    border: '#e4e4e7',
    input: '#e4e4e7',
    ring: '#c4b5fd',
    radius: 'var(--radius)',
  },
  brand: {
    maroonBg: '#d1385b',
    creamBg: '#ffebb5',
    folderPink: '#ec3e85',
  },
  fonts: {
    primary: "'Montserrat', system-ui, sans-serif",
    system: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
  },
};

export default theme; 