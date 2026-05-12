import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import hero from "@/assets/hero-jornadas.jpg";
import Hero from "@/components/Hero";
import Stadistics from "@/components/Stadistics";
import About from "@/components/About";
import Features from "@/components/Features";
import Timeline from "@/components/Timeline";
import CTA from "@/components/CTA";
import Speakers from "@/components/Speakers";

export default function Programa() {
  const cta_button: string = 'https://forms.cloud.microsoft/pages/responsepage.aspx?id=XY9FITLOIEKpKiuDNuULSADr381rgy1HsyQ7GPxGWOpUMDNUMFIwV0JJM05ZR1VFR1c3UDFMRFhMMS4u&route=shorturl'
  
  return (
    <>
      <Hero
        title="Programa"
        subtitle="Accede a informacion sobre la jornada"
        image={hero}
      >
        <Button asChild size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-primary uppercase tracking-wider">
          <Link to={cta_button}>Inscríbete</Link>
        </Button>
      </Hero>

      <Timeline />

      <Speakers />

      <CTA />
    </>

  )
}



