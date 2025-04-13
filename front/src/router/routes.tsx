import { AppRouteObject, AppChildrenRouteObject } from "../types/interfaces/routes";
import { Layout } from "../pages";
import { therapyPagesData, mainPagesData } from "./routes/index";
import { transformToRouteObject } from "./utils/transformToRouteObject";

export const therapySubRoutes: AppChildrenRouteObject[] = therapyPagesData.map(transformToRouteObject);
export const subRoutes: AppChildrenRouteObject[] = mainPagesData.map(transformToRouteObject);

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
