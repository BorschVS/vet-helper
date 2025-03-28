import { isActiveRoute } from "./isActiveRoute";
import { AppRouteObject } from "../interfaces";
import { getAllRoutes } from "../utils/getAllRoutes";

export function getActiveRoutes(
  location: Location,
  routes: AppRouteObject[] = getAllRoutes(),
  exact: boolean = false
): AppRouteObject[] {
  return routes.filter((route) => isActiveRoute(route, location, exact));
}
