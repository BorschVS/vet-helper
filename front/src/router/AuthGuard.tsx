import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AppRouteObject } from "./interfaces";

interface AuthGuardProps {
  children: ReactNode;
  route: AppRouteObject;
}

/**
 * Хук для проверки, авторизован ли пользователь
 */
function useAuth() {
  // Пример хука аутентификации
  return {
    isAuthenticated: true, // Заглушка
    hasPermission: (permission: string) => true, // Заглушка
  };
}

/**
 * Компонент для защиты маршрутов, требующих авторизации
 */
export default function AuthGuard({ children, route }: AuthGuardProps) {
  const { isAuthenticated, hasPermission } = useAuth();
  const location = useLocation();
  
  // Проверка аутентификации
  if (route.requiresAuth && !isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  
  // Проверка разрешений
  if (route.permissions?.length && !route.permissions.every(p => hasPermission(p))) {
    return <Navigate to="/access-denied" replace />;
  }
  
  return <>{children}</>;
}