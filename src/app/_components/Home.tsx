import { ReactElement } from "react";
import Logo from "@/components/Logo";
import Image from "next/image";
import supabaseServer from "@/supabase/config";
import { QueryData, QueryError } from "@supabase/supabase-js";

export default async function Home(): Promise<ReactElement | undefined> {
    const query = supabaseServer().from("profile").select("*").eq("id", 1);
    const { data, error }: { data: QueryData<typeof query> | null; error: QueryError | null } = await query;

    if (error) {
        throw error;
    }

    if (data) {
        return (
            <div className="mt-[13rem] flex flex-col items-center justify-center gap-2">
                <div className="relative mb-6 h-[18rem] w-[18rem]">
                    <Image
                        className="origin-center rounded-full shadow-sm"
                        priority={true}
                        fill={true}
                        sizes="100vw, 100vh"
                        src={data[0].picture}
                        alt="profile"
                    />
                </div>
                <p className="text-5xl font-semibold text-black dark:text-white">{data[0].name}</p>
                <Logo data={data[0]} />
                <p className="text-xl text-black dark:text-white">{data[0].profession}</p>
            </div>
        );
    }
}
