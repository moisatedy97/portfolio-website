import { ReactElement } from "react";
import { Framework } from "@/interfaces/Frameworks";
import Image from "next/image";

type FrameworkCardProps = {
  framework: Framework;
};

export default function FrameworkCard({ framework }: FrameworkCardProps): ReactElement {
  return (
    <div id={framework.id.toString()} className="ml-2 mt-2 flex items-center gap-2">
      <div className="relative h-5 w-5">
        <Image className="origin-center" fill={true} sizes="20px" src={framework.image} alt={framework.name} />
      </div>
      <p className="text-sm font-medium text-black hover:text-primary-foreground lg:text-base 2xl:text-lg">
        {framework.name}
      </p>
    </div>
  );
}
