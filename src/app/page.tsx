import DeployButton from "../components/DeployButton";
import AuthButton from "../components/AuthButton";
import ConnectSupabaseSteps from "@/components/ConnectSupabaseSteps";
import SignUpUserSteps from "@/components/SignUpUserSteps";
import Header from "@/components/Header";
import { isSupabaseConnected, supabase } from "@/utils/supabase/init";

export default async function Index() {
    const { data: notes } = await supabase.from("notes").select();

    return (
        <div>
            <nav className="border-b-foreground/10 flex h-16 w-full justify-center border-b">
                <div className="flex w-full max-w-4xl items-center justify-between p-3 text-sm">
                    <DeployButton />
                    {isSupabaseConnected && <AuthButton />}
                </div>
            </nav>

            <div className="flex max-w-4xl flex-1 flex-col gap-20 px-3 opacity-0 animate-in">
                <Header />
                <main className="flex flex-1 flex-col gap-6">
                    <h2 className="mb-4 text-4xl font-bold">Next steps</h2>
                    {isSupabaseConnected ? <SignUpUserSteps /> : <ConnectSupabaseSteps />}
                </main>
            </div>
            <pre>{JSON.stringify(notes, null, 2)}</pre>
        </div>
    );
}
