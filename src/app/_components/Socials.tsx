import SocialImage from "@/components/SocialImage";
import { Social } from "@/interfaces/Socials";
import supabaseServer from "@/supabase/config";
import { QueryData, QueryError } from "@supabase/supabase-js";
import { ReactElement } from "react";

export default async function Socials(): Promise<ReactElement | undefined> {
    const query = supabaseServer().from("socials").select("*").eq("profile_id", 1);
    const { data, error }: { data: QueryData<typeof query> | null; error: QueryError | null } = await query;

    if (error) {
        throw error;
    }

    if (data) {
        return (
            <div className="mt-4 flex items-center justify-center gap-2">
                {data.map((social: Social) => {
                    if (social.link) {
                        return (
                            <a key={social.id} href={social.link} className="h-11 w-11">
                                {social.image && social.name && <SocialImage data={social} />}
                            </a>
                        );
                    }

                    return undefined;
                })}
            </div>
        );
    }
}
