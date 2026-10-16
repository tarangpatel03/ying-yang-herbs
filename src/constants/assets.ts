import ic_bowl from "@/assets/images/ic_bowl.svg";
import ic_logo from "@/assets/images/ic_logo.svg";
import ic_night from "@/assets/images/ic_night.svg";
import ic_open_mind from "@/assets/images/ic_open_mind.svg";
import ic_plant_divider from "@/assets/images/ic_plant_divider.svg";
import ic_sparkle from "@/assets/images/ic_sparkle.svg";
import ic_thunderbolt from "@/assets/images/ic_thunderbolt.svg";
import img_hero_bg from "@/assets/images/img_hero_bg.svg";
import img_hero_image from "@/assets/images/img_hero_image.svg";
import img_rooted_section_1 from "@/assets/images/img_rooted_section_1.svg";
import img_rooted_section_2 from "@/assets/images/img_rooted_section_2.svg";
import img_rooted_section_3 from "@/assets/images/img_rooted_section_3.svg";

export const webAssets = {
  icons: {
    ic_logo: ic_logo,
    img_hero_image: img_hero_image,
    img_hero_bg: img_hero_bg,
    ic_plant_divider: ic_plant_divider,
    ic_sparkle: ic_sparkle,
    ic_bowl: ic_bowl,
    ic_thunderbolt: ic_thunderbolt,
    ic_open_mind: ic_open_mind,
    ic_night: ic_night,
    img_rooted_section_1: img_rooted_section_1,
    img_rooted_section_2: img_rooted_section_2,
    img_rooted_section_3: img_rooted_section_3,
  },
} as const;

export type WebIcons = keyof typeof webAssets.icons;
