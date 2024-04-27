/** @format */

import { z } from "zod";
import { messages } from "@/util/Data/messages";

const SelectOptionSchema = z.object({
  name: z.string().min(1).optional(),
  value: z.number().min(1).optional(),
});

export const SubscribeSchema = z.object({
  text: z.string().min(1, { message: messages.thisFieldIsRequired }),
  province: SelectOptionSchema,
});

// generate form types from zod validation schema
export type SubscribeSchemaType = z.infer<typeof SubscribeSchema>;
