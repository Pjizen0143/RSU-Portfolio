import AboutSection from "./AboutSection";

export default function Home() {
  return (
    <>
      <section>
        <h1 className="text-xl md:text-4xl font-bold text-center mx-6">
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
      <section className="mx-20">
        <h2 className="text-xl font-bold">
          Skills
        </h2>
      </section>
      <div className="h-2000"></div>
    </>
  );
}