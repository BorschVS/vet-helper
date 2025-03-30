import { Link, useLocation } from "react-router-dom";
import { AppRouteObject } from "../../router/interfaces";
import { getNavigationItems } from "../../router/utils/getNavigationRoutes";

export default function Navigation() {
  const navItems = getNavigationItems();
  const location = useLocation();

  const isActive = (path: string): boolean => {
    if (path === "") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(`/${path}`);
  };

  return (
    <nav>
      <div className="hidden md:flex flex-col">
        {navItems.map((item: AppRouteObject) => (
          <Link
            key={item.path}
            to={`/${item.path}`}
            className={`text-start py-2 px-4 transition duration-300 rounded-md ${
              isActive(item.path)
                ? "bg-tertiary-bg font-medium text-accent-primary"
                : "hover:text-accent-primary hover:bg-secondary-bg"
            }`}
          >
            {item.name}
            {item.icon && <span className="ml-2">{item.icon}</span>}
          </Link>
        ))}
      </div>
    </nav>
  );
}
