import { MoveRight } from "lucide-react";

import { WebButton, WebIcon, WebText } from "@/components";
import { BUTTON_TYPES } from "@/types";

export const HeroSection = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col gap-12 w-175">
        {/* Hero Text */}
        <div className="flex flex-col gap-9">
          <WebText className="text-7xl font-bold">
            Find{" "}
            <span className="font-angelos font-normal text-primary">
              balance
            </span>{" "}
            through Ancient Wisdom
          </WebText>
          <WebText className="text-text-secondary font-normal text-lg">
            Discover your personalized path to wellness through the principles
            of Traditional Chinese Medicine.
          </WebText>
        </div>

        {/* Get Started button */}
        <WebButton
          buttonType={BUTTON_TYPES.PRIMARY}
          className="flex justify-center items-center gap-4 w-75"
        >
          <WebText className="font-medium text-lg">Get Cured</WebText>
          <MoveRight size={20} />
        </WebButton>
      </div>
      <div className="relative flex w-166 h-166 justify-center items-center">
        <WebIcon
          source="img_hero_bg"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <WebIcon
          source="img_hero_image"
          className="absolute inset-0 m-auto h-125 w-125 object-cover"
        />
      </div>
    </div>
  );
};
