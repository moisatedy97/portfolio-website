import FrameworkCard from "@/components/FrameworkCard";
import { Framework } from "@/interfaces/Frameworks";
import supabaseServer from "@/supabase/config";
import { QueryData, QueryError } from "@supabase/supabase-js";
import { ReactElement } from "react";

export default async function Stack(): Promise<ReactElement | undefined> {
  const query = supabaseServer().from("profile").select("frameworks (*)").eq("id", 1);
  const { data, error }: { data: QueryData<typeof query> | null; error: QueryError | null } = await query;

  if (error) {
    throw error;
  }

  if (data) {
    return (
      <div className="mx-[0.5rem] mt-[3rem] flex max-w-[100rem] flex-col gap-4 md:mx-[8rem] md:mt-[8rem] lg:mx-[14rem] 2xl:mx-[20rem]">
        <h3 className="text-xl font-bold text-primary hover:text-primary/60 md:text-2xl">Favorite Stack</h3>
        <Frameworks frameworks={data[0].frameworks} />
      </div>
    );
  }
}

type FrameworksProps = {
  frameworks?: Framework[];
};

const Frameworks = ({ frameworks }: FrameworksProps): ReactElement | undefined => {
  if (frameworks && frameworks.length > 0) {
    const frontendFrameworks: Framework[] = frameworks.filter((framework: Framework) => framework.type === "frontend");
    const backendFrameworks: Framework[] = frameworks.filter((framework: Framework) => framework.type === "backend");

    return (
      <div className="flex justify-between rounded-lg bg-primary/90 p-8 sm:px-20 sm:py-10 lg:px-28 lg:py-16 xl:px-40 2xl:px-56">
        {frontendFrameworks.length > 0 ? (
          <div>
            <h4 className="text-xl font-bold text-white lg:text-2xl 2xl:text-3xl">Frontend</h4>
            {frontendFrameworks.map((framework: Framework, index: number) => {
              return <FrameworkCard key={index} framework={framework} />;
            })}
          </div>
        ) : undefined}
        {backendFrameworks.length > 0 ? (
          <div>
            <h4 className="text-xl font-bold text-white lg:text-2xl 2xl:text-3xl">Backend</h4>
            {backendFrameworks.map((framework: Framework, index: number) => {
              return <FrameworkCard key={index} framework={framework} />;
            })}
          </div>
        ) : undefined}
      </div>
    );
  }
};
