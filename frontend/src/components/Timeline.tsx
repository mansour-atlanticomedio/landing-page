import { Calendar } from "lucide-react";

export default function Timeline() {
    const programa = [
  { day: "Día 1", title: "Apertura institucional", items: ["Bienvenida del Rectorado", "Presentación de los grupos de investigación oficiales", "Conferencia inaugural: Retos del I+D+i en Canarias"] },
  { day: "Día 2", title: "Innovación y empresa", items: ["Mesa redonda público-privada", "Casos de éxito en transferencia", "Networking con empresas locales"] },
  { day: "Día 3", title: "Talleres y cierre", items: ["Taller de redacción de proyectos europeos (Horizon)", "Taller de proyectos nacionales", "Acto de clausura y entrega de reconocimientos"] },
];
    return (
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
    )
}