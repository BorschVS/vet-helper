import { BrowserRouter } from "react-router-dom";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
import Navigation from "./components/Navigation/Navigation";
import MobileNavigation from "./components/MobileNavigation/MobileNavigation";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrubms";
import { RouteStateProvider } from "./router/providers/RouterStateProvider";
import AppRouter from "./router";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <RouteStateProvider>
        <div className="min-h-screen w-full bg-primary-bg text-primary-text flex flex-col transition-colors">
          <header className="py-4 px-6 flex justify-between items-center border-b border-border-primary">
            <MobileNavigation />
            <h1 className="text-xl font-bold mr-6">Vet Helper</h1>
            <Navigation />
            <ThemeToggle />
          </header>

          <main className="flex-1 p-6">
            <Breadcrumbs />
            <AppRouter />
          </main>

          <footer className="py-4 px-6 border-t border-border-primary text-center text-text-tertiary">
            <p>© {new Date().getFullYear()} Vet Helper. Все права защищены.</p>
          </footer>
        </div>
      </RouteStateProvider>
    </BrowserRouter>
  );
}

export default App;
