import { Link, useLocation } from "react-router-dom";
import { getNavigationRoutes } from "../../router/utils/getNavigationRoutes";

export default function Navigation() {
  const location = useLocation();
  const navRoutes = getNavigationRoutes();

  return (
    <nav className="hidden md:flex space-x-4">
      {navRoutes.map((route) => (
        <Link
          key={route.path}
          to={route.path || "/"}
          className={`transition-colors ${
            location.pathname === route.path ? "text-accent-primary font-medium" : "hover:text-accent-primary"
          }`}
        >
          {route.name}
        </Link>
      ))}
    </nav>
  );
}
