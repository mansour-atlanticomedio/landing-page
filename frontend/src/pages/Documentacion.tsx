import Hero from "@/components/Hero";
import { FileText, GraduationCap, LucideIcon, Mail } from "lucide-react";
import hero from "@/assets/hero-jornadas.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Info from "@/components/Info";
import { CardProps } from "@/types/common";

const Documentacion = () => {

  const emailto: string = 'mailto:investigacion@atlanticomedio.es?subject=Documentación Jornadas de Investigación'

  const templateSections: CardProps[][] = [
    [
      {
        title: "Resumen del proyecto",
        subtitle: "(Máximo 3-4 líneas)",
        description: "Descripción general del proyecto, su contexto y finalidad."
      },
      {
        title: "Objetivos del proyecto",
        subtitle: "(Máximo 4-5 líneas)",
        description: "Indique el objetivo general y los principales objetivos específicos del proyecto. "
      },
      {
        title: "Metodología",
        subtitle: "(Máximo 4-5 líneas)",
        description: "Explique de forma sintética el enfoque metodológico, las fases del proyecto y las principales técnicas o herramientas empleadas. "
      },
      {
        title: "Resultados obtenidos o esperados",
        subtitle: "(Máximo 4 líneas)",
        description: "Incluya los resultados más relevantes alcanzados hasta el momento o los resultados previstos, indicando su interés científico, social, educativo o tecnológico. "
      },
      {
        title: "Potencial de transferencia e impacto",
        subtitle: "(Máximo 3-4 líneas)",
        description: "Señale posibles aplicaciones, impacto social, educativo, empresarial o institucional, así como oportunidades de colaboración. "
      },
      {
        title: "Observaciones",
        description: "Cualquier información adicional relevante para la organización (necesidades técnicas, aclaraciones, etc.). "
      }
    ],
    [
      {
        title: "Título de la tesis",
        subtitle: "(Claro y comprensible para público no especialista)"
      },
      {
        title: "Objetivos de la tesis",
        subtitle: "(Máximo 4-5 líneas)",
        description: "Describa de forma sintética el objetivo general de su tesis doctoral y, si procede, uno o dos objetivos específicos. "
      },
      {
        title: "Metodología",
        subtitle: "(Máximo 3-4 líneas)",
        description: "Indique brevemente el enfoque metodológico (teórico, empírico, mixto, experimental, cualitativo, cuantitativo, etc.), el tipo de estudio y las principales técnicas o fuentes de datos utilizadas. "
      },
      {
        title: "Resultados o resultados preliminares",
        subtitle: "(Máximo 4 líneas)",
        description: "Resuma los principales resultados obtenidos hasta el momento o, en su caso, los resultados esperados y su relevancia científica o aplicada. "
      },
      {
        title: "Estado actual de la tesis ",
        description: `- Inicio
- En desarollo
- Fase avanzada
- Próxima al depósito`
      },
      {
        title: "Observaciones",
        description: "Cualquier información adicional relevante para la organización (necesidades técnicas, aclaraciones, etc.). "
      }
    ]
  ]

  const generalEntries = [
    [
      "Título del proyecto",
      "Nombre y apellidos del investigador principal",
      "Correo electrónico",
      "Nombre y apellidos de los investigadores participantes"
    ],
    [
      "Nombre y apellidos",
      "Programa de doctorado",
      "Universidad",
      "Correo electrónico",
      "Área de conocimiento"
    ],
  ]

  const templateIcons: LucideIcon[] = [
    FileText,
    GraduationCap
  ]

  return (
    <>
      <Hero title="Documentación" subtitle="Información y entrega de documentación requerida" image={hero} />

      <section className="py-10">

        <div className="flex flex-col gap-4 justify-center items-center mb-32" >
          <h3 className="section-title" >Plantillas Oficiales</h3>
          <h4 className="text-muted-foreground text-center leading-relaxed text-lg max-w-7xl" >A continuación encontrará los dos formatos disponibles para presentar su trabajo en las jornadas. Complete la plantilla que corresponda y envíela cumplimentada al correo oficial de investigación.</h4>
          <div className="w-full flex justify-center" >
            <Button size="lg" className=" bg-accent w-fit px-8 rounded-full text-primary-foreground tracking-wider underline">
              <Mail />
              <Link to={emailto}>investigacion@atlanticomedio.es</Link>
            </Button>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className=" max-w-7xl m-8 grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center items-start">
            {
              templateSections.map((templateSection, index) => (
                <Info
                  key={index}
                  icon={templateIcons[index]}
                  title={`Plantilla ${index + 1}`}
                  subtitle="Presentación de proyectos de investigación e innovación"
                  sections={templateSection}
                  generalEntries={generalEntries[index]}
                ></Info>
              ))
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default Documentacion;
