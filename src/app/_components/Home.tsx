import { ReactElement } from "react";
import Logo from "@/components/Logo";
import Image from "next/image";
import supabaseServer from "@/supabase/config";
import { QueryData, QueryError } from "@supabase/supabase-js";
import Socials from "./Socials";

export default async function Home(): Promise<ReactElement | undefined> {
    const query = supabaseServer().from("profile").select("*").eq("id", 1);
    const { data, error }: { data: QueryData<typeof query> | null; error: QueryError | null } = await query;

    if (error) {
        throw error;
    }

    if (data) {
        return (
            <div className="flex flex-col items-center justify-center gap-4">
                <div className="relative mt-28 h-44 w-44 lg:mt-48">
                    <Image
                        className="origin-center rounded-full shadow-sm"
                        priority={true}
                        fill={true}
                        sizes="100vw, 100vh"
                        src={data[0].picture}
                        alt="profile"
                    />
                </div>
                <div className="gap flex flex-col items-center">
                    <p className="text-3xl font-semibold text-black dark:text-white">{data[0].name}</p>
                    <Logo />
                    <p className="text-lg font-semibold text-black dark:text-white">{data[0].profession}</p>
                </div>
                <Socials />
            </div>
        );
    }
}
