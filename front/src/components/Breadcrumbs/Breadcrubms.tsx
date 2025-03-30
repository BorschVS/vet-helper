import { Link, useLocation } from "react-router-dom";
import { routes } from "../../router/routes";
import { findRouteByPath } from "../../router/utils/findRouteByPath";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const pathSegments = pathname.split("/").filter(Boolean);
  const breadcrumbs = pathSegments.map((_, index) => {
    const path = "/" + pathSegments.slice(0, index + 1).join("/");
    const route = findRouteByPath(path, routes);

    return {
      path,
      label: route?.breadcrumb?.title || route?.name || pathSegments[index],
    };
  });

  breadcrumbs.unshift({
    path: "/",
    label: "Головна",
  });

  return (
    <div className="px-5 my-2">
      <nav className="text-md">
        <ol className="list-none py-2 px-4 flex flex-row bg-secondary-bg rounded-md">
          {breadcrumbs.map((breadcrumb, index) => (
            <li key={breadcrumb.path} className="flex flex-row items-start">
              {index > 0 && <span className="mx-2 text-gray-500">/</span>}
              {index === breadcrumbs.length - 1 ? (
                <span className="">{breadcrumb.label}</span>
              ) : (
                <Link
                  to={breadcrumb.path}
                  className="text-accent-primary hover:text-accent-hover"
                >
                  {breadcrumb.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumbs;
