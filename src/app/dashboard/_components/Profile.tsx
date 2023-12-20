import { Input } from "@/components/ui/input";
import { ReactElement } from "react";

export default function Profile(): ReactElement {
    return (
        <div className="mt-24 flex w-56 flex-col gap-4">
            <Input className="dark:bg-neutral-900 dark:text-white" placeholder="Name" />
            <Input className="dark:bg-neutral-900 dark:text-white" placeholder="Profession" />
        </div>
    );
}
