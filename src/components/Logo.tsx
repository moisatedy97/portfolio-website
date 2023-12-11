"use client";

import { Profile } from "@/interfaces/Profiles";
import useHasMounted from "@/utils/useHasMounted";
import { useTheme } from "next-themes";
import Image from "next/image";
import { ReactElement } from "react";

type Logo = {
    data: Profile;
};

export default function Logo({ data }: Logo): ReactElement {
    const { theme } = useTheme();
    const hasMounted = useHasMounted();

    return (
        <>
            {hasMounted && (
                <div className="relative h-[10rem] w-[10rem]">
                    <Image
                        fill={true}
                        sizes="100vw, 100vh"
                        src={theme === "dark" ? data.logo : data.logo_black}
                        alt="logo"
                    />
                </div>
            )}
        </>
    );
}
