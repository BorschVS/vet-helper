import { PageDefinition } from "../../types/interfaces/routes";
import pageModules from "./pageModules";
import therapyPagesData from "./therapyRoutes";

const mainPagesData: PageDefinition[] = [
  {
    path: "",
    name: "Головна",
    component: pageModules.HomePage,
    showInNavigation: true,
    order: 1,
    description: "Система керування ветеринарною клінікою",
  },
  {
    path: "registration",
    name: "Реєстратура",
    component: pageModules.RegistrationPage,
    showInNavigation: true,
    order: 2,
    description: "Реєстатура ветеринарної клініки",
  },
  {
    path: "therapy",
    name: "Терапія",
    component: pageModules.TherapyPage,
    showInNavigation: true,
    order: 3,
    description: "Призначення лікування та терапії для пацієнтів",
    children: therapyPagesData,
  },
  {
    path: "staff",
    name: "Персонал",
    component: pageModules.StaffPage,
    showInNavigation: true,
    order: 4,
    description: "Управління персоналом клініки",
  },
  {
    path: "finance",
    name: "Фінанси",
    component: pageModules.FinancePage,
    showInNavigation: true,
    order: 5,
    description: "Фінансовий облік та звітність",
  },
  {
    path: "marketing",
    name: "Маркетинг",
    component: pageModules.MarketingPage,
    showInNavigation: true,
    order: 6,
    description: "Маркетингові інструменти та аналітика",
  },
  {
    path: "inventory",
    name: "Інвентар",
    component: pageModules.InventoryPage,
    showInNavigation: true,
    order: 7,
    description: "Управління інвентарем та обладнанням",
  },
  {
    path: "settings",
    name: "Налаштування",
    component: pageModules.SettingsPage,
    showInNavigation: true,
    order: 8,
    description: "Налаштування аккаунту та системи",
  },
];

export default mainPagesData;
