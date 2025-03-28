import { Suspense, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { routes } from "./routes";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import { AppRouteObject } from "./interfaces";
import { getRouteByPath } from "./utils/getRoutesByPath";
import { getAllRoutes } from "./utils/getAllRoutes";

const LoadingFallback = () => (
  <div className="flex justify-center items-center h-64">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent-primary"></div>
    <span className="sr-only">Загрузка...</span>
  </div>
);

const renderRoutes = (routes: AppRouteObject[]) => {
  return routes.map((route) => {
    if (route.children?.length) {
      return (
        <Route key={route.path} path={route.path} element={route.element}>
          {renderRoutes(route.children)}
        </Route>
      );
    }

    return <Route key={route.path} path={route.path} element={route.element} />;
  });
};

/**
 * Компонент для управления заголовком страницы на основе текущего маршрута
 */
function PageTitleManager() {
  const location = useLocation();

  useEffect(() => {
    const route = getRouteByPath(location.pathname, getAllRoutes());

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
}

export default function AppRouter() {
  return (
    <>
      <PageTitleManager />
      <ErrorBoundary fallback={<div>Что-то пошло не так. Пожалуйста, обновите страницу.</div>}>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>{renderRoutes(routes)}</Routes>
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
