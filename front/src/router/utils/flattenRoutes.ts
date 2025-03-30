import { AppRouteObject } from "../interfaces";

export const flattenRoutes = (routes: AppRouteObject): AppRouteObject[] => {
    const result: AppRouteObject[] = [];
  
    if (routes.showInNavigation) {
      result.push(routes);
    }
  
    if (routes.children) {
      routes.children.forEach(child => {
        if (child.showInNavigation) {
          result.push(child);
        }
  
        if (child.children) {
          result.push(...flattenRoutes(child));
        }
      });
    }
  
    return result;
  };