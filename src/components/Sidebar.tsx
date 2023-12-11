import { ThemeModeToggle } from "./ThemeModeToggle";

export default function Sidebar() {
    return (
        <div className="absolute right-0 flex h-full flex-col justify-center px-4">
            <ThemeModeToggle />
        </div>
    );
}
