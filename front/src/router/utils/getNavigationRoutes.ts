import { AppRouteObject } from "../interfaces";
import routes from "../routes";

export function getNavigationRoutes(routesList: AppRouteObject[] = routes): AppRouteObject[] {
  const navRoutes = routesList.filter((route) => route.showInNavigation);

  return navRoutes.sort((a, b) => {
    const orderA = a.order || 100;
    const orderB = b.order || 100;
    return orderA - orderB;
  });
}
