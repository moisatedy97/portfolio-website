import AuthButton from "./AuthButton";
import { ThemeModeToggle } from "./ThemeModeToggle";

export default function Sidebar() {
  return (
    <div className="lg:w-none absolute top-0 flex w-full justify-center gap-2 p-2 lg:right-0 lg:h-full lg:w-auto lg:flex-col lg:px-4">
      <AuthButton />
      <ThemeModeToggle />
    </div>
  );
}
