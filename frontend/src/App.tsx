import About from "./components/home/About";
import Contact from "./components/home/Contact";
import Footer from "./components/home/Footer";
import Hero from "./components/home/Hero";
import Industries from "./components/home/Industries";
import Navbar from "./components/home/Navbar";
import Services from "./components/home/Services";
import TechStack from "./components/home/TechStack";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Industries />
        <About />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
