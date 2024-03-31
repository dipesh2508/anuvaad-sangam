import { z } from "zod";

export const SearchFormSchema = z.object({
    username: z.string({
      required_error: "Please enter a username",
    }),
  });