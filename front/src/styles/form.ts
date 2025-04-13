import { theme } from "./theme";

/**
 * Стили для компонентов форм
 */
export const form = {
  // Общие стили для контейнеров полей формы
  container: (className = "") => `${className}`,

  // Стили для меток (labels)
  label: {
    base: `block mb-1 ${theme.fontSize.sm} ${theme.fontWeight.medium}`,
    required: `text-${theme.colors.status.error} ml-1`,
    section: `${theme.fontSize.lg} ${theme.fontWeight.medium} mb-2`,
    form: `${theme.fontSize.xl} ${theme.fontWeight.semibold} mb-4 text-${theme.colors.primary.main}`,
  },

  // Стили для текстовых полей ввода
  input: {
    base: `w-full p-2 border ${theme.radius.md} bg-${theme.colors.background.primary}`,
    focus: `focus:outline-none focus:ring-1 focus:ring-${theme.colors.border.focus} focus:border-${theme.colors.border.focus} transition-colors`,
    error: `border-${theme.colors.status.error}`,
    disabled: "opacity-60 cursor-not-allowed",
  },

  // Стили для текстовых областей
  textarea: {
    base: `w-full p-2 border ${theme.radius.md} bg-${theme.colors.background.primary}`,
    focus: `focus:outline-none focus:ring-1 focus:ring-${theme.colors.border.focus} focus:border-${theme.colors.border.focus} transition-colors`,
  },

  // Стили для групп чекбоксов
  checkboxGroup: {
    container: (className = "") => `${className}`,
    grid: (columns = 2) => `grid grid-cols-1 md:grid-cols-${columns} gap-2`,
    option: "inline-flex items-center",
    input: "mr-1",
  },

  // Стили для групп радио-кнопок
  radioGroup: {
    container: (className = "") => `${className}`,
    options: "flex flex-wrap gap-3",
    option: "inline-flex items-center",
    input: "mr-1",
  },

  // Стили для секций форм
  section: {
    container: `bg-${theme.colors.background.secondary} p-4 ${theme.radius.lg} shadow-sm`,
    title: `${theme.fontSize.xl} ${theme.fontWeight.semibold} mb-4 text-${theme.colors.primary.main}`,
    subtitle: `${theme.fontSize.lg} ${theme.fontWeight.medium} mb-3`,
    nestedGroup: "pl-5 mt-3",
    group: "mb-4",
  },

  // Стили для создания сеток
  grid: {
    cols2: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-4",
    cols3: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-4",
    cols4: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4",
  },

  // Стили для кнопок в формах
  formActions: {
    container: "flex justify-end space-x-3",
    submit: `px-4 py-2 border border-transparent ${theme.radius.md} shadow-sm ${theme.fontSize.sm} ${theme.fontWeight.medium} text-${theme.colors.text.light} bg-${theme.colors.primary.main} hover:bg-${theme.colors.primary.hover}`,
    cancel: `px-4 py-2 border border-${theme.colors.border.light} ${theme.radius.md} shadow-sm ${theme.fontSize.sm} ${theme.fontWeight.medium} bg-white text-${theme.colors.text.dark} hover:bg-${theme.colors.background.light}`,
  },
};
