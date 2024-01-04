import Sidebar from "@/components/Sidebar";
import Home from "./_components/Home";
import Books from "./_components/Books";
import Projects from "./_components/Projects";
import Companies from "./_components/Companies";
import About from "./_components/About";

export default async function Index() {
  return (
    <div className="flex h-dvh w-full flex-col overflow-y-auto bg-accent font-sans dark:bg-black">
      <Sidebar />
      <main>
        <Home />
        <About />
        <Books />
        <Projects />
        <Companies />
      </main>
    </div>
  );
}
