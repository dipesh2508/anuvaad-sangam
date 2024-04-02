import { z } from "zod";

export const MessageValidation = z.object({
  message: z
    .string()
    .min(1, {
      message: "Message must be at least 1 characters.",
    })
});