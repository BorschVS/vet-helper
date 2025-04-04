import ThemeToggle from "../components/ThemeToggle/ThemeToggle";
import Navigation from "../components/Navigation/Navigation";
import MobileNavigation from "../components/MobileNavigation/MobileNavigation";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrubms";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="app-layout">
      <header className="flex flex-col justify-start">
        <div className="flex justify-between w-full px-5">
          <Link to="/" className="py-4 px-2 text-lg font-semibold">
            <div className="flex items-center font-bold text-xl shadow-md">
              <span className="bg-gray-100 dark:bg-gray-800 text-accent-primary px-3 py-1 rounded-l-md border border-accent-primary border-r-0">
                Vet
              </span>
              <span className="bg-accent-primary text-white px-3 py-1 rounded-r-md border border-accent-primary">
                Helper
              </span>
            </div>
          </Link>
          <div className="flex flex-row items-center space-x-4">
            <ThemeToggle />
            <MobileNavigation />
          </div>
        </div>
        <div className="">
          <Breadcrumbs />
        </div>
      </header>
      <div className="flex">
        <aside className="hidden md:flex w-[15%] pl-5">
          <Navigation />
        </aside>
        <main className="w-[100%]">
          <Outlet />
        </main>
      </div>
      <footer>{/* Footer content if needed */}</footer>
    </div>
  );
};

export default Layout;
