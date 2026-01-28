import { BrowserRouter } from "react-router-dom";
import { RouteStateProvider } from "./router/providers/RouterStateProvider";
import AppRouter from "./router";
import "./App.css";

const basename = import.meta.env.BASE_URL || "/";

const App = () => {
  return (
    <BrowserRouter basename={basename}>
      <RouteStateProvider>
        <AppRouter />
      </RouteStateProvider>
    </BrowserRouter>
  );
};

export default App;
