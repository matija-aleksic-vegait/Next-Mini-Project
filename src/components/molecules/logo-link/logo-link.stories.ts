import { LogoLink } from "./logo-link";

export default {
  title: "molecules/Logo Links",
  component: LogoLink,
  parameters: {},
  tags: ["autodocs"],
};

export const LogoLinkHeader = {
  args: {
    href: "https://www.vegaitglobal.com/",
    src: "/logos/logo-sm.svg",
    alt: "VegaIT Logo",
  },
};

export const LogoLinkFooter = {
  args: {
    href: "https://www.vegaitglobal.com/",
    src: "/logos/logo-md.svg",
    alt: "VegaIT Logo",
  },
};
