import { createContext } from "react";

type RouteStates = Record<string, unknown>;

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

