import { AppRouteObject } from "../interfaces";
import routes from "../routes";
import { getRouteByPath } from "./getRoutesByPath";

export function getActiveRoute(
  path: string,
  routeObj: AppRouteObject = routes
): AppRouteObject | undefined {
  return getRouteByPath(path, routeObj);
}
