import Sidebar from "@/components/Sidebar";
import Home from "@/components/Home";
import AboutPage from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <main className="min-h-screen flex bg-[#060606]">
      {/* <div className="hidden md:flex md:w-72 flex-col bg-[#1f1f1f]"> */}
        <Sidebar />
      {/* </div> */}
      <div className="flex-1 flex flex-col overflow-auto">
        <Home />
        <AboutPage />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
