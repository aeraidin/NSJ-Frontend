/** @format */
import { z } from "zod";
import { validatePhoneNumber } from "../common-validation";
import { messages } from "@/util/Data/messages";

const SelectOptionSchema = z.object({
  name: z.string(),
  value: z.string(),
});
export const SignupSchema = z.object({
  firstName: z.string().min(1, { message: messages.firstNameRequired }),
  lastName: z.string().min(1, { message: messages.lastNameRequired }),
  month: SelectOptionSchema,
  year: SelectOptionSchema,
  day: SelectOptionSchema,
});

// generate form types from zod validation schema
export type SignupSchemaType = z.infer<typeof SignupSchema>;
