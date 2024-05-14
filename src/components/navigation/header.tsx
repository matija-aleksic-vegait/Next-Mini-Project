import Link from "next/link";

function Header() {
  return (
    <header className="application-header">
      <a href="#" aria-label="Go to VegaIT Website">
        {/* https://www.vegaitglobal.com/ */}
        <img src="/logos/logo-sm.svg" alt="VegaIT Logo" />
      </a>
      <nav aria-label="Main Menu" className="application-header__menu">
        <ul
          role="list"
          className="application-header__menu__list"
          id="application-menu"
        >
          <li>
            <Link
              href="/"
              className="application-header__menu__list__item shadow-hover"
            >
              Timesheet
            </Link>
          </li>
          <li>
            <Link
              href="/clients"
              className="application-header__menu__list__item shadow-hover"
            >
              Clients
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="application-header__menu__list__item shadow-hover"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/reports"
              className="application-header__menu__list__item shadow-hover"
            >
              Reports
            </Link>
          </li>
        </ul>
      </nav>
      <button
        type="button"
        className="application-header__menu__icon"
        aria-controls="application-menu"
      >
        <img src="/icons/menu.svg" alt="menu" />
      </button>
      <button type="button" className="btn btn--primary" aria-label="Logout">
        Logout
      </button>
    </header>
  );
}

export default Header;
