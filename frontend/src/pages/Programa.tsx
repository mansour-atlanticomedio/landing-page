import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, Lightbulb, Award, Globe, Briefcase, BookOpen, Microscope } from "lucide-react";
import { Link } from "react-router-dom";
import hero from "@/assets/hero-jornadas.jpg";

const stats = [
  { icon: Users, value: "416", label: "Asistentes previstos" },
  { icon: Briefcase, value: "30+", label: "Grupos de investigación" },
  { icon: Globe, value: "12", label: "Mesas y talleres" },
  { icon: Award, value: "HRS4R", label: "Sello de calidad" },
];

const ejes = [
  {
    icon: Lightbulb,
    title: "Transferencia de conocimiento",
    text: "Convocatorias 2026 para memorias técnicas y proyectos orientados a la generación de conocimiento aplicado.",
  },
  {
    icon: Briefcase,
    title: "Colaboración público-privada",
    text: "Puente entre investigación académica y tejido empresarial canario para soluciones comerciales y sociales.",
  },
  {
    icon: BookOpen,
    title: "Innovación docente",
    text: "IA aplicada a la educación y metodologías activas que se transfieren a otros centros y sectores.",
  },
  {
    icon: Microscope,
    title: "Ciencia abierta",
    text: "Repositorio institucional, estándares HRS4R y acceso libre a los avances científicos.",
  },
];

const programa = [
  { day: "Día 1", title: "Apertura institucional", items: ["Bienvenida del Rectorado", "Presentación de los grupos de investigación oficiales", "Conferencia inaugural: Retos del I+D+i en Canarias"] },
  { day: "Día 2", title: "Innovación y empresa", items: ["Mesa redonda público-privada", "Casos de éxito en transferencia", "Networking con empresas locales"] },
  { day: "Día 3", title: "Talleres y cierre", items: ["Taller de redacción de proyectos europeos (Horizon)", "Taller de proyectos nacionales", "Acto de clausura y entrega de reconocimientos"] },
];

const Programa = () => (
  <>
    <PageHero
      title="Jornadas de Investigación, Innovación y Transferencia"
      subtitle="UNAMED · Edición 2026 · Mayo–Junio · Campus de Tafira Baja"
      image={hero}
    >
      <Button asChild size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-primary uppercase tracking-wider">
        <Link to="/jornadas/inscripcion">Inscríbete</Link>
      </Button>
    </PageHero>

    {/* Stats */}
    <section className="bg-primary/90 text-primary-foreground py-14">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map(({ icon: Icon, value, label }) => (
          <div key={label} className="icon-tile">
            <Icon className="w-12 h-12 text-accent mb-3" strokeWidth={1.5} />
            <div className="text-3xl font-display font-bold text-primary-foreground">{value}</div>
            <div className="uppercase text-xs tracking-widest mt-1 text-primary-foreground/80">{label}</div>
          </div>
        ))}
      </div>
    </section>

    {/* Sobre las jornadas */}
    <section className="py-20">
      <div className="container-narrow">
        <h2 className="section-title">Sobre las Jornadas</h2>
        <p className="text-muted-foreground text-center mt-8 leading-relaxed text-lg">
          La Universidad del Atlántico Medio celebra sus <strong className="text-foreground">Jornadas de Investigación, Innovación y Transferencia</strong>,
          un espacio de encuentro entre investigadores, docentes, estudiantes y empresas para
          presentar resultados, abrir nuevas líneas de colaboración y consolidar el ecosistema
          de I+D+i en Canarias.
        </p>
      </div>
    </section>

    {/* Ejes estratégicos */}
    <section className="bg-secondary py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-title">Ejes estratégicos</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {ejes.map(({ icon: Icon, title, text }) => (
            <Card key={title} className="border-border hover:shadow-[var(--shadow-card)] transition-shadow duration-300 bg-background">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* Programa */}
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="section-title">Programa</h2>
        <div className="mt-12 space-y-6">
          {programa.map((p) => (
            <div key={p.day} className="grid md:grid-cols-[180px_1fr] gap-6 border-l-4 border-accent pl-6 py-4">
              <div>
                <div className="flex items-center gap-2 text-accent">
                  <Calendar className="w-5 h-5" />
                  <span className="uppercase text-sm font-semibold tracking-wider">{p.day}</span>
                </div>
                <h3 className="font-display text-xl mt-1">{p.title}</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                {p.items.map((it) => (
                  <li key={it} className="flex gap-2"><span className="text-accent">▸</span>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-accent text-accent-foreground py-16 text-center">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-accent-foreground mb-4">
          Forma parte del ecosistema I+D+i
        </h2>
        <p className="mb-8 text-accent-foreground/90">Reserva tu plaza en las Jornadas 2026 de la Universidad del Atlántico Medio.</p>
        <Button asChild size="lg" variant="outline" className="border-2 border-accent-foreground text-accent-foreground bg-transparent hover:bg-accent-foreground hover:text-accent uppercase tracking-wider">
          <Link to="/jornadas/inscripcion">Inscribirme ahora</Link>
        </Button>
      </div>
    </section>
  </>
);

export default Programa;
