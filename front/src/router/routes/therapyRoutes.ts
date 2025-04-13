import { PageDefinition } from "../../types/interfaces/routes";
import pageModules from "./pageModules";

const therapyPagesData: PageDefinition[] = [
  {
    path: "anamnesis",
    name: "Анамнез",
    component: pageModules.AnamnesisPage,
    showInNavigation: true,
    order: 1,
    description: "Система керування ветеринарною клінікою",
  },
  {
    path: "diagnostics",
    name: "Діагностика",
    component: pageModules.DiagnosticsPage,
    showInNavigation: true,
    order: 2,
    description: "Система керування ветеринарною клінікою",
  },
  {
    path: "treatment",
    name: "Лікування",
    component: pageModules.DiagnosticsPage, // Заменить на TreatmentPage
    showInNavigation: true,
    order: 3,
    description: "Система керування ветеринарною клінікою",
  },
  {
    path: "check",
    name: "Чек",
    component: pageModules.DiagnosticsPage, // Заменить на CheckPage
    showInNavigation: true,
    order: 4,
    description: "Чеки та фінансові документи",
  },
  {
    path: "recommendations",
    name: "Рекомендації",
    component: pageModules.DiagnosticsPage, // Заменить на RecommendationsPage
    showInNavigation: true,
    order: 5,
    description: "Рекомендації по лікуванню",
  },
  {
    path: "preventive",
    name: "Профілактика",
    component: pageModules.DiagnosticsPage, // Заменить на PreventivePage
    showInNavigation: true,
    order: 6,
    description: "Профілактика захворювань",
  },
];

export default therapyPagesData;
