/** @format */
import { number, z } from "zod";
import { validatePhoneNumber } from "../common-validation";
import { messages } from "@/util/Data/messages";

const SelectOptionSchema = z.object({
  name: z.string(),
  value: z.string(),
});
export const CommentSchema = z.object({
  rate: z.number().optional(),
  text: z.string(),
});

// generate form types from zod validation schema
export type CommentSchemaType = z.infer<typeof CommentSchema>;
