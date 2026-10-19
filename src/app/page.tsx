import About from "../components/layout/About";
import Navbar from "../components/layout/navbar";

export default function Home() {
  return (
    <main id="home" className="min-h-screen bg-slate-50">
      <Navbar />
      <About />
    </main>
  );
}
