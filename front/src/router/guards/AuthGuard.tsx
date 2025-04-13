import { Navigate, useLocation } from "react-router-dom";
import { AuthGuardProps } from "../../types/interfaces/routes";

const useAuth = () => {
  return {
    isAuthenticated: true,
    hasPermission: (permission: string) => true,
  };
};

const AuthGuard = ({ children, route }: AuthGuardProps) => {
  const { isAuthenticated, hasPermission } = useAuth();
  const location = useLocation();

  if (route.requiresAuth && !isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (route.permissions?.length && !route.permissions.every((p) => hasPermission(p))) {
    return <Navigate to="/access-denied" replace />;
  }

  return <>{children}</>;
};

export default AuthGuard;
