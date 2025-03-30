import { Suspense, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { routes } from "./routes";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import { AppRouteObject } from "./interfaces";
import { getRouteByPath } from "./utils/getRoutesByPath";

const LoadingFallback = () => (
  <div className="flex justify-center items-center h-64">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent-primary"></div>
    <span className="sr-only">Загрузка...</span>
  </div>
);

const renderRoutes = (route: AppRouteObject) => {
  if (!route.children || route.children.length === 0) {
    return <Route key={route.path} path={route.path} element={route.element} />;
  }

  return (
    <Route key={route.path} path={route.path} element={route.element}>
      {route.children.map(child => renderRoutes(child))}
    </Route>
  );
};

const PageTitleManager = () => {
  const location = useLocation();

  useEffect(() => {
    const route = getRouteByPath(location.pathname, routes);

    if (route?.meta?.title) {
      document.title = route.meta.title;
    } else {
      document.title = "Vet Helper";
    }

    return () => {
      // Cleanup if needed
    };
  }, [location.pathname]);

  return null;
};

const AppRouter = () => {
  return (
    <>
      <PageTitleManager />
      <ErrorBoundary
        fallback={<div>Щось пішло не так, будь-ласка, оновіть сторінку</div>}
      >
        <Suspense fallback={<LoadingFallback />}>
          <Routes>{renderRoutes(routes)}</Routes>
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default AppRouter;
