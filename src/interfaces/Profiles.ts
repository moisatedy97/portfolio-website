import { z } from "zod";

export const profileSchema = z.object({
  id: z.number(),
  name: z.string(),
  profession: z.string(),
  picture: z.string(),
});

export type Profile = z.infer<typeof profileSchema>;
