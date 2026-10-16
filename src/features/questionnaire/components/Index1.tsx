import { Controller } from "react-hook-form";

import { WebButton, WebDropdown, WebInput, WebText } from "@/components";
import { BUTTON_TYPES } from "@/types";

import {
  anxietyFrequencyOptions,
  anxietySymptomOptions,
  anxietyTimeOptions,
} from "../data/data";

import type { QuestionnaireFormData } from "../schema/questionnaire.schema";
import type { Control, FieldErrors } from "react-hook-form";

export const Index1 = ({
  onContinue,
  control,
  errors,
}: {
  onContinue: () => void;
  control: Control<QuestionnaireFormData>;
  errors: FieldErrors<QuestionnaireFormData>;
}) => {
  return (
    <div className="flex flex-col border gap-8 p-6 border-border rounded-[20px]">
      <WebText className="font-semibold text-2xl">Select Ailment</WebText>

      <div className="flex flex-col gap-6">
        <Controller
          name="anxietyBegin"
          control={control}
          render={({ field: { onChange, value } }) => (
            <WebInput
              name="When did your anxiety begin?"
              onChange={onChange}
              value={value}
              error={errors.anxietyType?.message}
              className="w-138"
              placeholder="It started around 2 years ago after a major job change."
            />
          )}
        />

        <Controller
          name="anxietyType"
          control={control}
          render={({ field: { onChange, value } }) => (
            <WebDropdown
              name="Is your anxiety constant or does it come and go?"
              onChange={onChange}
              options={anxietyFrequencyOptions}
              value={value}
              error={errors.anxietyType?.message}
              className="w-138"
              placeholder="Select"
            />
          )}
        />

        <Controller
          name="worseAnxiety"
          control={control}
          render={({ field: { onChange, value } }) => (
            <WebDropdown
              name="What time of day is your anxiety worse?"
              onChange={onChange}
              options={anxietyTimeOptions}
              value={value}
              error={errors.worseAnxiety?.message}
              className="w-138"
              placeholder="Select"
            />
          )}
        />

        <Controller
          name="physicalSymptoms"
          control={control}
          render={({ field: { onChange, value } }) => (
            <WebDropdown
              name="Do you have any physical symptoms with your anxiety?"
              onChange={onChange}
              options={anxietySymptomOptions}
              value={value}
              error={errors.physicalSymptoms?.message}
              className="w-138"
              placeholder="Select"
            />
          )}
        />
      </div>

      <WebButton
        buttonType={BUTTON_TYPES.PRIMARY}
        className="py-3 w-138"
        onClick={onContinue}
      >
        <WebText className="font-medium text-lg">Continue</WebText>
      </WebButton>
    </div>
  );
};
