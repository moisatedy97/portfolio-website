import AuthButton from "./AuthButton";
import { ThemeModeToggle } from "./ThemeModeToggle";

export default function Sidebar() {
  return (
    <div
      className="absolute top-0 z-50 flex w-full justify-center gap-2 rounded-b-lg bg-neutral-300 bg-opacity-80 p-2 hover:bg-neutral-400 hover:bg-opacity-80
        lg:left-0 lg:h-full lg:w-auto lg:flex-col lg:rounded-l-lg lg:px-2 dark:bg-neutral-900 dark:bg-opacity-60 dark:hover:bg-neutral-800 dark:hover:bg-opacity-60"
    >
      <AuthButton />
      <ThemeModeToggle />
    </div>
  );
}
