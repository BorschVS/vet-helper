import { Link, useLocation } from "react-router-dom";
import { generateBreadcrumbs } from "../../router/utils/generateBreadcrubms";

export default function Breadcrumbs() {
  const location = useLocation();
  const breadcrumbs = generateBreadcrumbs(location);

  if (breadcrumbs.length <= 1) {
    return null;
  }

  return (
    <nav className="flex mb-4" aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center space-x-2">
        {breadcrumbs.map((crumb, index) => (
          <li key={crumb.path} className="flex items-center">
            {index > 0 && (
              <span className="mx-2 text-text-tertiary">/</span>
            )}
            {crumb.isActive ? (
              <span className="text-text-secondary" aria-current="page">
                {crumb.name}
              </span>
            ) : (
              <Link
                to={crumb.path}
                className="text-accent-primary hover:text-accent-secondary"
              >
                {crumb.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}