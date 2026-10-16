import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { questionnaireSchema } from "../schema/questionnaire.schema";

import type { QuestionnaireFormData } from "../schema/questionnaire.schema";

const defaultValues: QuestionnaireFormData = {
  ailment: "",

  anxietyBegin: "",
  anxietyType: "",
  physicalSymptoms: "",
  worseAnxiety: "",

  dob: "",
};

export const useQuestionnaire = () => {
  const {
    control,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<QuestionnaireFormData>({
    resolver: zodResolver(questionnaireSchema),
    defaultValues: defaultValues,
  });

  return {
    control,
    errors,
    trigger,
    isSubmitting,
  };
};
