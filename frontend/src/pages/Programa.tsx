import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import hero from "@/assets/hero-jornadas.jpg";
import Hero from "@/components/Hero";
import Stadistics from "@/components/Stadistics";
import About from "@/components/About";
import Features from "@/components/Features";
import Timeline from "@/components/Timeline";
import CTA from "@/components/CTA";


const Programa = () => (
  <>
    <Hero
      title="Jornadas de Investigación, Innovación y Transferencia"
      subtitle="UNAMED · Edición 2026 · Junio · Campus de Tafira Baja"
      image={hero}
    >
      <Button asChild size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-primary uppercase tracking-wider">
        <Link to="/inscripcion">Inscríbete</Link>
      </Button>
    </Hero>

    <Stadistics/>

    <About/>

    <Features />

    <Timeline />

    <CTA />
  </>
);

export default Programa;
