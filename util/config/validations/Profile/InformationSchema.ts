/** @format */

import { z } from "zod";
import { messages } from "@/util/Data/messages";

export const InformationSchema = z.object({
  firstName: z.string().min(1, { message: messages.thisFieldIsRequired }),
  lastName: z.string().min(1, { message: messages.thisFieldIsRequired }),
  phoneNumber: z.string().min(1, { message: messages.thisFieldIsRequired }),
  date: z.string().min(1, { message: messages.thisFieldIsRequired }),
});

// generate form types from zod validation schema
export type InformationSchemaType = z.infer<typeof InformationSchema>;
