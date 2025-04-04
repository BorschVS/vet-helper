import { useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

import { therapySubRoutes } from "../router/routes";

const TherapyPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const activeTab = location.pathname.split("/").pop() || "";

  useState(() => {
    if (location.pathname === "/therapy" && therapySubRoutes.length > 0) {
      navigate(`/therapy/${therapySubRoutes[0].path}`);
    }
  }, [location.pathname, navigate]);

  return (
    <div className="therapy-page">

      {/* Вкладки */}
      <div className="border-b border-gray-200 dark:border-gray-700 mb-6">
        <ul className="flex flex-wrap -mb-px">
          {therapySubRoutes
            .filter((route) => route.showInNavigation)
            .sort((a, b) => (a.order || 0) - (b.order || 0))
            .map((route) => {
              const isActive = activeTab === route.path;
              return (
                <li className="mr-2" key={route.path}>
                  <Link
                    to={`/therapy/${route.path}`}
                    className={`inline-block py-4 px-6 rounded-t-lg ${
                      isActive
                        ? "text-primary-text border-b-2 border-blue-500 font-medium"
                        : "text-text-tertiary hover:text-primary-text hover:border-b-2 hover:border-gray-300"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {route.name}
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>

      <div className="tab-content">
        <Outlet />
      </div>
    </div>
  );
};

export default TherapyPage;
