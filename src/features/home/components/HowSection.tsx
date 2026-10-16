import { MoveRight } from "lucide-react";

import { WebButton, WebIcon, WebText } from "@/components";
import { BUTTON_TYPES } from "@/types";

import type { WebIcons } from "@/constants/assets";

type TitleContainProps = {
  icon: WebIcons;
  title: string;
};

export const HowSection = () => {
  return (
    <div className="py-24 px-27.75 bg-text flex flex-col gap-18 items-center">
      {/* Header */}
      <div className="flex flex-col gap-4 items-center">
        <WebIcon source="ic_plant_divider_pink" className="object-cover w-48" />
        <WebText className="font-semibold text-5xl text-button-bg">
          How Chinese Herbs Heal
        </WebText>
      </div>

      {/* Main Body */}
      <div className="flex flex-col w-full gap-8">
        <div className="flex items-center justify-between">
          <TitleContainer icon="ic_search" title="Find the Root" />
          <TitleContainer icon="ic_herbs_bowl" title="Tailored Formula" />
          <TitleContainer icon="ic_water_drop" title="Start Healing" />
          <TitleContainer icon="ic_sun" title="Stay Well" />
        </div>

        <div className="flex items-center justify-around px-45">
          <WebIcon source="ic_play" className="w-10 h-10 object-cover" />
          <div className="flex-1 border-t-2 border-dashed border-button-bg" />
          <WebIcon source="ic_play" className="w-10 h-10 object-cover" />
          <div className="flex-1 border-t-2 border-dashed border-button-bg" />
          <WebIcon source="ic_play" className="w-10 h-10 object-cover" />
          <div className="flex-1 border-t-2 border-dashed border-button-bg" />
          <WebIcon source="ic_play" className="w-10 h-10 object-cover" />
        </div>

        <div className="flex items-center justify-between">
          <DescriptionContainer title="We assess your body's energy patterns using TCM principles." />
          <DescriptionContainer title="Receive a blend tailored to your unique needs." />
          <DescriptionContainer title="Herbs restore balance, ease stress, and boost energy." />
          <DescriptionContainer title="Feel better sleep, mood, and vitality over time." />
        </div>
      </div>

      {/* Get Start Button */}
      <WebButton
        buttonType={BUTTON_TYPES.PRIMARY}
        className="flex gap-4 py-4 w-75 justify-center items-center"
      >
        <WebText>Start Your Healing</WebText>
        <MoveRight />
      </WebButton>
    </div>
  );
};

const TitleContainer = ({ icon, title }: TitleContainProps) => {
  return (
    <div className="flex flex-1 flex-col gap-6 justify-center items-center">
      <WebIcon className="w-16 h-16 object-cover" source={icon} />
      <WebText className="text-bg font-semibold text-2xl">{title}</WebText>
    </div>
  );
};

const DescriptionContainer = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-1 flex-col gap-6 justify-center items-center">
      <WebText className="text-bg font-normal text-lg text-center max-w-[256px]">
        {title}
      </WebText>
    </div>
  );
};
