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
      className="border-black bg-white hover:bg-primary dark:border-primary dark:bg-black dark:hover:bg-black"
      variant="outline"
      size="icon"
      onClick={signOut}
    >
      <LogOut className="h-5 w-5 fill-primary stroke-black dark:fill-white dark:stroke-primary dark:hover:fill-primary" />
    </Button>
  );
}
