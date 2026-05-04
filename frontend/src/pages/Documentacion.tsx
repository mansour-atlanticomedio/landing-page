import { useState } from "react";
import { z } from "zod";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FileText, CheckCircle2, Upload } from "lucide-react";
import { toast } from "sonner";
import hero from "@/assets/campus.jpg";
import { sendDocumentation } from "@/services/forms.service";
import { DocumentationProps } from "@/types/documentation.type";

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

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data : DocumentationProps = {
      name: fd.get("nombre").toString(),
      email: fd.get("email").toString(),
      files: files,
      reference: fd.get("referencia").toString(),
      notes: fd.get("notas").toString(),
    };

    if (!files || files.length === 0) {
      toast.error("Sube al menos un archivo");
      return;
    }
    try {
          setLoading(true);
          const result = sendDocumentation(data)
          setLoading(false);
          toast.success(`Documentacion enviada correctamente`);
          e.currentTarget.reset();
        } catch (error) {
          toast.error("Error al enviar la documentacion ", error);
          e.currentTarget.reset();
        }
  };

  return (
    <>
      <PageHero title="Documentación" subtitle="Información y entrega de documentación requerida" image={hero} />

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-2xl font-semibold mb-2">Documentos necesarios</h2>
            <div className="w-12 h-1 bg-accent mb-6" />
            <p className="text-muted-foreground mb-6">
              Para completar tu participación en las Jornadas debes aportar la siguiente documentación.
              Todos los archivos deben enviarse en formato PDF y no superar los 10 MB por archivo.
            </p>
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
          </div>

          <div className="bg-card border border-border rounded-md p-8 shadow-[var(--shadow-card)] h-fit">
            <h3 className="font-display text-xl font-semibold mb-6">Subir documentación</h3>
            <form onSubmit={onSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="nombre">Nombre completo *</Label>
                <Input id="nombre" name="nombre" required maxLength={120} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" name="email" type="email" required maxLength={255} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="referencia">Referencia de inscripción</Label>
                <Input id="referencia" name="referencia" maxLength={60} placeholder="Opcional" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="files">Archivos *</Label>
                <label
                  htmlFor="files"
                  className="flex flex-col items-center justify-center border-2 border-dashed border-border rounded-md py-8 cursor-pointer hover:border-accent hover:bg-secondary transition-colors"
                >
                  <Upload className="w-8 h-8 text-accent mb-2" />
                  <span className="text-sm text-muted-foreground">
                    {files && files.length > 0 ? `${files.length} archivo(s) seleccionados` : "Haz clic para seleccionar archivos PDF"}
                  </span>
                  <input
                    id="files"
                    type="file"
                    multiple
                    accept=".pdf"
                    className="hidden"
                    onChange={(e) => setFiles(e.target.files)}
                  />
                </label>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notas">Notas</Label>
                <Textarea id="notas" name="notas" rows={3} maxLength={500} />
              </div>

              <Button type="submit" disabled={loading} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground uppercase tracking-wider font-semibold">
                {loading ? "Enviando..." : "Enviar documentación"}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Documentacion;
