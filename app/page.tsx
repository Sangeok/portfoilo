import Header from "./components/Header";
import Hero from "./components/Hero";
import Partners from "./components/Skills";
import About from "./components/About";
import Experience from "./components/Experience";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black font-sans selection:bg-gray-200">
      <Header />
      <Hero />
      <Partners />
      <About />
      <Projects />
      <Experience />
      <Testimonial />
      <Footer />
    </main>
  );
}
