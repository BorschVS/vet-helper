import { lazy } from "react";

const pageModules = {
  HomePage: lazy(() => import("../../pages/HomePage")),
  StaffPage: lazy(() => import("../../pages/StaffPage")),
  TherapyPage: lazy(() => import("../../pages/TherapyPage")),
  FinancePage: lazy(() => import("../../pages/FinancePage")),
  SettingsPage: lazy(() => import("../../pages/SettingsPage")),
  MarketingPage: lazy(() => import("../../pages/MarketingPage")),
  InventoryPage: lazy(() => import("../../pages/InventoryPage")),
  AnamnesisPage: lazy(() => import("../../pages/AnamnesisPage")),
  DiagnosticsPage: lazy(() => import("../../pages/DiagnosticsPage")),
  RegistrationPage: lazy(() => import("../../pages/RegistrationPage")),
};

export default pageModules;
