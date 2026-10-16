import { Controller } from "react-hook-form";

import { WebButton, WebDropdown, WebText } from "@/components";
import { BUTTON_TYPES } from "@/types";

import { ailmentOptions } from "../data/data";

import type { QuestionnaireFormData } from "../schema/questionnaire.schema";
import type { Control, FieldErrors } from "react-hook-form";

export const Index0 = ({
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

      <Controller
        name="ailment"
        control={control}
        render={({ field: { onChange, value } }) => (
          <WebDropdown
            name="Select Ailment"
            onChange={onChange}
            options={ailmentOptions}
            value={value}
            error={errors.ailment?.message}
            className="w-138"
            placeholder="Select"
          />
        )}
      />

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
