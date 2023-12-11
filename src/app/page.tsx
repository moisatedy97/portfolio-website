import Sidebar from "@/components/Sidebar";
import Home from "./_components/Home";
import Socials from "./_components/Socials";

export default async function Index() {
    return (
        <div className="flex h-screen flex-col bg-white font-sans dark:bg-black">
            <Sidebar />
            <main>
                <Home />
                {/* <Socials /> */}
            </main>
        </div>
    );
}
