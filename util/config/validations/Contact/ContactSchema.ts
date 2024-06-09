/** @format */
import { z } from "zod";
import { validatePhoneNumber } from "../common-validation";
import { messages } from "@/util/Data/messages";
import { verify } from "crypto";

const SelectOptionSchema = z.object({
  name: z.string(),
  value: z.string(),
});
export const ContactSchema = z.object({
  fullName: z.string().min(1, { message: messages.fullNameIsRequired }),
  phoneNumber: z.string().min(1, { message: messages.phoneNumberIsRequired }),
  text: z.string().min(1, { message: messages.thisFieldIsRequired }),
  email: z.string().min(1, { message: messages.emailIsRequired }),
  verify: z.boolean({ message: messages.captchaIsRequired }),

  subject: SelectOptionSchema,
});

// generate form types from zod validation schema
export type ContactSchemaType = z.infer<typeof ContactSchema>;
