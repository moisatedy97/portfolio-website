import { ReactElement } from "react";
import Logo from "@/components/Logo";
import Image from "next/image";
import supabaseServer from "@/supabase/config";
import { QueryData, QueryError } from "@supabase/supabase-js";
import Socials from "./Socials";
import Books from "./Books";
import Projects from "./Projects";

export default async function Home(): Promise<ReactElement | undefined> {
  const query = supabaseServer().from("profile").select("*").eq("id", 1);
  const { data, error }: { data: QueryData<typeof query> | null; error: QueryError | null } = await query;

  if (error) {
    throw error;
  }

  if (data) {
    return (
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="relative mt-32 h-44 w-44 md:mt-44 lg:mt-48">
          <Image
            className="origin-center rounded-full shadow-sm shadow-primary"
            priority={true}
            fill={true}
            sizes="176px"
            src={data[0].picture}
            alt="profile"
          />
        </div>
        <div className="gap flex flex-col items-center">
          <p className="text-4xl font-bold text-primary hover:text-primary/90">{data[0].name}</p>
          <Logo />
          <p className="text-lg font-semibold text-black hover:text-primary/90 dark:text-white dark:hover:text-primary/90">
            {data[0].profession}
          </p>
        </div>
        <Socials />
      </div>
    );
  }
}
