import { Button } from "@/components/atoms/button/button";
import { Head } from "@/components/atoms/head/head";
import { Li } from "@/components/atoms/li/li";
import { Nav } from "@/components/atoms/nav/nav";
import { RouterLink } from "@/components/atoms/router-link/router-link";
import { Ul } from "@/components/atoms/ul/ul";
import { IconButton } from "@/components/molecules/icon-button/icon-button";
import { LogoLink } from "@/components/molecules/logo-link/logo-link";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <Head className="application-header">
      <LogoLink
        href="#"
        aria-label="Go to VegaIT Website"
        src="/logos/logo-sm.svg"
        alt="VegaIT Logo"
      />

      <Nav ariaLabel="Main Menu" className="application-header__menu">
        <Ul
          role="list"
          className="application-header__menu__list"
          id="application-menu"
        >
          <Li>
            <RouterLink
              href="/"
              label="Timesheet"
              className="application-header__menu__list__item shadow-hover"
            />
          </Li>
          <Li>
            <RouterLink
              href="/clients"
              label="Clients"
              className="application-header__menu__list__item shadow-hover"
            />
          </Li>
          <Li>
            <RouterLink
              href="/projects"
              label="Projects"
              className="application-header__menu__list__item shadow-hover"
            />
          </Li>
          <Li>
            <RouterLink
              href="/reports"
              label="Reports"
              className="application-header__menu__list__item shadow-hover"
            />
          </Li>
        </Ul>
      </Nav>

      <IconButton
        type="button"
        className="application-header__menu__icon"
        aria-controls="application-menu"
        src="/icons/menu.svg"
        alt="menu"
      />

      <Button type="button" className="btn btn--primary" aria-label="Logout">
        Logout
      </Button>
    </Head>
  );
};
