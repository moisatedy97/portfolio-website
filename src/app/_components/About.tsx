import supabaseServer from "@/supabase/config";
import { QueryData, QueryError } from "@supabase/supabase-js";
import Image from "next/image";
import { ReactElement } from "react";
import lighthouse from "../../../public/lighthouse.png";

export default async function About(): Promise<ReactElement | undefined> {
  const query = supabaseServer().from("profile").select("about").eq("id", 1);
  const { data, error }: { data: QueryData<typeof query> | null; error: QueryError | null } = await query;

  if (error) {
    throw error;
  }

  if (data) {
    return (
      <div className="mx-[0.5rem] mt-[8rem] flex max-w-[100rem] flex-col gap-4 md:mx-[8rem] md:mt-[10rem] lg:mx-[14rem] lg:mt-[14rem] 2xl:mx-[20rem] 2xl:mt-[20rem]">
        <h3 className="text-xl font-bold text-primary hover:text-primary/60 md:text-2xl">About</h3>
        <p className="text-sm font-semibold md:text-base">{data[0].about}</p>
        <div className="relative mt-4 h-[300px] w-[303px] self-center md:h-[450px] md:w-[455px]">
          <Image
            priority={true}
            fill={true}
            sizes="(min-width: 780px) 455px, 303px"
            src={lighthouse.src}
            alt={"lighthouse"}
            className="origin-center rounded-lg"
          />
        </div>
      </div>
    );
  }
}
