import { useState } from "react";
import { Link } from "react-router-dom";
import { routes } from "../../router/routes";
import { getAllRoutes } from "../../router/utils/getAllRoutes";

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = getAllRoutes(routes);

  return (
    <div className="md:hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="mobile-menu-button p-4 focus:outline-none"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="mobile-menu absolute top-0 left-0 w-full bg-white z-50">
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="font-bold">Menu</h2>
            <button onClick={() => setIsOpen(false)}>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="p-4">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={`/${item.path}`}
                className="block py-2 px-4 text-sm hover:bg-gray-200"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
                {item.icon && <span className="ml-2">{item.icon}</span>}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNavigation;