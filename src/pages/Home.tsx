import { WebHeader, WebPage } from "@/components";
import {
  BenefitsSection,
  HeroSection,
  MatrixSection,
  RootedSection,
} from "@/features/home";

export const HomePage = () => {
  return (
    <WebPage>
      <WebHeader />
      <div className="pt-21 flex-1 overflow-y-auto pb-30">
        <HeroSection />
        <MatrixSection />
        <RootedSection />
        <BenefitsSection />
      </div>
    </WebPage>
  );
};
