import { useState } from "react";
import { z } from "zod";
import PageHero from "@/components/PageHero";
import { toast } from "sonner";
import hero from "@/assets/campus.jpg";
import Info from "@/components/Info";
import SimpleForm from "@/components/SimpleForm";
import { SimpleFormProps } from "@/types/form.type";

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

  const formEntries : SimpleFormProps[] = [
    {
      label: 'name',
      htmlFor: 'Nombre',
    },
    {
      label: 'email',
      htmlFor: 'Email',
    },
    {
      label: 'about',
      htmlFor: 'Asunto',
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

          <Info />

          <SimpleForm formEntries={formEntries} onSubmit={onSubmit} loading={loading} />
          
        </div>
      </section>
    </>
  );
};

export default Contacto;
