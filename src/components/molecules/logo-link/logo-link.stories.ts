import ImageConstants from "@/constants/image-constants";
import { LogoLink } from "@molecules";
import "@css";

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
    height: ImageConstants.LOGO_SM_HEIGHT,
    width: ImageConstants.LOGO_SM_WIDTH,
  },
};

export const LogoLinkFooter = {
  args: {
    href: "https://www.vegaitglobal.com/",
    src: "/logos/logo-md.svg",
    alt: "VegaIT Logo",
    height: ImageConstants.LOGO_MD_HEIGHT,
    width: ImageConstants.LOGO_MD_WIDTH,
  },
};
