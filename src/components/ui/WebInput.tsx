import { Search } from "lucide-react";
import { twMerge } from "tailwind-merge";

type Props = React.ComponentProps<"input">;

export const WebInput = ({ className }: Props) => {
  return (
    <div className="border align=middle flex border-border py-2 px-2">
      <Search size={15} className={twMerge("text-text", className)} />
    </div>
  );
};
