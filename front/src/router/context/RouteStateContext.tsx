import { createContext } from "react";
import { RouteStates } from "../../types/types/routes";

export const RouteStateContext = createContext<{
  states: RouteStates;
  setRouteState: (path: string, state: unknown) => void;
  getRouteState: <T>(path: string) => T | undefined;
  clearRouteState: (path: string) => void;
}>({
  states: {},
  setRouteState: () => {},
  getRouteState: () => undefined,
  clearRouteState: () => {},
});
