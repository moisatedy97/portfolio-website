import { z } from "zod";

export const bookSchema = z.object({
  id: z.number(),
  profile_id: z.number(),
  name: z.string(),
  link: z.string(),
  image: z.string(),
  description: z.string(),
  author: z.string(),
});

export type Book = z.infer<typeof bookSchema>;
