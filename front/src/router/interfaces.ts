import { ReactNode } from "react";
import type { RouteObject as RouterRouteObject } from "react-router-dom";

export interface AppRouteObject extends Omit<RouterRouteObject, "children"> {
  // Уникальный идентификатор маршрута
  name?: string;
  // Путь маршрута
  path: string;

  // React-элемент для отрисовки
  element: ReactNode;

  // Показывать ли элемент в навигации
  showInNavigation?: boolean;

  // Требуется ли аутентификация для доступа
  requiresAuth?: boolean;

  // Разрешения, необходимые для доступа к маршруту
  permissions?: string[];

  // Порядок отображения в навигации
  order?: number;

  // Иконка для пункта навигации
  icon?: ReactNode;

  // Метаданные для хлебных крошек
  breadcrumb?: {
    title: string;
    parent?: string;
  };

  // Дочерние маршруты (вложенные)
  children?: AppChildrenRouteObject[];

  // Метка для группировки в навигации
  group?: string;

  // Дополнительная информация для страницы
  meta?: {
    title?: string;
    description?: string;
    [key: string]: string | undefined;
  };

  // Указывает, является ли этот маршрут макетом (layout)
  isLayout?: boolean;
}

export interface AppChildrenRouteObject extends AppRouteObject {
  name: string;
}

export interface AuthGuardProps {
  children: ReactNode;
  route: AppRouteObject;
}
