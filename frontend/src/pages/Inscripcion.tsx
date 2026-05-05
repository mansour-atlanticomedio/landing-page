import { useState } from "react";
import { z } from "zod";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import hero from "@/assets/campus.jpg";
import { InscriptionProps } from "@/types/inscription.type";
import { sendEmail } from "@/services/email.service";

const schema = z.object({
  nombre: z.string().trim().min(2, "Nombre demasiado corto").max(80),
  apellidos: z.string().trim().min(2, "Apellidos demasiado cortos").max(120),
  email: z.string().trim().email("Email no válido").max(255),
  telefono: z.string().trim().max(20).optional().or(z.literal("")),
  perfil: z.string().min(1, "Selecciona un perfil"),
  institucion: z.string().trim().max(150).optional().or(z.literal("")),
  comentarios: z.string().max(500).optional().or(z.literal("")),
  acepto: z.literal(true, { errorMap: () => ({ message: "Debes aceptar la política de privacidad" }) }),
});

const Inscripcion = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget

    const fd = new FormData(e.currentTarget);
    const data: InscriptionProps = {
      name: fd.get("nombre").toString(),
      lastName: fd.get("apellidos").toString(),
      email: fd.get("email").toString(),
      phone: fd.get("telefono").toString(),
      profile: fd.get("perfil").toString(),
      comments: fd.get("comentarios").toString(),
    };


    try {
      setLoading(true);
      await sendEmail(data);
      setLoading(false);
      toast.success("¡Inscripción enviada! Te contactaremos por email.");
      form.reset()
    } catch (error) {
      toast.error("Error al crear la inscripcion: ", error);
    }
  };

  return (
    <>
      <PageHero title="Inscripción" subtitle="Completa el formulario para reservar tu plaza" image={hero} />
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-6">
          <div className="bg-card border border-border rounded-md p-8 shadow-[var(--shadow-card)]">
            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="nombre">Nombre *</Label>
                  <Input id="nombre" name="nombre" required maxLength={80} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="apellidos">Apellidos *</Label>
                  <Input id="apellidos" name="apellidos" required maxLength={120} />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" name="email" type="email" required maxLength={255} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefono">Teléfono</Label>
                  <Input id="telefono" name="telefono" type="tel" maxLength={20} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="perfil">Perfil *</Label>
                <Select name="perfil" required>
                  <SelectTrigger id="perfil"><SelectValue placeholder="Selecciona tu perfil" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="investigador">Investigador / PDI</SelectItem>
                    <SelectItem value="estudiante">Estudiante</SelectItem>
                    <SelectItem value="empresa">Empresa</SelectItem>
                    <SelectItem value="institucional">Institucional</SelectItem>
                    <SelectItem value="otro">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="comentarios">Comentarios</Label>
                <Textarea id="comentarios" name="comentarios" rows={4} maxLength={500} />
              </div>

              <div className="flex items-start gap-3">
                <Checkbox id="acepto" name="acepto" required />
                <Label htmlFor="acepto" className="text-sm text-muted-foreground font-normal leading-relaxed">
                  Acepto la política de privacidad y el tratamiento de mis datos por la Universidad del Atlántico Medio.
                </Label>
              </div>

              <Button type="submit" disabled={loading} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground uppercase tracking-wider font-semibold">
                {loading ? "Enviando..." : "Enviar inscripción"}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Inscripcion;
