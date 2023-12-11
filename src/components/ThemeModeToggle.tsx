"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { ReactElement } from "react";
import useHasMounted from "@/utils/useHasMounted";

export function ThemeModeToggle(): ReactElement | undefined {
    const { theme, setTheme } = useTheme();
    const hasMounted = useHasMounted();

    const handleClick = () => {
        if (theme === "dark") {
            setTheme("light");
        } else {
            setTheme("dark");
        }
    };

    if (hasMounted) {
        return (
            <Button
                className="border-neutral-300 bg-white hover:bg-neutral-100 dark:border-neutral-700 dark:bg-black dark:hover:bg-neutral-900"
                variant="outline"
                size="icon"
                onClick={handleClick}
            >
                {theme === "dark" ? (
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 text-white" />
                ) : (
                    <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-100 text-black" />
                )}
            </Button>
        );
    }
}
