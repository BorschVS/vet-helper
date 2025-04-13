import { Route } from "react-router-dom";
import { AppRouteObject } from "../../types/interfaces/routes";

export const renderRoutes = (route: AppRouteObject) => {
  if (!route.children || route.children.length === 0) {
    return <Route key={route.path} path={route.path} element={route.element} />;
  }

  return (
    <Route key={route.path} path={route.path} element={route.element}>
      {route.children.map((child) => renderRoutes(child))}
    </Route>
  );
};
