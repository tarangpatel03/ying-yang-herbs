import React from "react";
import { twMerge } from "tailwind-merge";

type Props = React.ComponentProps<"p">;

export const WebText = ({ children, className }: Props) => {
  return (
    <p className={twMerge("text-text font-sans", className)}>{children}</p>
  );
};
