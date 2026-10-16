import { WebIcon, WebText } from "@/components";

import type { WebIcons } from "@/constants/assets";

type ContainerProps = {
  icon: WebIcons;
  title: string;
  subtitle: string;
};

export const BenefitsSection = () => {
  return (
    <div className="px-27.75 bg-bg-secondary py-24 justify-center items-center flex flex-col gap-18">
      <div className="flex flex-col gap-4 items-center">
        <WebIcon source="ic_plant_divider" className="object-cover w-48" />
        <WebText className="font-semibold text-5xl">Holistic Benefits</WebText>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex gap-6">
          <Container
            icon="ic_bowl"
            subtitle="Herbal formulas strengthen the spleen and stomach, promoting smoother
          digestion and nutrient absorption."
            title="Improved Digestion"
          />
          <Container
            icon="ic_thunderbolt"
            subtitle="Restores Qi (vital energy) flow, helping reduce fatigue and increasing vitality throughout the day."
            title="Balanced Energy Levels"
          />
        </div>
        <div className="flex gap-6">
          <Container
            icon="ic_open_mind"
            subtitle="Calms the mind and regulates mood by targeting liver and heart imbalances that affect mental clarity."
            title="Emotional Wellness"
          />
          <Container
            icon="ic_night"
            subtitle="Supports natural sleep cycles by nourishing the heart and calming Shen (spirit)."
            title="Better Sleep Quality"
          />
        </div>
      </div>
    </div>
  );
};

const Container = ({ icon, subtitle, title }: ContainerProps) => {
  return (
    <div className="bg-bg p-8 flex flex-1 flex-col gap-6 rounded-[20px]">
      <WebIcon source={icon} className="w-12 h-12 object-cover" />
      <div className="flex flex-col gap-3">
        <WebText className="font-semibold text-2xl">{title}</WebText>
        <WebText className="font-normal text-lg text-text-secondary">
          {subtitle}
        </WebText>
      </div>
    </div>
  );
};
