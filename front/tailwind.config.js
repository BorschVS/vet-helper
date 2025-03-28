/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          primary: {
            bg: 'var(--color-bg-primary)',
            text: 'var(--color-text-primary)',
          },
          secondary: {
            bg: 'var(--color-bg-secondary)',
            text: 'var(--color-text-secondary)',
          },
          tertiary: {
            bg: 'var(--color-bg-tertiary)',
            text: 'var(--color-text-tertiary)',
          },
          accent: {
            primary: 'var(--color-accent-primary)',
            secondary: 'var(--color-accent-secondary)',
            tertiary: 'var(--color-accent-tertiary)',
          },
        },
        spacing: {
          'xs': 'var(--spacing-xs)',
          'sm': 'var(--spacing-sm)',
          'md': 'var(--spacing-md)',
          'lg': 'var(--spacing-lg)',
          'xl': 'var(--spacing-xl)',
        },
        borderRadius: {
          'sm': 'var(--radius-sm)',
          'md': 'var(--radius-md)',
          'lg': 'var(--radius-lg)',
        },
        fontFamily: {
          'sans': 'var(--font-family)',
        },
        fontSize: {
          'base': 'var(--font-size-base)',
          'lg': 'var(--font-size-lg)',
          'xl': 'var(--font-size-xl)',
          '2xl': 'var(--font-size-2xl)',
          '3xl': 'var(--font-size-3xl)',
        },
        boxShadow: {
          'sm': 'var(--shadow-sm)',
          'md': 'var(--shadow-md)',
          'lg': 'var(--shadow-lg)',
        },
      },
    },
    plugins: [],
  };