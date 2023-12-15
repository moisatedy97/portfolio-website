import AuthButton from "./AuthButton";
import { ThemeModeToggle } from "./ThemeModeToggle";

export default function Sidebar() {
    return (
        <div className="absolute right-0 flex h-full flex-col justify-center gap-2 px-4">
            <AuthButton />
            <ThemeModeToggle />
        </div>
    );
}
