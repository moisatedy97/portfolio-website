import { cookies } from "next/headers";
import { createClient } from "./server";

const cookieStore = cookies();
export const supabase = createClient(cookieStore);

const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
        createClient(cookieStore);
        return true;
    } catch (e) {
        return false;
    }
};

export const isSupabaseConnected = canInitSupabaseClient();
