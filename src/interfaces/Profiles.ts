import { z } from "zod";
import { frameworkSchema } from "./Frameworks";

export const profileSchema = z.object({
  id: z.number(),
  name: z.string(),
  profession: z.string(),
  picture: z.string(),
  about: z.string(),
  frameworks: z.array(frameworkSchema).optional(),
});

export type Profile = z.infer<typeof profileSchema>;
