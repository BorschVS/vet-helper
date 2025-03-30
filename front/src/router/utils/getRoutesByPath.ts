import { AppRouteObject } from "../interfaces";

/**
 * Find a route object by path
 * @param path Path to search for
 * @param routeObj Route object to search in
 * @returns Found route or undefined
 */
export function getRouteByPath(
  path: string,
  routeObj: AppRouteObject
): AppRouteObject | undefined {
  const normalizedPath = path.startsWith('/') ? path.substring(1) : path;
  const routePath = routeObj.path.startsWith('/') ? routeObj.path.substring(1) : routeObj.path;
  
  if (normalizedPath === routePath || (routePath === '' && normalizedPath === '')) {
    return routeObj;
  }
  
  if (routeObj.children) {
    for (const child of routeObj.children) {
      const childPath = child.path.startsWith('/') ? child.path.substring(1) : child.path;
      const fullChildPath = routePath === '' 
        ? childPath 
        : `${routePath}/${childPath}`;
      
      if (normalizedPath === fullChildPath) {
        return child;
      }
      
      const found = getRouteByPath(path, child);
      if (found) {
        return found;
      }
    }
  }
  
  return undefined;
}