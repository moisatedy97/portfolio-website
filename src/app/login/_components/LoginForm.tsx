"use client";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { formLoginSchema } from "@/interfaces/Login";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "../../../../types/supabase";

export default function LoginForm() {
    const supabase = createClientComponentClient<Database>();
    const router = useRouter();
    const form = useForm<z.infer<typeof formLoginSchema>>({
        resolver: zodResolver(formLoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const submitForm = async (values: z.infer<typeof formLoginSchema>) => {
        const { error } = await supabase.auth.signInWithPassword({
            email: values.email,
            password: values.password,
        });

        if (error) {
            router.push("/login?message=Could not authenticate user");
        }

        router.push("/");
        router.refresh();
    };

    return (
        <Form {...form}>
            <form className="flex w-[20rem] flex-col gap-2" onSubmit={form.handleSubmit(submitForm)}>
                <h3 className="mb-4 self-center text-3xl font-semibold">Login Form</h3>
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input className="dark:bg-neutral-900 dark:text-white" placeholder="Email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input
                                    className="dark:bg-neutral-900 dark:text-white"
                                    placeholder="Password"
                                    type="password"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button className="mt-4 w-20 self-center" type="submit">
                    Login
                </Button>
            </form>
        </Form>
    );
}
