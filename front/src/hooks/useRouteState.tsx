import { useContext } from "react";
import { RouteStateContext } from "../router/context/RouteStateContext";

export function useRouteState<T>(path: string, initialState?: T) {
  const { getRouteState, setRouteState } = useContext(RouteStateContext);

  const state = getRouteState<T>(path) ?? initialState;

  const setState = (newState: T) => {
    setRouteState(path, newState);
  };

  return [state, setState] as const;
}
