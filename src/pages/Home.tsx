import { WebHeader, WebPage } from "@/components";
import { HeroSection, MatrixSection } from "@/features/home";

export const HomePage = () => {
  return (
    <WebPage>
      <WebHeader />
      <div className="px-27.75 pt-21 flex-1 overflow-y-auto">
        <HeroSection />
        <MatrixSection />
      </div>
    </WebPage>
  );
};
