import { InputField } from "./input-field";

export default {
  title: "atoms/InputField",
  component: InputField,
  parameters: {},
  tags: ["autodocs"],
};

export const SearchField = {
  args: {
    id: "project-search",
    className: "input-box__input-field input-box__input-field--icon--left",
    placeholder: "Search",
    type: "search",
    ariaLabel: "Search Projects",
    includeLabel: false,
  },
};

export const FormField = {
  args: {
    id: "project-name",
    className: "input-box__input-field",
    placeholder: "Name",
    type: "text",
    ariaLabel: "Name",
    includeLabel: true,
  },
};
