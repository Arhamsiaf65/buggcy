import Hero from "./components/Hero";
import Services from "./components/Services";
import Industries from "./components/Industries";
import Team from "./components/Team";
import TechStack from "./components/TechStack";
import Contact from "../../pages/contact/components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Industries />
      <Team />
      <TechStack />
      <Contact />
    </>
  );
}
