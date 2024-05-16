import ImageConstants from "@/constants/image-constants";
import { Button, Head, Li, Nav, RouterLink, Ul } from "@atoms";
import { IconButton, LogoLink } from "@molecules";

export const Header: React.FC = () => {
  return (
    <Head className="application-header">
      <LogoLink
        href="#"
        aria-label="Go to VegaIT Website"
        src="/logos/logo-sm.svg"
        alt="VegaIT Logo"
        height={ImageConstants.LOGO_SM_HEIGHT}
        width={ImageConstants.LOGO_SM_WIDTH}
      />

      <Nav aria-label="Main Menu" className="application-header__menu">
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
