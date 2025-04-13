import { theme } from "./theme";

/**
 * Стили для компонентов макета
 */
export const layout = {
  // Основной макет приложения
  appLayout: {
    container: "min-h-screen flex flex-col",
    header: {
      container: "flex flex-col justify-start",
      mobileMenu: "flex flex-row items-center space-x-4",
      top: "flex justify-between w-full px-5",
      logo: "py-4 px-2",
    },
    main: {
      container: "flex flex-1",
      sidebar: "hidden md:flex pl-5 w-64",
      content: "flex-1 px-5",
    },
    footer: {
      container: `mt-auto py-4 px-5 border-t border-${theme.colors.border.light} dark:border-${theme.colors.border.dark}`,
      text: `${theme.fontSize.sm} text-${theme.colors.text.secondary}`,
    },
  },

  // Стили для страниц
  page: {
    container: "p-4 md:p-6",
    title: `${theme.fontSize.xxl} ${theme.fontWeight.bold} mb-6`,
    subtitle: `${theme.fontSize.xl} ${theme.fontWeight.semibold} mb-4`,
    content: "space-y-8",
  },

  // Карточки
  card: {
    container: `bg-${theme.colors.background.primary} ${theme.radius.md} ${theme.shadow.md} overflow-hidden`,
    header: "px-4 py-3 border-b",
    title: `${theme.fontSize.lg} ${theme.fontWeight.semibold}`,
    body: "px-4 py-4",
    footer: `px-4 py-3 border-t border-${theme.colors.border.light}`,
  },
};
