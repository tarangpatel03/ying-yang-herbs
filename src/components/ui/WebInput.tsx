import { EyeClosedIcon, EyeIcon } from "lucide-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

import { BUTTON_TYPES } from "@/types";

import { WebButton } from "./WebButton";
import { WebText } from "./WebText";

type Props = React.ComponentProps<"input">;

export const WebInput = ({
  name,
  value,
  type,
  onChange,
  required,
  className,
  placeholder,
}: Props) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const isPassword = type === "password";

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col gap-2">
      <WebText className="font-normal text-[16px]">{name}</WebText>
      <div className="border align-middle flex border-border focus-within:border-primary py-3 px-4 font-sans text-[16px] font-normal rounded-[10px]">
        <input
          value={value}
          onChange={onChange}
          type={isPassword && showPassword ? "text" : type}
          required={required}
          placeholder={placeholder}
          className={twMerge(
            "focus:outline-none focus:ring-0 flex-1",
            className,
          )}
        />
        {isPassword && (
          <WebButton buttonType={BUTTON_TYPES.TEXT} onClick={togglePassword}>
            {showPassword ? <EyeClosedIcon size={25} /> : <EyeIcon size={25} />}
          </WebButton>
        )}
      </div>
    </div>
  );
};
