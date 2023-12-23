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
          className="border-neutral-300 bg-white hover:bg-neutral-100 dark:border-neutral-700 dark:bg-black dark:hover:bg-neutral-900"
          variant="outline"
          size="icon"
        >
          <KeyRound className="h-5 w-5" />
        </Button>
      </Link>
    );
  }
}
