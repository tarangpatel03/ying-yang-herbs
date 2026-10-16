import { Check, ChevronDown } from "lucide-react";
import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

import { WebText } from "./WebText";

type Props = {
  name: string;
  value: string;
  options: { label: string; value: string }[];
  placeholder?: string;
  error?: string | null;
  className?: string;
  onChange: (value: string) => void;
};

export const WebDropdown = ({
  name,
  options,
  error,
  className,
  placeholder = "Select option",
  value,
  onChange,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSelect = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className="flex flex-col gap-2 relative">
      <WebText className="font-normal text-[16px]">{name}</WebText>

      {/* Trigger Box - looks identical to WebInput when closed */}
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className={twMerge(
          "border flex items-center justify-between border-border py-3 px-4 font-sans text-[16px] font-normal rounded-[10px]",
          isOpen ? "border-primary" : "focus-within:border-primary",
          error && "border-red-500",
          className,
        )}
      >
        <span
          className={twMerge(
            "flex-1 text-start",
            value ? "text-text capitalize" : "text-text-secondary",
          )}
        >
          {value
            ? options.map((opt) => {
                if (opt.value === value) return opt.label;
              })
            : placeholder}
        </span>
        <ChevronDown
          size={18}
          className={twMerge(
            "text-text-secondary transition-transform duration-200 ml-2 shrink-0",
            isOpen && "rotate-180 text-primary",
          )}
        />
      </div>
      {!!error && <WebText className="text-error">{error}</WebText>}

      {/* Options Dropdown List */}
      {isOpen && (
        <div className="absolute top-[calc(100%+6px)] left-0 w-full z-50 bg-bg border border-border rounded-[10px] shadow-lg py-1.5 flex flex-col overflow-hidden">
          {options.map((option) => {
            const isSelected =
              option.value.toLowerCase() === value?.toLowerCase();
            return (
              <button
                key={option.value}
                onClick={() => handleSelect(option.value)}
                className={twMerge(
                  "px-4 py-2.5 text-[16px] font-normal cursor-pointer flex items-center justify-between transition-colors capitalize text-start w-full",
                  isSelected
                    ? "bg-bg-secondary text-primary font-medium"
                    : "text-text hover:bg-bg-secondary/70 hover:text-primary",
                )}
              >
                <span>{option.label}</span>
                {isSelected && <Check size={16} className="text-primary" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
