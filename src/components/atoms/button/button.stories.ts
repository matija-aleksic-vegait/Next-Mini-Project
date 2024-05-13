import { Button } from "./button";

export default {
  title: "atoms/Button",
  component: Button,
  parameters: {},
  tags: ["autodocs"],
};

export const Primary = {
  args: {
    label: "Button",
    type: "button",
    className: "btn btn--primary",
    onClick: () => alert("Button clicked"),
  },
};

export const Secondary = {
  args: {
    label: "Button",
    type: "button",
    className: "btn btn--secondary",
    onClick: () => alert("Button clicked"),
  },
};

export const NewElement = {
  args: {
    label: "New Element",
    type: "button",
    className: "btn btn--secondary btn--secondary--icon-left gray-hover",
    onClick: () => alert("Button clicked"),
  },
};

export const AlphabetLetterDefault = {
  args: {
    label: "A",
    type: "button",
    className: "application-content__alphabet__letter yellow-hover",
    onClick: () => alert("Button clicked"),
  },
};

export const AlphabetLetterSelected = {
  args: {
    label: "A",
    type: "button",
    className:
      "application-content__alphabet__letter application-content__alphabet__letter--selected yellow-hover",
    onClick: () => alert("Button clicked"),
  },
};

export const AlphabetLetterDisabled = {
  args: {
    label: "A",
    type: "button",
    className:
      "application-content__alphabet__letter application-content__alphabet__letter--disabled",
    onClick: () => alert("Button clicked"),
  },
};
