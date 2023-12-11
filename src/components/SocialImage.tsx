"use client";

import { Social } from "@/interfaces/Socials";
import { useTheme } from "next-themes";

type Logo = {
    data: Social;
};

export default function SocialImage({ data }: Logo) {
    const { theme } = useTheme();

    return <img src={theme === "dark" ? data.image_black : data.image} alt={data.name} />;
}
