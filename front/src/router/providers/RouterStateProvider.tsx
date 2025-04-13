import { useState } from "react";
import { RouteStateContext } from "../context/RouteStateContext";
import { RouteStates } from "../../types/types/routes";
import { RouteStateProviderProps } from "../../types/interfaces/routes";

export function RouteStateProvider({ children }: RouteStateProviderProps) {
  const [states, setStates] = useState<RouteStates>({});

  const setRouteState = (path: string, state: unknown) => {
    setStates((prev) => ({
      ...prev,
      [path]: state,
    }));
  };

  const getRouteState = <T,>(path: string): T | undefined => {
    return states[path] as T | undefined;
  };

  const clearRouteState = (path: string) => {
    setStates((prev) => {
      const newStates = { ...prev };
      delete newStates[path];
      return newStates;
    });
  };

  return (
    <RouteStateContext.Provider value={{ states, setRouteState, getRouteState, clearRouteState }}>
      {children}
    </RouteStateContext.Provider>
  );
}
