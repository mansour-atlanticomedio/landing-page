import { useState } from "react";
import { z } from "zod";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";
import hero from "@/assets/campus.jpg";

const schema = z.object({
  nombre: z.string().trim().min(2, "Nombre demasiado corto").max(120),
  email: z.string().trim().email("Email no válido").max(255),
  asunto: z.string().trim().min(3, "Asunto demasiado corto").max(150),
  mensaje: z.string().trim().min(10, "Mensaje demasiado corto").max(1000),
});

const Contacto = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const r = schema.safeParse({
      nombre: fd.get("nombre"),
      email: fd.get("email"),
      asunto: fd.get("asunto"),
      mensaje: fd.get("mensaje"),
    });
    if (!r.success) {
      toast.error(r.error.errors[0].message);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Mensaje enviado. Te responderemos lo antes posible.");
      e.currentTarget.reset();
    }, 800);
  };

  return (
    <>
      <PageHero title="Contacto" subtitle="Estamos a tu disposición para resolver cualquier duda" image={hero} />

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <h2 className="font-display text-2xl font-semibold mb-2">Universidad del Atlántico Medio</h2>
            <div className="w-12 h-1 bg-accent mb-6" />
            <p className="text-muted-foreground mb-8 leading-relaxed">
              La UNAMED es una universidad privada en Las Palmas de Gran Canaria con un fuerte
              compromiso con la investigación, la innovación y la transferencia de conocimiento
              al tejido empresarial y social canario.
            </p>

            <ul className="space-y-5">
              <li className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Dirección</div>
                  <div className="text-muted-foreground text-sm">Carretera de Quílmes, 37 · 35017 Tafira Baja · Las Palmas de Gran Canaria</div>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Teléfono</div>
                  <a href="tel:+34828019019" className="text-muted-foreground text-sm hover:text-accent">+34 828 019 019</a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Email</div>
                  <a href="mailto:jornadas@atlanticomedio.es" className="text-muted-foreground text-sm hover:text-accent">jornadas@atlanticomedio.es</a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Horario</div>
                  <div className="text-muted-foreground text-sm">Lunes a viernes · 9:00 – 18:00</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Form */}
          <div className="bg-card border border-border rounded-md p-8 shadow-[var(--shadow-card)]">
            <h3 className="font-display text-xl font-semibold mb-6">Envíanos un mensaje</h3>
            <form onSubmit={onSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="nombre">Nombre *</Label>
                <Input id="nombre" name="nombre" required maxLength={120} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" name="email" type="email" required maxLength={255} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="asunto">Asunto *</Label>
                <Input id="asunto" name="asunto" required maxLength={150} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mensaje">Mensaje *</Label>
                <Textarea id="mensaje" name="mensaje" rows={5} required maxLength={1000} />
              </div>
              <Button type="submit" disabled={loading} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground uppercase tracking-wider font-semibold">
                {loading ? "Enviando..." : "Enviar mensaje"}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacto;
