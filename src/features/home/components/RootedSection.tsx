import { WebIcon, WebText } from "@/components";

type SectionContainerProps = {
  title: string;
  subtitle: string;
};

export const RootedSection = () => {
  return (
    <div className="flex justify-between gap-12 py-24 px-27.75">
      {/* Details */}
      <div className="flex flex-col gap-12 flex-1">
        <div className="flex flex-col gap-4">
          <WebIcon source="ic_plant_divider" className="object-cover w-32" />
          <div>
            <WebText className="font-semibold text-5xl">
              {"Rooted in Nature."}
            </WebText>
            <WebText className="font-semibold text-5xl">
              {" Guided by Balance."}
            </WebText>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <Sections
            title="Ancient Diagnostic Wisdom"
            subtitle="Techniques like pulse and tongue reading help uncover internal
          imbalances unique to each individual."
          />
          <div className="h-px bg-primary w-full" />
          <Sections
            title="Holistic Healing Approach"
            subtitle="Treatments aim to restore balance between Yin and Yang, supporting long-term physical and emotional well-being."
          />
        </div>
      </div>

      {/* Gallery */}
      <div className="flex flex-1 flex-col gap-6 h-104.5">
        <WebIcon
          className="w-full h-2/3 object-cover rounded-[30px]"
          source="img_rooted_section_1"
        />
        <div className="flex gap-6 h-1/3">
          <WebIcon
            className="w-2/3 object-cover rounded-[20px]"
            source="img_rooted_section_2"
          />
          <WebIcon
            className="w-1/3 object-cover rounded-[20px]"
            source="img_rooted_section_3"
          />
        </div>
      </div>
    </div>
  );
};

export const Sections = ({ subtitle, title }: SectionContainerProps) => {
  return (
    <div className="flex gap-4">
      <WebIcon source="ic_sparkle" className="w-8 h-8 object-cover" />
      <div className="flex flex-col gap-3">
        <WebText className="font-semibold text-2xl">{title}</WebText>
        <WebText className="font-normal text-lg text-text-secondary">
          {subtitle}
        </WebText>
      </div>
    </div>
  );
};
