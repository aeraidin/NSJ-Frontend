/** @format */

import { z } from "zod";
import { messages } from "@/util/Data/messages";
import { removeCommas } from "@persian-tools/persian-tools";

export const IncreaseWalletSchema = z.object({
  amount: z
    .string()
    .min(1, { message: messages.thisFieldIsRequired })
    .refine(
      (data: any) => {
        const CurectData = removeCommas(data);
        return Number(CurectData) > 1000;
      },
      { message: "مبلغ باید بیشتر از هزار تومان باشد" }
    ),
  referenceNumber: z
    .string()
    .min(1, { message: messages.thisFieldIsRequired })
    .optional(),
});

// generate form types from zod validation schema
export type IncreaseWalletSchemaType = z.infer<typeof IncreaseWalletSchema>;
