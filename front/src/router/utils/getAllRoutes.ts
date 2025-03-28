import { AppRouteObject } from "../interfaces";
import routes from "../routes";

export function getAllRoutes(routesList: AppRouteObject[] = routes): AppRouteObject[] {
  return routesList.reduce<AppRouteObject[]>((acc, route) => {
    acc.push(route);
    if (route.children?.length) {
      acc.push(...getAllRoutes(route.children));
    }
    return acc;
  }, []);
}
