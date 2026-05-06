import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Lightbulb, Briefcase, BookOpen, Microscope } from "lucide-react";

export default function Feature() {

    const features = [
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
            text: "Repositorio institucional y acceso libre a los avances científicos.",
        },
    ];

    return (
        <section className="bg-secondary py-20">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="section-title">Ejes estratégicos</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                    {features.map(({ icon: Icon, title, text }) => (
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
    )
}