import { Link, NavLink } from "react-router-dom";

export function Header() {
  const navLinkClass = ({ isActive }) =>
    `btn btn-ghost normal-case text-sm md:text-base ${
      isActive ? "text-primary" : "text-base-content/80"
    }`;

  return (
    <header className="navbar bg-base-100/80 backdrop-blur border-b border-base-300 sticky top-0 z-20">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost text-xl font-semibold tracking-tight">
          Edward Park
        </Link>
      </div>

      <div className="navbar-end hidden md:flex">
        <nav className="menu menu-horizontal px-1 gap-1">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/resources" className={navLinkClass}>
            Resources
          </NavLink>
          <a
            className="btn btn-primary btn-sm md:btn-md"
            href="https://cs61b.edwardpark.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            CS61B Resources
          </a>
        </nav>
      </div>

      <div className="navbar-end md:hidden">
        <details className="dropdown dropdown-end">
          <summary className="btn btn-ghost btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </summary>
          <ul className="menu dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 gap-1">
            <li>
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/resources" className={navLinkClass}>
                Resources
              </NavLink>
            </li>
            <li>
              <a
                className="btn btn-primary"
                href="https://cs61b.edwardpark.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                CS61B Resources
              </a>
            </li>
          </ul>
        </details>
      </div>
    </header>
  );
}
