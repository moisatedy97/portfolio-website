import { Project } from "@/interfaces/Projects";
import supabaseServer from "@/supabase/config";
import { QueryData, QueryError } from "@supabase/supabase-js";
import { ReactElement } from "react";

export default async function Projects(): Promise<ReactElement | undefined> {
  const query = supabaseServer().from("projects").select("*, frameworks (*)").eq("id", 1);
  const { data, error }: { data: QueryData<typeof query> | null; error: QueryError | null } = await query;

  if (error) {
    throw error;
  }

  if (data) {
    return (
      <div className="w-full">
        {data.map((project: Project) => {
          return <Project project={project} />;
        })}
      </div>
    );
  }
}

type ProjectProps = {
  project: Project;
};

const Project = ({ project }: ProjectProps): ReactElement => {
  return <div></div>;
};
