import { BUTTON_TYPES } from "@/types";

import { WebButton } from "./WebButton";
import { WebText } from "./WebText";

type Props = {
  name: string;
  value: boolean;
  onChange: (...event: any[]) => void;
  error?: string | null;
};

export const WebSwitch = ({ name, error, value, onChange }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <WebText className="font-normal text-[16px]">{name}</WebText>
      <div
        className={`border align-middle flex border-border ${error && "border-red-500"}  p-0.5 text-[16px] font-normal rounded-lg max-w-min`}
      >
        <WebButton
          buttonType={BUTTON_TYPES.PRIMARY}
          className={`${value ? "rounded-lg" : "bg-bg"}`}
          onClick={() => onChange(true)}
        >
          Yes
        </WebButton>
        <WebButton
          buttonType={BUTTON_TYPES.PRIMARY}
          className={`${!value ? "rounded-lg" : "bg-bg"}`}
          onClick={() => onChange(false)}
        >
          No
        </WebButton>
      </div>
      {!!error && <WebText className="text-error">{error}</WebText>}
    </div>
  );
};
