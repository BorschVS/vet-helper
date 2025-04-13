import { Suspense } from "react";
import { Routes } from "react-router-dom";
import { routes } from "./routes";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import { renderRoutes } from "./utils/renderRoutes";
import PageTitleManager from "../components/PageTitleManager";
import Spinner from "../components/Loaders/Spinner";

const AppRouter = () => {
  return (
    <>
      <PageTitleManager routes={routes} />
      <ErrorBoundary fallback={<div>Щось пішло не так, будь-ласка, оновіть сторінку</div>}>
        <Suspense fallback={<Spinner />}>
          <Routes>{renderRoutes(routes)}</Routes>
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default AppRouter;
