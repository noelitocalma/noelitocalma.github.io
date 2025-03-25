import { themeAtom } from '@/atoms/theme.atoms';
import { Theme } from '@/constants/theme';
import { Button } from '@heroui/react';
import { useSetAtom } from 'jotai';
import { Moon, Sun } from 'lucide-react';
import React, { useState, useEffect, useCallback } from 'react';

export default function ThemeToggler() {
  const setThemeAtom = useSetAtom(themeAtom);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const defaultTheme = localStorage.getItem('theme') ||
      (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        ? Theme.Dark
        : Theme.Light
      );

    const _isDarkMode = defaultTheme === Theme.Dark;
    setIsDarkMode(_isDarkMode);
    setThemeAtom(_isDarkMode ? Theme.Dark : Theme.Light);
    document.body.classList.toggle('light-mode', !_isDarkMode);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleTheme = useCallback(() => {
    const _isDarkMode = !isDarkMode;
    setIsDarkMode(_isDarkMode);

    const newTheme = _isDarkMode ? Theme.Dark : Theme.Light;
    localStorage.setItem('theme', newTheme);
    setThemeAtom(newTheme);

    document.body.classList.toggle('light-mode', !_isDarkMode);
  }, [isDarkMode, setThemeAtom]);

  return (
    <Button variant="solid" color="warning"
      className='theme-toggler rounded-full text-white'
      isIconOnly onPress={toggleTheme}>
      {isDarkMode ? <Sun /> : <Moon />}
    </Button>
  );
}
