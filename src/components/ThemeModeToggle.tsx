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
        name="toggleThemeButton"
        aria-label="toggleThemeButton"
        className="border-black bg-white hover:bg-primary dark:border-primary dark:bg-black dark:hover:bg-black"
        variant="outline"
        size="icon"
        onClick={handleClick}
      >
        {theme === "dark" ? (
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 fill-primary hover:stroke-primary" />
        ) : (
          <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-100 fill-primary" />
        )}
      </Button>
    );
  }
}
