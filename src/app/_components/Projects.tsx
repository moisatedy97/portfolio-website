import CardCarousel from "@/components/CardCarousel";
import { Project } from "@/interfaces/Projects";
import supabaseServer from "@/supabase/config";
import { QueryData, QueryError } from "@supabase/supabase-js";
import { ReactElement, ReactNode } from "react";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import { Framework } from "@/interfaces/Frameworks";

export default async function Projects(): Promise<ReactElement | undefined> {
  const query = supabaseServer().from("projects").select("*, frameworks (*)").eq("id", 1);
  const { data, error }: { data: QueryData<typeof query> | null; error: QueryError | null } = await query;

  if (error) {
    throw error;
  }

  if (data) {
    return (
      <div className="flex w-full flex-col gap-4 px-[2rem] py-[6rem] md:px-[8rem] md:py-[8rem] lg:px-[20rem] lg:py-[18rem]">
        <h3 className="text-xl font-bold text-primary md:text-2xl">Projects</h3>
        {/* {data.map((project: Project, index: number) => {
          return (
            <div key={index}>
              <Project project={project} />
            </div>
          );
        })} */}
        <Project project={data[0]} />
        <Project project={data[0]} />
      </div>
    );
  }
}

type ProjectProps = {
  project: Project;
};

const Project = ({ project }: ProjectProps): ReactElement => {
  const createImageCards = (project: Project): ReactNode[] => {
    const imageCards: ReactNode[] = [];

    project.images.forEach((image: string) => {
      imageCards.push(
        <div className="relative h-64 w-full">
          <Image
            className="origin-center rounded-lg"
            priority={true}
            fill={true}
            sizes="100vw, 100vh"
            src={image}
            alt={project.name}
          />
        </div>,
      );
    });

    return imageCards;
  };

  return (
    <div className="flex gap-4 p-4">
      <div className="w-[28rem]">
        <CardCarousel cards={createImageCards(project)} />
      </div>
      <div className="relative flex flex-1 flex-col items-center">
        <Card className="flex flex-1 flex-col justify-between shadow-sm shadow-primary hover:shadow-md hover:shadow-primary dark:bg-black">
          <CardHeader className="px-6 py-4">
            <CardTitle className="text-lg md:text-2xl">{project.name}</CardTitle>
            <CardDescription className="text-[0.7em] md:text-xs">{project.description}</CardDescription>
          </CardHeader>
        </Card>
        <div className="group flex h-2 w-11/12 justify-center rounded-b-md bg-primary shadow-sm shadow-primary transition-all duration-1000 hover:h-[20rem]">
          <ChevronDown className="h-full w-2 delay-1000 group-hover:hidden" />
          <div className="hidden h-full flex-col overflow-hidden opacity-0 delay-1000 group-hover:flex group-hover:opacity-100">
            {project.frameworks?.map((framework: Framework) => {
              return <div>{framework.name}</div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
