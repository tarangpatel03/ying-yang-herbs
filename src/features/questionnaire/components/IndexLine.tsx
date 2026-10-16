import { Check } from "lucide-react";

import { WebText } from "@/components";

export const IndexLine = ({ index }: { index: number }) => {
  return (
    <div className="flex">
      {/* 0 */}
      <MilestoneComponent
        componentIndex={0}
        currentIndex={index}
        title="Select Ailment"
      />

      {/* 1 */}
      <MilestoneComponent
        componentIndex={1}
        currentIndex={index}
        title=" General Health"
      />

      {/* 2 */}
      <MilestoneComponent
        componentIndex={2}
        currentIndex={index}
        title="Basic Information"
      />

      {/* 3 */}
      <MilestoneComponent
        componentIndex={3}
        currentIndex={index}
        title="Symptom Review"
      />

      {/* 4 */}
      <MilestoneComponent
        componentIndex={4}
        currentIndex={index}
        title="Photo for Diagnosis"
      />
    </div>
  );
};

type Props = {
  currentIndex: number;
  componentIndex: number;
  title: string;
};

const MilestoneComponent = ({ componentIndex, currentIndex, title }: Props) => {
  return (
    <div className="flex flex-col gap-2.5 py-4 w-37.5 items-center">
      {/* Dots & Line */}
      <div className="flex align-middle justify-center items-center gap-6">
        {/* Before Dot Line */}
        <div
          className={`h-0.5 ${componentIndex === 0 ? "" : currentIndex < componentIndex ? "bg-status" : "bg-text"} w-12.25`}
        />

        {/* Dot */}
        <div
          className={`flex w-5 h-5 rounded-full justify-center items-center ${currentIndex < componentIndex && "bg-text-secondary"} ${currentIndex === componentIndex && "border"}  ${currentIndex > componentIndex && "bg-text"}`}
        >
          {currentIndex === componentIndex ? (
            <div className="w-2.5 h-2.5 bg-text rounded-full" />
          ) : (
            currentIndex > componentIndex && (
              <Check className="text-bg w-3 h-3" />
            )
          )}
        </div>

        {/* After Dot Line */}
        <div
          className={`h-0.5 ${componentIndex === 4 ? "" : currentIndex <= componentIndex ? "bg-status" : "bg-text"} w-12.25`}
        />
      </div>

      {/* Text */}
      <WebText
        className={`font-normal text-[16px] ${currentIndex < componentIndex && "text-text-secondary"}`}
      >
        {title}
      </WebText>
    </div>
  );
};
