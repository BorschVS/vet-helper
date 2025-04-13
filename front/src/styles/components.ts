import { theme } from "./theme";

/**
 * Стили для UI-компонентов
 */
export const components = {
  // Стили для кнопок
  button: {
    base: `inline-flex items-center justify-center ${theme.radius.md} transition-colors`,
    primary: `bg-${theme.colors.primary.main} hover:bg-${theme.colors.primary.hover} text-white`,
    secondary: `bg-white border border-${theme.colors.border.light} hover:bg-${theme.colors.background.light} text-${theme.colors.text.dark}`,
    danger: `bg-${theme.colors.status.error} hover:bg-red-600 text-white`,
    size: {
      sm: "px-2.5 py-1.5 text-xs",
      md: "px-4 py-2 text-sm",
      lg: "px-6 py-3 text-base",
    },
  },

  // Стили для значков и тегов
  badge: {
    base: `inline-flex items-center ${theme.radius.full} px-2.5 py-0.5 text-xs ${theme.fontWeight.medium}`,
    primary: `bg-${theme.colors.primary.main} text-white`,
    secondary: `bg-${theme.colors.background.light} text-${theme.colors.text.dark}`,
    success: `bg-${theme.colors.status.success} text-white`,
    error: `bg-${theme.colors.status.error} text-white`,
    warning: `bg-${theme.colors.status.warning} text-${theme.colors.text.dark}`,
    info: `bg-${theme.colors.status.info} text-white`,
  },

  // Стили для загрузчика
  loader: {
    container: (fullScreen = false) =>
      fullScreen
        ? `fixed inset-0 bg-white/80 dark:bg-gray-900/80 z-50 flex flex-col items-center justify-center`
        : `flex flex-col items-center justify-center min-h-[200px] w-full`,
    spinner: {
      sm: `h-6 w-6 border-2 rounded-full animate-spin`,
      md: `h-10 w-10 border-3 rounded-full animate-spin`,
      lg: `h-16 w-16 border-4 rounded-full animate-spin`,
    },
    spinnerColors: {
      primary: `border-${theme.colors.primary.main}/30 border-t-${theme.colors.primary.main}`,
      secondary: `border-gray-300 border-t-gray-600`,
      white: `border-white/30 border-t-white`,
    },
    text: `${theme.fontSize.base} ${theme.fontWeight.medium} text-${theme.colors.text.secondary} mt-4`,
  },

  // Стили для модальных окон
  modal: {
    backdrop: "fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center p-4",
    container: `bg-white ${theme.radius.lg} ${theme.shadow.xl} max-w-md w-full max-h-[90vh] overflow-hidden`,
    header: "px-6 py-4 border-b",
    title: `${theme.fontSize.lg} ${theme.fontWeight.semibold}`,
    body: "px-6 py-4 overflow-y-auto",
    footer: "px-6 py-4 border-t flex justify-end space-x-3",
  },

  // Стили для всплывающих окон
  tooltip: {
    base: `absolute z-10 px-3 py-2 text-sm ${theme.fontWeight.medium} text-white bg-gray-900 ${theme.radius.md} shadow-sm`,
    arrow: "absolute w-2 h-2 bg-gray-900 rotate-45",
  },

  // Стили для логотипа
  logo: {
    container: `flex items-center ${theme.fontWeight.bold} ${theme.fontSize.xl} ${theme.shadow.md}`,
    first: `bg-${theme.colors.background.light} dark:bg-${theme.colors.background.dark} text-${theme.colors.primary.main} px-3 py-1 rounded-l-md border border-${theme.colors.primary.main} border-r-0`,
    second: `bg-${theme.colors.primary.main} text-white px-3 py-1 rounded-r-md border border-${theme.colors.primary.main}`,
  },
};
