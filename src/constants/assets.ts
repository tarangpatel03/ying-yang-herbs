import ic_logo from "@/assets/images/ic_logo.svg";
import img_hero_bg from "@/assets/images/img_hero_bg.svg";
import img_hero_image from "@/assets/images/img_hero_image.svg";

export const webAssets = {
  icons: {
    ic_logo: ic_logo,
    img_hero_image: img_hero_image,
    img_hero_bg: img_hero_bg,
  },
} as const;

export type WebIcons = keyof typeof webAssets.icons;
