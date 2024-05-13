import { Span } from "./span";

export default {
  title: "atoms/Span",
  component: Span,
  parameters: {},
  tags: ["autodocs"],
};

export const VisuallyHidden = {
  args: {
    label: "VisuallyHidden",
    className: "visually-hidden",
  },
};

export const ListItemInfoText = {
  args: {
    label: "List Item Info Text",
    className: "application-content__list__item__info-text",
  },
};

export const ValidationErrorMessage = {
  args: {
    label: "Validation Error Message",
    className: "validation-error-message",
  },
};
