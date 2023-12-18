import Sidebar from "@/components/Sidebar";
import Home from "./_components/Home";

export default async function Index() {
    return (
        <div className="flex h-screen flex-col overflow-y-auto bg-white font-sans dark:bg-black">
            <Sidebar />
            <main>
                <Home />
            </main>
        </div>
    );
}
