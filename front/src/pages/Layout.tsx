import ThemeToggle from "../components/ThemeToggle/ThemeToggle";
import Navigation from "../components/Navigation/Navigation";
import MobileNavigation from "../components/MobileNavigation/MobileNavigation";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrubms";
import { Link, Outlet } from "react-router-dom";
import Logo from "../components/Logo";
import { layout } from "../styles";

const Layout = () => {
  return (
    <div className={layout.appLayout.container}>
      <header className={layout.appLayout.header.container}>
        <div className={layout.appLayout.header.top}>
          <Link to="/" className={layout.appLayout.header.logo}>
            <Logo />
          </Link>
          <div className={layout.appLayout.header.mobileMenu}>
            <ThemeToggle />
            <MobileNavigation />
          </div>
        </div>
        <div>
          <Breadcrumbs />
        </div>
      </header>
      <div className={layout.appLayout.main.container}>
        <aside className={layout.appLayout.main.sidebar}>
          <Navigation />
        </aside>
        <main className={layout.appLayout.main.content}>
          <Outlet />
        </main>
      </div>
      <footer className={layout.appLayout.footer.container}>
        <div className={layout.appLayout.footer.text}>© 2025 Vet Helper - Система керування ветеринарною клінікою</div>
      </footer>
    </div>
  );
};

export default Layout;
