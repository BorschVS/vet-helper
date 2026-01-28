import { getNavigationRoutes } from "./getNavigationRoutes";
import { AppRouteObject } from "../../types/interfaces/routes";
import routes from "../routes";

export function getGroupedNavigationRoutes(routesList: AppRouteObject | AppRouteObject[] = routes): Record<string, AppRouteObject[]> {
  const routesArray = Array.isArray(routesList) ? routesList : [routesList];
  const navRoutes = routesArray.flatMap((route) => getNavigationRoutes(route));

  return navRoutes.reduce<Record<string, AppRouteObject[]>>((groups, route) => {
    const groupName = route.group || "default";
    if (!groups[groupName]) {
      groups[groupName] = [];
    }
    groups[groupName].push(route);
    return groups;
  }, {});
}
