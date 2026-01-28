import { matchPath } from "react-router-dom";

import { getAllRoutes } from "../utils/getAllRoutes";

export function generateBreadcrumbs(location: Location): Array<{
    path: string;
    name: string;
    isActive: boolean;
  }> {
    const allRoutes = getAllRoutes();
    const pathSegments = location.pathname.split('/').filter(Boolean);
    
    const breadcrumbs = [{ path: '/', name: 'Главная', isActive: location.pathname === '/' }];
    
    let currentPath = '';
    
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      
      const matchedRoute = allRoutes.find(route => 
        matchPath({ path: route.path || "", end: true }, currentPath)
      );
      
      if (matchedRoute && matchedRoute.name) {
        breadcrumbs.push({
          path: currentPath,
          name: matchedRoute.name,
          isActive: index === pathSegments.length - 1
        });
      }
    });
    
    return breadcrumbs;
  }