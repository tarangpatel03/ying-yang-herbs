import { twMerge } from "tailwind-merge";

import { BUTTON_TYPES } from "@/types";

import type { ButtonType } from "@/types";

type Props = React.ComponentProps<"button"> & {
  buttonType: ButtonType;
};

export const WebButton = ({
  buttonType,
  className,
  children,
  onClick,
}: Props) => {
  if (buttonType === BUTTON_TYPES.TEXT) {
    return (
      <button
        onClick={onClick}
        className={twMerge(
          "font-sans text-text font-normal text-[16px]",
          className,
        )}
      >
        {children}
      </button>
    );
  }

  if (buttonType === BUTTON_TYPES.PRIMARY) {
    return (
      <button
        onClick={onClick}
        className={twMerge(
          "font-sans text-text font-medium text-[16px] bg-button-bg px-5 py-[7.5px] rounded-4xl",
          className,
        )}
      >
        {children}
      </button>
    );
  }

  return <button></button>;
};
