import CardCarousel from "@/components/CardCarousel";
import { Project } from "@/interfaces/Projects";
import supabaseServer from "@/supabase/config";
import { QueryData, QueryError } from "@supabase/supabase-js";
import { ReactElement, ReactNode } from "react";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

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
        {data.map((project: Project, index: number) => {
          return (
            <div key={index}>
              <Project project={project} />
            </div>
          );
        })}
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
        <div className="relative h-52 w-full">
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
    <div className="flex gap-4">
      <div className="w-[23rem]">
        <CardCarousel cards={createImageCards(project)} />
      </div>
      <Card className="flex flex-1 flex-col justify-between shadow-sm shadow-primary dark:bg-black">
        <CardHeader className="px-6 py-4">
          <CardTitle className="text-lg md:text-2xl">{project.name}</CardTitle>
          <CardDescription className="text-[0.7em] md:text-xs">{project.description}</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};
