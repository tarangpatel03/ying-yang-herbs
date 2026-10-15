import ic_logo from "@/assets/icons/ic_logo.svg";

export const webAssets = {
  icons: {
    ic_logo: ic_logo,
  },
} as const;

export type WebIcons = keyof typeof webAssets.icons;
