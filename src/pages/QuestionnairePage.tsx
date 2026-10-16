import { useState } from "react";

import { WebPage } from "@/components";
import {
  Index0,
  Index1,
  Index2,
  Index3,
  Index4,
  IndexLine,
  useQuestionnaire,
} from "@/features/questionnaire";

export const QuestionnairePage = () => {
  const [index, setIndex] = useState<number>(0);

  const { control, errors, trigger } = useQuestionnaire();

  const onIndex0Continue = async () => {
    const isValid = await trigger("ailment");
    if (isValid) {
      setIndex(1);
    }
  };

  const onIndex1Continue = async () => {
    const isValid = await trigger([
      "anxietyBegin",
      "anxietyType",
      "physicalSymptoms",
      "worseAnxiety",
    ]);
    if (isValid) {
      setIndex(2);
    }
  };

  return (
    <WebPage>
      <div className="pt-24 flex flex-col justify-center items-center gap-12">
        <IndexLine index={index} />

        {index === 0 && (
          <Index0
            onContinue={onIndex0Continue}
            control={control}
            errors={errors}
          />
        )}
        {index === 1 && (
          <Index1
            control={control}
            errors={errors}
            onContinue={onIndex1Continue}
          />
        )}
        {index === 2 && <Index2 />}
        {index === 3 && <Index3 />}
        {index === 4 && <Index4 />}
      </div>
    </WebPage>
  );
};
