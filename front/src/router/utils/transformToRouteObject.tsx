import { AppChildrenRouteObject, PageDefinition } from "../../types/interfaces/routes";

export const transformToRouteObject = (page: PageDefinition): AppChildrenRouteObject => {
  const { path, name, showInNavigation = false, order, description, children } = page;

  const routeObject: AppChildrenRouteObject = {
    path,
    name,
    element: <page.component />,
    showInNavigation,
    order,
    meta: {
      title: name,
      description: description || name,
    },
  };

  if (children && children.length > 0) {
    routeObject.children = children.map(transformToRouteObject);
  }

  return routeObject;
};
