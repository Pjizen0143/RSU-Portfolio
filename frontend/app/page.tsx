import Navbar from "../components/layouts/navbar";

export default function Home() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      <main className="pt-30">
        <h1 className="text-4xl font-bold text-center mt-10">
          Welcome to My Portfolio
        </h1>
        <div className="h-2000"></div>
      </main>
    </>
  );
}