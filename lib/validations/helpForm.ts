import { z } from "zod";

export const helpFormValidation = z.object({
  Email: z.string().email(),
  helpDescription: z
    .string()
    .min(2, {
      message: "Help Description must be at least 2 characters.",
    })
    .max(500, {
      message: "Help Description must be at under 500 characters.",
    }),
});
