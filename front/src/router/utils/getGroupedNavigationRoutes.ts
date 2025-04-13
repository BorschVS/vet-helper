import { getNavigationRoutes } from "./getNavigationRoutes";
import { AppRouteObject } from "../../types/interfaces/routes";
import routes from "../routes";

export function getGroupedNavigationRoutes(routesList: AppRouteObject[] = routes): Record<string, AppRouteObject[]> {
  const navRoutes = routesList.flatMap((route) => getNavigationRoutes(route));

  return navRoutes.reduce<Record<string, AppRouteObject[]>>((groups, route) => {
    const groupName = route.group || "default";
    if (!groups[groupName]) {
      groups[groupName] = [];
    }
    groups[groupName].push(route);
    return groups;
  }, {});
}
