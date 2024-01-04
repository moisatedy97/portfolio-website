import Sidebar from "@/components/Sidebar";
import Home from "./_components/Home";
import Books from "./_components/Books";
import Projects from "./_components/Projects";
import Companies from "./_components/Companies";
import About from "./_components/About";
import Stack from "./_components/Stack";
import Footer from "./_components/Footer";
import Crontab from "@/components/Crontab";

export default async function Index() {
  return (
    <div className="scrollbar-primary flex h-dvh w-full flex-col overflow-y-scroll bg-accent font-sans dark:bg-black">
      <Crontab />
      <Sidebar />
      <main>
        <Home />
        <About />
        <Stack />
        <Projects />
        <Books />
        <Companies />
        <Footer />
      </main>
    </div>
  );
}
