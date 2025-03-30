import { AppRouteObject } from "../interfaces";

export const findRouteByPath = (
  path: string,
  currentRoutes: AppRouteObject
): AppRouteObject | undefined => {
  if (currentRoutes.path === path) return currentRoutes;

  if (!currentRoutes.children) return undefined;

  for (const child of currentRoutes.children) {
    const fullPath = `${currentRoutes.path === "/" ? "" : currentRoutes.path}/${
      child.path
    }`.replace(/\/\//g, "/");

    if (fullPath === path) return child;

    const found = findRouteByPath(path, child);
    if (found) return found;
  }

  return undefined;
};
