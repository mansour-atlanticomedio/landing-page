import { useState } from "react";
import { z } from "zod";
import PageHero from "@/components/PageHero";
import { toast } from "sonner";
import hero from "@/assets/campus.jpg";
import Info from "@/components/Info";
import SimpleForm from "@/components/SimpleForm";
import { SimpleFormProps } from "@/types/form.type";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

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

  const formEntries: SimpleFormProps[] = [
    {
      label: 'name',
      htmlFor: 'Nombre',
      isRequired: true
    },
    {
      label: 'email',
      htmlFor: 'Email',
      isRequired: true
    },
    {
      label: 'about',
      htmlFor: 'Asunto',
      isRequired: true
    },
    {
      label: 'message',
      htmlFor: 'Mensaje',
      isTextArea: true,
    },
  ]

  return (
    <>
      <PageHero title="Contacto" subtitle="Estamos a tu disposición para resolver cualquier duda" image={hero} />

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          <Info
            title="Universidad del Atlántico Medio"
            subtitle=" La UNAMED es una universidad privada en Las Palmas de Gran Canaria con un fuerte
              compromiso con la investigación, la innovación y la transferencia de conocimiento
              al tejido empresarial y social canario."
          >
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
          </Info>

          <SimpleForm title="Envíanos un mensaje" formEntries={formEntries} onSubmit={onSubmit} loading={loading} />

        </div>
      </section>
    </>
  );
};

export default Contacto;
