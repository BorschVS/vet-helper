import { useEffect } from "react";
import { getRouteByPath } from "../router/utils/getRoutesByPath";
import { useLocation } from "react-router-dom";
import { PageTitleManagerProps } from "../types/interfaces/routes";

const PageTitleManager: React.FC<PageTitleManagerProps> = ({ routes }) => {
  const location = useLocation();

  useEffect(() => {
    const route = getRouteByPath(location.pathname, routes);

    if (route?.meta?.title) {
      document.title = route.meta.title;
    } else {
      document.title = "Vet Helper";
    }

    return () => {};
  }, [routes, location.pathname]);

  return null;
};

export default PageTitleManager;
