import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import hero from "@/assets/hero-jornadas.jpg";

export default function Inscription() {

  const cta_button: string = 'https://forms.cloud.microsoft/pages/responsepage.aspx?id=XY9FITLOIEKpKiuDNuULSADr381rgy1HsyQ7GPxGWOpUMDNUMFIwV0JJM05ZR1VFR1c3UDFMRFhMMS4u&route=shorturl'

  return (
    <>
      <Hero title="Inscripción" subtitle="Completa el formulario para reservar tu plaza" image={hero} >
        <Button asChild size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-primary uppercase tracking-wider">
          <Link to={cta_button}>Acceder a formulario</Link>
        </Button>
      </Hero>

    </>
  );
};
