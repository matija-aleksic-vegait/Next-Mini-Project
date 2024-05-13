import { Paragraph } from "./paragraph";

export default {
  title: "atoms/Paragraph",
  component: Paragraph,
  parameters: {},
  tags: ["autodocs"],
};

export const Footer = {
  args: {
    label:
      "Co-creators. Passionate innovators. We're your software development partners, working at the cutting edge of digital product development. We have the technical expertise and domain experience to help you push boundaries, regardless of your industry.",
    className: "application-footer__content text-md",
  },
};

export const FooterCopyright = {
  args: {
    label: "© Copyright Vega IT. All rights reserved.",
    className: "application-footer__copyright text-md",
  },
};

export const TableHeader = {
  args: {
    className: "text-lg",
    label:
      "Here, you have full control over your project database, empowering you to efficiently organize and maintain your projects.",
  },
};

export const Status = {
  args: {
    className: "loading-status text-align-center",
    label: "Could not find requested resource",
  },
};

export const Error = {
  args: {
    className: "loading-status text-red text-align-center",
    label: "Error message",
  },
};
