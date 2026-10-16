import z from "zod";

export const questionnaireSchema = z.object({
  ailment: z.string().min(1, "Select your alignment"),

  anxietyBegin: z.string().min(1, "Required"),
  anxietyType: z.string().min(1, "Required"),
  worseAnxiety: z.string().min(1, "Required"),
  physicalSymptoms: z.string().min(1, "Required"),
  difficultySleeping: z.boolean(),

  dob: z.string().min(1, "Required"),
});

export type QuestionnaireFormData = z.infer<typeof questionnaireSchema>;
