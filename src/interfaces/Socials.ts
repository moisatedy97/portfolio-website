import { z } from "zod";

export const socialSchema = z.object({
    id: z.number(),
    profile_id: z.number(),
    name: z.string(),
    link: z.string(),
    image: z.string(),
    image_black: z.string(),
});

export type Social = z.infer<typeof socialSchema>;
