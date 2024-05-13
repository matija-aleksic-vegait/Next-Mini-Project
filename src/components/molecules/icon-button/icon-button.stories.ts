import { IconButton } from "./icon-button";

export default {
  title: "molecules/IconButtons",
  component: IconButton,
  parameters: {},
  tags: ["autodocs"],
};

export const PlusButton = {
  args: {
    label: "New Element",
    type: "button",
    ariaLabel: "New Element",
    className: "btn btn--secondary btn--secondary--icon-left gray-hover",
    src: "/icons/plus.svg",
    alt: "add",
    onClick: () => alert("New element button clicked"),
  },
};
