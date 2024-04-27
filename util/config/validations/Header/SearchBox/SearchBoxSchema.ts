/** @format */

import { z } from "zod";
import { validatePhoneNumber } from "../../common-validation";
import { messages } from "@/util/Data/messages";

const SelectOptionSchema = z.object({
  name: z.string().min(1).optional(),
  value: z.number().min(1).optional(),
});

export const SearchBoxSchema = z.object({
  text: z.string().min(1, { message: messages.thisFieldIsRequired }),
  province: SelectOptionSchema,
});

// generate form types from zod validation schema
export type SearchBoxType = z.infer<typeof SearchBoxSchema>;
