"use client"
import { createContext, useContext, useState, useEffect } from 'react';

// Define multiple color themes
export const themes = {
  default: {
    name: 'Original',
    colors: {
      primary: '#774433',
      accent: '#FF7D5A',
      secondary: '#DDA885',
      background: '#F7EECB',
      primaryLight: '#8B5A4A',
      accentLight: '#FF9D7A',
    }
  },
  soft: {
    name: 'Soft & Gentle',
    colors: {
      primary: '#5C7C5C', // Soft sage green
      accent: '#A8C4A8', // Light mint green
      secondary: '#C8D9C8', // Pale green
      background: '#F5F8F5', // Very light mint
      primaryLight: '#6D8C6D',
      accentLight: '#B8D4B8',
    }
  },
  ocean: {
    name: 'Ocean Breeze',
    colors: {
      primary: '#4A7C8F', // Soft teal
      accent: '#7BA8BA', // Light blue
      secondary: '#A8C8D4', // Pale blue
      background: '#F0F5F7', // Very light blue
      primaryLight: '#5B8D9F',
      accentLight: '#8BB8CA',
    }
  },
  warm: {
    name: 'Warm Sunset',
    colors: {
      primary: '#8B6F5C', // Warm beige-brown
      accent: '#C49A7A', // Peach
      secondary: '#E4C5A5', // Light peach
      background: '#FAF7F3', // Cream
      primaryLight: '#9C7F6C',
      accentLight: '#D4AA8A',
    }
  },
  lavender: {
    name: 'Lavender Dreams',
    colors: {
      primary: '#7A6B8C', // Soft purple
      accent: '#A896B8', // Light lavender
      secondary: '#C8B8D4', // Pale lavender
      background: '#F7F5F8', // Very light lavender
      primaryLight: '#8B7C9C',
      accentLight: '#B8A6C8',
    }
  },
  minimal: {
    name: 'Minimal Gray',
    colors: {
      primary: '#5A5A5A', // Medium gray
      accent: '#8A8A8A', // Light gray
      secondary: '#B0B0B0', // Pale gray
      background: '#FAFAFA', // Off-white
      primaryLight: '#6A6A6A',
      accentLight: '#9A9A9A',
    }
  }
};

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('default');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Load theme from localStorage
    const savedTheme = localStorage.getItem('colorTheme');
    if (savedTheme && themes[savedTheme]) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    // Apply theme to CSS variables
    const currentTheme = themes[theme];
    const root = document.documentElement;
    
    Object.entries(currentTheme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });

    // Save to localStorage
    localStorage.setItem('colorTheme', theme);
  }, [theme, mounted]);

  const changeTheme = (newTheme) => {
    if (themes[newTheme]) {
      setTheme(newTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, themes, changeTheme, currentTheme: themes[theme] }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

