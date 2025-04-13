import { matchPath, Location } from "react-router-dom";
import { AppRouteObject } from "../../types/interfaces/routes";

export function isActiveRoute(route: AppRouteObject, location: Location, exact: boolean = false): boolean {
  return (
    matchPath(
      {
        path: route.path || "",
        end: exact,
      },
      location.pathname
    ) !== null
  );
}
