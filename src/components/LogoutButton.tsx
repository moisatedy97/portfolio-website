"use client";

import { LogOut } from "lucide-react";
import { Button } from "./ui/button";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "../../types/supabase";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
    const router = useRouter();
    const supabase = createClientComponentClient<Database>();

    const signOut = async () => {
        const { error } = await supabase.auth.signOut();

        if (error) {
            throw error;
        }

        router.refresh();
    };

    return (
        <Button
            className="border-neutral-300 bg-white hover:bg-neutral-100 dark:border-neutral-700 dark:bg-black dark:hover:bg-neutral-900"
            variant="outline"
            size="icon"
            onClick={signOut}
        >
            <LogOut className="h-5 w-5" />
        </Button>
    );
}
