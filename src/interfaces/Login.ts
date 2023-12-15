import { z } from "zod";

export const formLoginSchema = z.object({
    email: z.string().email({
        message: "Must be a valid email.",
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters.",
    }),
});

export type Login = z.infer<typeof formLoginSchema>;
