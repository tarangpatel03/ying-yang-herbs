import { WebIcon, WebText } from "@/components";

import type { WebIcons } from "@/constants/assets";

type HerbsContainerProps = {
  image: WebIcons;
  bgColor: string;
  title: string;
  subtitle: string;
};

export const HealingHerbsSection = () => {
  return (
    <div className="px-27.75 py-24 flex flex-col gap-18">
      <div className="flex flex-col gap-4 items-center">
        <WebIcon source="ic_plant_divider" className="object-cover w-48" />
        <WebText className="font-semibold text-5xl">
          Healing Herbs from Nature
        </WebText>
      </div>
      <div className="flex gap-12">
        <HerbsContainer
          bgColor="bg-FAF7F5"
          image="img_ginseng"
          subtitle="Boosts energy, immunity, and focus."
          title="Ginseng"
        />
        <HerbsContainer
          bgColor="bg-F4F9F5"
          image="img_licorice_root"
          subtitle="Harmonizes formulas and reduces toxicity."
          title="Licorice Root"
        />
        <HerbsContainer
          bgColor="bg-FAF6F5"
          image="img_aiease"
          subtitle="Nourishes the liver and improves eyesight."
          title="Reishi Mushroom"
        />
      </div>
    </div>
  );
};

const HerbsContainer = ({
  image,
  bgColor,
  subtitle,
  title,
}: HerbsContainerProps) => {
  return (
    <div className="flex-1 flex flex-col gap-6">
      <div
        className={`flex flex-1 justify-center items-center ${bgColor} rounded-[20px] aspect-square`}
      >
        <WebIcon source={image} className="object-cover w-6/10" />
      </div>
      <div className="flex flex-col gap-3 items-center">
        <WebText className="font-semibold text-2xl">{title}</WebText>
        <WebText className="font-normal text-lg text-text-secondary">
          {subtitle}
        </WebText>
      </div>
    </div>
  );
};
