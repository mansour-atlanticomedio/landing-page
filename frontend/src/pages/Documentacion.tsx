import { useState } from "react";
import { z } from "zod";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FileText, CheckCircle2, Upload } from "lucide-react";
import { toast } from "sonner";
import hero from "@/assets/campus.jpg";
import { sendDocumentation, sendEmail } from "@/services/api.service";
import { InscriptionProps } from "@/types/inscription.type";
import { SimpleFormProps } from "@/types/form.type";
import SimpleForm from "@/components/SimpleForm";
import Info from "@/components/Info";
import { DocumentationProps } from "@/types/Documentation.type";


const docs = [
  "DNI / NIE / Pasaporte en vigor (PDF)",
  "Certificado de afiliación a institución o empresa",
  "Resumen de comunicación o póster (máx. 500 palabras)",
  "Declaración de conformidad con normativa de Ciencia Abierta",
];

const schema = z.object({
  nombre: z.string().trim().min(2).max(120),
  email: z.string().trim().email("Email no válido").max(255),
  referencia: z.string().trim().max(60).optional().or(z.literal("")),
  notas: z.string().max(500).optional().or(z.literal("")),
});

const Documentacion = () => {
  const [files, setFiles] = useState<FileList | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  
  if (!files || files.length === 0) {
    toast.error("Sube al menos un archivo");
    return;
  }

  const fd = new FormData(e.currentTarget);
  
  Array.from(files).forEach((file) => {
    fd.append("files", file);
  });

  try {
    setLoading(true);
    await sendDocumentation(fd);
    setLoading(false);
    toast.success(`Documentación enviada correctamente`);
    e.currentTarget.reset();
    setFiles(null);
  } catch (error) {
    setLoading(false);
    toast.error("Error al enviar la documentación");
  }
};

  const formEntries: SimpleFormProps[] = [
    {
      label: 'name',
      htmlFor: 'Nombre completo',
      isRequired: true
    },
    {
      label: 'email',
      htmlFor: 'Email',
      isRequired: true
    },
    {
      label: 'reference',
      htmlFor: 'Referencia de inscripción',
    },
    {
      label: 'files',
      htmlFor: 'Archivos',
      isFileUpload: true,
      isRequired: true
    },
    {
      label: 'notes',
      htmlFor: 'Notas',
      isTextArea: true,
    }
  ]

  return (
    <>
      <Hero title="Documentación" subtitle="Información y entrega de documentación requerida" image={hero} />

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <Info
            title="Documentos necesarios"
            subtitle="Para completar tu participación en las Jornadas debes aportar la siguiente documentación.
              Todos los archivos deben enviarse en formato PDF y no superar los 10 MB por archivo."
          >
            <ul className="space-y-3">
              {docs.map((d) => (
                <li key={d} className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{d}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-5 border-l-4 border-accent bg-secondary text-sm text-muted-foreground">
              <div className="flex gap-2 items-center font-semibold text-foreground mb-1">
                <FileText className="w-4 h-4 text-accent" /> Plazo de entrega
              </div>
              Hasta 15 días antes del inicio de las Jornadas. Documentación tardía no garantiza participación.
            </div>
          </Info>

          <SimpleForm title="Subir documentación" formEntries={formEntries} onSubmit={onSubmit} files={files} fileHandler={setFiles} />
        </div>
      </section>
    </>
  );
};

export default Documentacion;
