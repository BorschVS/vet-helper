import { BrowserRouter } from "react-router-dom";
import { RouteStateProvider } from "./router/providers/RouterStateProvider";
import AppRouter from "./router";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <RouteStateProvider>
        <AppRouter />
      </RouteStateProvider>
    </BrowserRouter>
  );
};

export default App;
