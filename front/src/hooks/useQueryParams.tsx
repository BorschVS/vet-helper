import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";

/**
 * Хук для работы с параметрами запроса URL
 */
export default function useQueryParams<T extends Record<string, string>>() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Преобразуем URLSearchParams в объект
  const params = useMemo(() => {
    const result: Record<string, string> = {};
    for (const [key, value] of searchParams.entries()) {
      result[key] = value;
    }
    return result as T;
  }, [searchParams]);
  
  // Функция для обновления параметров
  const updateParams = (updates: Partial<T>) => {
    const newParams = { ...params, ...updates };
    
    Object.keys(newParams).forEach(key => {
      if (newParams[key] === undefined) {
        delete newParams[key];
      }
    });
    
    setSearchParams(newParams);
  };
  
  return [params, updateParams] as const;
}