import { AppRouteObject } from "./interfaces";

export const routes: AppRouteObject[] = [
  {
    path: "/",
    name: "Головна",
    element: <div>Заглушка для главной страницы</div>,
    showInNavigation: true,
    order: 1,
    meta: {
      title: "Главная - Vet Helper",
      description: "Система управления ветеринарной клиникой",
    },
  },
  {
    path: "/anamnesis",
    name: "Анамнез",
    element: <div>Заглушка для страницы анамнеза</div>,
    showInNavigation: true,
    order: 1,
    meta: {
      title: "Главная - Vet Helper",
      description: "Система управления ветеринарной клиникой",
    },
  },
  {
    path: "/diagnostics",
    name: "Діагностика",
    element: <div>Заглушка для страницы диагностики</div>,
    showInNavigation: true,
    order: 1,
    meta: {
      title: "Главная - Vet Helper",
      description: "Система управления ветеринарной клиникой",
    },
  },
];

export default routes;
