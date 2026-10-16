import { WebPage } from "@/components";
import {
  BenefitsSection,
  HealingHerbsSection,
  HeroSection,
  HowSection,
  MatrixSection,
  RootedSection,
} from "@/features/home";

export const HomePage = () => {
  return (
    <WebPage>
      <div className="pt-21 flex-1 overflow-y-auto pb-30">
        <HeroSection />
        <MatrixSection />
        <RootedSection />
        <BenefitsSection />
        <HealingHerbsSection />
        <HowSection />
      </div>
    </WebPage>
  );
};
