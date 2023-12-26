import { z } from "zod";

export const frameworkSchema = z.object({
  id: z.number(),
  name: z.string(),
  type: z.string(),
  image: z.string(),
});

export type Framework = z.infer<typeof frameworkSchema>;
