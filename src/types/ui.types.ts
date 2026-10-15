export const BUTTON_TYPES = {
  TEXT: "text",
  OUTLINE: "outline",
  PRIMARY: "primary",
} as const;

export type ButtonType = (typeof BUTTON_TYPES)[keyof typeof BUTTON_TYPES];
