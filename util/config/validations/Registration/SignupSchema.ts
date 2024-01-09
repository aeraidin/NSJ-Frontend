import { z } from "zod";
import { validatePhoneNumber } from "../common-validation";
import { messages } from "@/util/data/messages";

export const SignupSchema = z.object({
  firstName: z.string().min(1, { message: messages.firstNameRequired }),
  lastName: z.string().min(1, { message: messages.lastNameRequired }),
  month: z.string().min(1, { message: messages.lastNameRequired }),
  year: z.string().min(1, { message: messages.lastNameRequired }),
  day: z.string().min(1, { message: messages.lastNameRequired }),
});

// generate form types from zod validation schema
export type SignupSchemaType = z.infer<typeof SignupSchema>;
