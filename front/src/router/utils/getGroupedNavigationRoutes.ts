import { getNavigationRoutes } from "./getNavigationRoutes";
import { AppRouteObject } from "../interfaces";
import routes from "../routes";

export function getGroupedNavigationRoutes(routesList: AppRouteObject[] = routes): Record<string, AppRouteObject[]> {
  const navRoutes = getNavigationRoutes(routesList);

  return navRoutes.reduce<Record<string, AppRouteObject[]>>((groups, route) => {
    const groupName = route.group || "default";
    if (!groups[groupName]) {
      groups[groupName] = [];
    }
    groups[groupName].push(route);
    return groups;
  }, {});
}
