import { z } from "zod";
import { validatePhoneNumber } from "../common-validation";

export const PhoneValidation = z.object({
  phoneNumber: validatePhoneNumber,
});

// generate form types from zod validation schema
export type PhoneValidationType = z.infer<typeof PhoneValidation>;
