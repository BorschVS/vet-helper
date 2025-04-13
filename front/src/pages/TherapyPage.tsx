import { useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { navigation } from "../styles";
import { therapySubRoutes } from "../router/routes";

const TherapyPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const activeTab = location.pathname.split("/").pop() || "";

  useEffect(() => {
    if (location.pathname === "/therapy" && therapySubRoutes.length > 0) {
      navigate(`/therapy/${therapySubRoutes[0].path}`);
    }
  }, [location.pathname, navigate]);

  return (
    <div className="px-5">
      <div className={navigation.tabs.container}>
        <ul className={navigation.tabs.list}>
          {therapySubRoutes
            .filter((route) => route.showInNavigation)
            .sort((a, b) => (a.order || 0) - (b.order || 0))
            .map((route) => {
              const isActive = activeTab === route.path;
              return (
                <li className={navigation.tabs.item} key={route.path}>
                  <Link
                    to={`/therapy/${route.path}`}
                    className={`${navigation.tabs.link.base} ${
                      isActive ? navigation.tabs.link.active : navigation.tabs.link.inactive
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
