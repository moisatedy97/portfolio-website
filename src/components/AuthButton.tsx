import Link from "next/link";
import { KeyRound } from "lucide-react";
import { Button } from "./ui/button";
import supabaseServer from "@/supabase/config";
import { AuthError, Session } from "@supabase/supabase-js";
import LogoutButton from "./LogoutButton";

export default async function AuthButton() {
  const { data, error }: { data: { session: Session | null }; error: AuthError | null } =
    await supabaseServer().auth.getSession();

  if (error) {
    throw error;
  }

  if (data.session) {
    return <LogoutButton />;
  } else {
    return (
      <Link href="/login">
        <Button
          className="border-black bg-white hover:bg-primary dark:border-primary dark:bg-black dark:hover:bg-black"
          variant="outline"
          size="icon"
        >
          <KeyRound className="h-5 w-5 fill-primary dark:fill-white dark:stroke-primary dark:hover:fill-black" />
        </Button>
      </Link>
    );
  }
}
