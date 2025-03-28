import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getNavigationRoutes } from "../../router/utils/getNavigationRoutes";

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navRoutes = getNavigationRoutes();

  return (
    <div className="md:hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center p-2" aria-label="Меню навигации">
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? <path d="M6 18L18 6M6 6l12 12"></path> : <path d="M4 6h16M4 12h16M4 18h16"></path>}
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-primary-bg border-t border-b border-border-primary shadow-md z-50">
          <nav className="flex flex-col p-4">
            {navRoutes.map((route) => (
              <Link
                key={route.path}
                to={route.path || "/"}
                className={`px-4 py-2 rounded-md ${
                  location.pathname === route.path
                    ? "bg-bg-secondary text-accent-primary font-medium"
                    : "hover:bg-bg-secondary"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {route.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
