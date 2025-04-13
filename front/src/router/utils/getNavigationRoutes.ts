import { AppRouteObject } from "../../types/interfaces/routes";
import routes from "../routes";

export function getNavigationRoutes(routeObj: AppRouteObject = routes): AppRouteObject[] {
  if (!routeObj.children) return [];

  return routeObj.children.filter((route) => route.showInNavigation).sort((a, b) => (a.order || 0) - (b.order || 0));
}
