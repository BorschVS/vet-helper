import { AppRouteObject } from "../../types/interfaces/routes";
import routes from "../routes";

export function getAllRoutes(routeObj: AppRouteObject = routes): AppRouteObject[] {
  const result: AppRouteObject[] = [routeObj];

  if (routeObj.children?.length) {
    routeObj.children.forEach((child) => {
      result.push(...getAllRoutes(child));
    });
  }

  return result;
}
