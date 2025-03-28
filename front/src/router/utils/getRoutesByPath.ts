import { AppRouteObject } from "../interfaces";
import routes from "../routes";

export function getRouteByPath(path: string, routesList: AppRouteObject[] = routes): AppRouteObject | undefined {
  for (const route of routesList) {
    if (route.path === path) {
      return route;
    }
    if (route.children?.length) {
      const childRoute = getRouteByPath(path, route.children);
      if (childRoute) {
        return childRoute;
      }
    }
  }
  return undefined;
}
