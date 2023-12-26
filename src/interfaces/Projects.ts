import { z } from "zod";
import { frameworkSchema } from "./Frameworks";

export const projectSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  github: z.string(),
  host: z.string(),
  images: z.string().array(),
  frameworks: z.array(frameworkSchema).optional(),
});

export type Project = z.infer<typeof projectSchema>;
