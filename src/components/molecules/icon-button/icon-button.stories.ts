import { IconButton } from "./icon-button";

export default {
  title: "molecules/IconButtons",
  component: IconButton,
  parameters: {},
  tags: ["autodocs"],
};

export const PlusButton = {
  args: {
    type: "button",
    className: "btn btn--secondary btn--secondary--icon-left gray-hover",
    src: "/icons/plus.svg",
    alt: "add",
    onClick: () => alert("New element button clicked"),
  },
};

export const SearchButton = {
  args: {
    type: "button",
    className: "input-box__btn input-box__btn--left grey-hover",
    src: "/icons/search.svg",
    alt: "search",
    onClick: () => alert("Button clicked"),
  },
};
