import { theme } from "./theme";

/**
 * Стили для компонентов навигации
 */
export const navigation = {
  // Стили для основного меню навигации
  mainNav: {
    container: "h-full py-4",
    list: "space-y-1",
    link: {
      base: "flex items-center p-2 mb-1 rounded-md transition-colors",
      active: `bg-${theme.colors.primary.main} text-${theme.colors.text.light}`,
      inactive: `hover:bg-${theme.colors.background.light} dark:hover:bg-${theme.colors.background.dark}`,
    },
    text: `${theme.fontSize.base} ${theme.fontWeight.medium}`,
    icon: "mr-3",
    groupHeader: `${theme.fontSize.sm} ${theme.fontWeight.semibold} text-${theme.colors.text.secondary} uppercase px-2 py-1 mt-4 mb-2`,
  },

  // Стили для мобильной навигации
  mobileNav: {
    container: "md:hidden",
    button: `p-2 ${theme.radius.md} hover:bg-${theme.colors.background.light} dark:hover:bg-${theme.colors.background.dark}`,
    drawer: `fixed inset-0 bg-black bg-opacity-50 z-50`,
    menu: `fixed right-0 top-0 h-full w-64 bg-${theme.colors.background.primary} dark:bg-${theme.colors.background.dark} p-4 shadow-xl overflow-y-auto`,
    closeBtn: "absolute top-4 right-4",
  },

  // Стили для вкладок
  tabs: {
    container: `border-b border-${theme.colors.border.light} dark:border-${theme.colors.border.dark} mb-6`,
    list: "flex flex-wrap -mb-px",
    item: "mr-2",
    link: {
      base: "inline-block py-4 px-6 rounded-t-lg",
      active: `text-${theme.colors.text.primary} border-b-2 border-${theme.colors.primary.main} ${theme.fontWeight.medium}`,
      inactive: `text-${theme.colors.text.secondary} hover:text-${theme.colors.text.primary} hover:border-b-2 hover:border-${theme.colors.border.light}`,
    },
  },

  // Стили для хлебных крошек
  breadcrumbs: {
    container: "px-5 py-2 flex items-center text-sm",
    item: `text-${theme.colors.text.secondary}`,
    active: `text-${theme.colors.text.primary} ${theme.fontWeight.medium}`,
    separator: "mx-2 text-gray-400",
  },
};
