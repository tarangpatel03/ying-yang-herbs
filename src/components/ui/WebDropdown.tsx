import { twMerge } from "tailwind-merge";

import { WebText } from "./WebText";

type Props = React.ComponentProps<"select"> & {
  name: string;
  options: string[];
};

export const WebDropdown = ({
  name,
  options,
  className,
  value,
  onChange,
}: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <WebText className="font-normal text-[16px]">{name}</WebText>
      <div className="border align-middle flex border-border focus-within:border-primary py-3 px-4 font-sans text-[16px] font-normal rounded-[10px]">
        <select
          value={value}
          onChange={onChange}
          className={twMerge(
            "focus:outline-none focus:ring-0 flex-1",
            className,
          )}
        >
          {options.map((opt) => (
            <option value={opt}>{opt}</option>
          ))}
        </select>
      </div>
    </div>
  );
};
