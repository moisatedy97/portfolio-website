import { Company } from "@/interfaces/Companies";
import supabaseServer from "@/supabase/config";
import { QueryData, QueryError } from "@supabase/supabase-js";
import Image from "next/image";
import { ReactElement } from "react";

export default async function Companies(): Promise<ReactElement | undefined> {
  const query = supabaseServer().from("companies").select("*").eq("profile_id", 1).order("id", { ascending: true });
  const { data, error }: { data: QueryData<typeof query> | null; error: QueryError | null } = await query;

  if (error) {
    throw error;
  }

  if (data) {
    return (
      <div className="mx-[0.5rem] mt-[3rem] flex max-w-[100rem] flex-col gap-4 md:mx-[8rem] md:mt-[8rem] lg:mx-[14rem] 2xl:mx-[20rem]">
        <h3 className="text-xl font-bold text-primary hover:text-primary/60 md:text-2xl">Worked/ing for</h3>
        <div className="flex flex-wrap justify-center gap-4 p-2">
          {data.map((company: Company, index: number) => {
            return (
              <Image
                key={index}
                height={company.logo_heigth}
                width={company.logo_width}
                sizes={company.logo_sizes}
                src={company.logo}
                alt={company.name}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
