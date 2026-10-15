import { webAssets } from "@/constants/assets";

import type { WebIcons } from "@/constants/assets";

type Props = React.ComponentProps<"img"> & {
  source: WebIcons;
};

export const WebIcon = ({ source, sizes, className }: Props) => {
  return (
    <img
      src={webAssets.icons[source]}
      className={`${className || ""}`}
      sizes={sizes ?? "15"}
    />
  );
};
