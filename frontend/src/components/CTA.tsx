import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function CTA() {
    return (
        <section className="bg-accent text-accent-foreground py-16 text-center">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-accent-foreground mb-4">
          Forma parte del ecosistema I+D+i
        </h2>
        <p className="mb-8 text-accent-foreground/90">Reserva tu plaza en las Jornadas 2026 de la Universidad del Atlántico Medio.</p>
        <Button asChild size="lg" variant="outline" className="border-2 border-accent-foreground text-accent-foreground bg-transparent hover:bg-accent-foreground hover:text-accent uppercase tracking-wider">
          <Link to="/inscripcion">Inscribirme ahora</Link>
        </Button>
      </div>
    </section>
    )
}