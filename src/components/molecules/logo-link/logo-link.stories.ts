import { LogoLink } from "./logo-link";

export default {
  title: "atoms/Logo Links",
  component: LogoLink,
  parameters: {},
  tags: ["autodocs"],
};

export const LogoLinkHeader = {
  args: {
    href: "https://www.vegaitglobal.com/",
    ariaLabel: "Go to VegaIT Website",
    src: "/logos/logo-sm.svg",
    alt: "VegaIT Logo",
  },
};

export const LogoLinkFooter = {
  args: {
    href: "https://www.vegaitglobal.com/",
    ariaLabel: "Go to VegaIT Website",
    src: "/logos/logo-md.svg",
    alt: "VegaIT Logo",
  },
};
