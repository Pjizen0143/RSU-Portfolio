import SkillsSection from "@/components/ui/sections/SkillsSection";
import AboutSection from "../components/ui/sections/AboutSection";
import HightLightsProjects from "@/components/ui/sections/HightLightsProjects";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/layouts/navbar";

export default function Home() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      <section className="pt-25 md:pt-40">
        <h1 className="tracking-wide text-lg opacity-80text-xl md:text-4xl font-bold text-center mx-6">
          Welcome to My Portfolio
        </h1>
        <br />
        <h1 className="text-4xl md:text-6xl font-bold text-center mx-6">
          Thanaphat Poolthrap
        </h1>
        <br />
        <h2 className="flex justify-center items-center gap-4 text-lg md:text-2xl mx-6">
          <span>--------</span>
          <span className="px-1">Software Engineer</span>
          <span>--------</span>
        </h2>
      </section>
      <div className="h-20"></div>
      <AboutSection />
      <div className="h-10"></div>
      <SkillsSection />
      <div className="h-10"></div>
      <HightLightsProjects />
      <Footer />
    </>
  );
}