/** @format */

import { z } from "zod";
import { validateEmail, validatePhoneNumber } from "../common-validation";
import { messages } from "@/util/Data/messages";

const SelectOptionSchema = z.object({
 name: z.string(),
 value: z.string(),
});

export const PreRegistrationSchema = z.object({
 firstName: z.string().min(1, { message: messages.usernameRequired }),
 lastname: z.string().min(1, { message: messages.lastNameRequired }),
 month: SelectOptionSchema,
 year: SelectOptionSchema,
 day: SelectOptionSchema,
 nationalCode: z
  .string()
  .min(1, { message: messages.NationalCodeReq })
  .max(11, { message: messages.NationalCodeMAX }),
 phoneNumber: validatePhoneNumber,
 email: validateEmail,
});

// generate form types from zod validation schema
export type PreRegistrationSchemaType = z.infer<typeof PreRegistrationSchema>;
