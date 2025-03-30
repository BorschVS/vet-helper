import { AppRouteObject, AppChildrenRouteObject } from "./interfaces";
import Layout from "../pages/Layout";
import { lazy } from "react";

const HomePage = lazy(() => import("../pages/HomePage"));
const StaffPage = lazy(() => import("../pages/StaffPage"));
const TherapyPage = lazy(() => import("../pages/TherapyPage"));
const FinancePage = lazy(() => import("../pages/FinancePage"));
const SettingsPage = lazy(() => import("../pages/SettingsPage"));
const MarketingPage = lazy(() => import("../pages/MarketingPage"));
const InventoryPage = lazy(() => import("../pages/InventoryPage"));
const AnamnesisPage = lazy(() => import("../pages/AnamnesisPage"));
const DiagnosticsPage = lazy(() => import("../pages/DiagnosticsPage"));
const RegistrationPage = lazy(() => import("../pages/RegistrationPage"));

const therapySubRoutes: AppChildrenRouteObject[] = [
  {
    path: "anamnesis",
    name: "Анамнез",
    element: <AnamnesisPage />,
    showInNavigation: true,
    order: 1,
    meta: {
      title: "Анамнез",
      description: "Система керування ветеринарною клінікою",
    },
  },
  {
    path: "diagnostics",
    name: "Діагностика",
    element: <DiagnosticsPage />,
    showInNavigation: true,
    order: 2,
    meta: {
      title: "Діагностика",
      description: "Система керування ветеринарною клінікою",
    },
  },
  {
    path: "therapy",
    name: "Лікування",
    element: <DiagnosticsPage />,
    showInNavigation: true,
    order: 3,
    meta: {
      title: "Діагностика",
      description: "Система керування ветеринарною клінікою",
    },
  },
];

const subRoutes: AppChildrenRouteObject[] = [
  {
    path: "",
    name: "Головна",
    element: <HomePage />,
    showInNavigation: true,
    order: 1,
    meta: {
      title: "Головна",
      description: "Система керування ветеринарною клінікою",
    },
  },
  {
    path: "registration",
    name: "Реєстратура",
    element: <RegistrationPage />,
    showInNavigation: true,
    order: 2,
    meta: {
      title: "Реєстура",
      description: "Реєстатура ветеринарної клініки",
    },
  },
  {
    path: "therapy",
    name: "Терапія",
    element: <TherapyPage />,
    showInNavigation: true,
    children: therapySubRoutes,
    order: 3,
    meta: {
      title: "Терапія",
      description: "Призначення лікування та терапії для пацієнтів",
    },
  },
  {
    path: "staff",
    name: "Персонал",
    element: <StaffPage />,
    showInNavigation: true,
    order: 4,
    meta: {
      title: "Персонал",
      description: "Управління персоналом клініки",
    },
  },
  {
    path: "finance",
    name: "Фінанси",
    element: <FinancePage />,
    showInNavigation: true,
    order: 5,
    meta: {
      title: "Фінанси",
      description: "Фінансовий облік та звітність",
    },
  },
  {
    path: "marketing",
    name: "Маркетинг",
    element: <MarketingPage />,
    showInNavigation: true,
    order: 6,
    meta: {
      title: "Маркетинг",
      description: "Маркетингові інструменти та аналітика",
    },
  },
  {
    path: "inventory",
    name: "Інвентар",
    element: <InventoryPage />,
    showInNavigation: true,
    order: 7,
    meta: {
      title: "Інвентар",
      description: "Управління інвентарем та обладнанням",
    },
  },
  {
    path: "settings",
    name: "Налаштування",
    element: <SettingsPage />,
    showInNavigation: true,
    order: 8,
    meta: {
      title: "Налаштування",
      description: "Налаштування аккаунту та системи",
    },
  },
];

export const routes: AppRouteObject = {
  path: "/",
  element: <Layout />,
  children: subRoutes,
  meta: {
    title: "Vet Helper",
    description: "Система керування ветеринарною клінікою",
  },
};

export default routes;
