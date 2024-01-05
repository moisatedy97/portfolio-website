import { z } from "zod";

export const emailOptionsSchema = z.object({
  to: z.string().email(),
  subject: z.string(),
  text: z.string(),
});

export type EmailOptions = z.infer<typeof emailOptionsSchema>;
