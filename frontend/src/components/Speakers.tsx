import { Dialog, DialogClose, DialogContent, DialogDescription, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger } from '@radix-ui/react-dialog'
import speaker_1 from '/images/speaker-1.jpg'
import speaker_2 from '/images/speaker-2.jpg'
import speaker_3 from '/images/speaker-3.jpg'
import speaker_4 from '/images/speaker-4.jpg'
import ReactMarkdown from 'react-markdown';
import { Globe, Linkedin, Twitter, X } from 'lucide-react'

interface SpeakersProps {
  name: string,
  role: string,
  description: string,
  imageUrl: string,
  linkedin?: string,
  twitter?: string,
  website?: string
}

export default function Speakers() {

  const speakers: SpeakersProps[] = [
    {
      name: "Ana García Valcárcel",
      role: "Dra en educacion y Catedrática",
      description: `- Catedrática de la Universidad de Salamanca en la Facultad de Educación
- Miembro del Instituto Universitario de Ciencias de la Educación. 
- Miembro de la Comisión Académica del Doctorado “Formación en la sociedad del conocimiento”. 
- Investigadora en el campo de la Innovación, Tecnología Educativa y Formación del profesorado en competencia digital. 
- Miembro del grupo de investigación “Innovación y Educación digital (EduDIG)” de la Universidad de Salamanca. 
- Forma parte de varias redes de investigadores: Red Universitaria de Tecnología Educativa (RUTE), EDUTEC, Red de Innovación Educativa (REUNI+D) y Red Transdiciplinar de Investigación Educativa (RETINDE). 
- Premio María de Maeztu de la Universidad de Salamanca a la excelencia científica.`,
      imageUrl: speaker_1,
      linkedin: "https://es.linkedin.com/in/ana-garcia-valc%C3%A1rcel-mu%C3%B1oz-repiso-76a7a032",
      website: "https://diarium.usal.es/anagv/informacion-3/"
    },
    {
      name: "Manuel Area Moreira",
      role: "Dr. en Pedagogía y Catedrático",
      description: `- Catedrático de la Universidad de La Laguna. 
- Su ámbito de investigación y docencia es la Tecnología Educativa (Cultura digital y educación, Enseñanza con medios y tecnologías, eLearning, Alfabetización y TIC, Políticas educativas y ciudadanía digital, IA en educación,...). 
- Es el Investigador Principal del Laboratorio de Educación y Nuevas Tecnologías (EDULLAB). 
- Ha realizado más de dos centenares de publicaciones académicas sobre Educación y Tecnologías así como dirigido varios proyectos de investigación sobre esta temática. 
- Sus dos últimos libros (2025) son: [Luces y sombras de la IA en la Educación Superior. Didáctica para el pensamiento crítico](https://riull.ull.es/xmlui/bitstream/handle/915/40470/Libro%20Luces%20y%20sombras%20IA%20Educaci%C3%B3n%20v2.pdf?sequence=9&isAllowed=y) y[ Transformación digital de la enseñanza universitaria](https://octaedro.com/wp-content/uploads/2025/11/9788410792081.pdf).`,
      imageUrl: speaker_2,
      linkedin: "https://es.linkedin.com/in/manuel-area-661a42111",
      website: "https://manarea.webs.ull.es/",
      twitter: "https://x.com/manuel_area",
    },
    {
      name: "Cristina Villalonga Gómez",
      role: "Dra en comunicación y educación",
      description: `- Vicerrectora de Educación Digital y Tecnología en la Universidad de Nebrija, desde la que lidera la estrategia de transformación digital. 
- Ha sido directora de Global Campus, la unidad de Educación Digital de la Universidad de Nebrija. Doctora en Comunicación y Educación en Entornos Digitales por la UNED
- Su actividad docente e investigadora se articula en torno a dos líneas principales: los procesos educomunicativos y el desarrollo de competencias digitales y mediáticas; y el análisis y diseño de metodologías docentes y estrategias de aprendizaje en entornos virtuales e híbridos. 
- Está acreditada por la ANECA y tiene un sexenio de investigación por la CNEAI. 
- Es miembro del Grupo de Investigación en Cognición, Educación y Diferencias Individuales (CEDI) de la Universidad de Nebrija, así como del Grupo de Investigación en Comunicación e Información Digital (GICID) de la Universidad de Zaragoza. 
- Coordina el Grupo de Trabajo de Formación Online y Tecnología Educativa de la sectorial de Digitalización de CRUE Universidades Españolas.
`,
      imageUrl: speaker_3,
      linkedin: "https://es.linkedin.com/in/cristinavillalonga/es",
      twitter: "https://x.com/crisvillalonga"
    },
    {
      name: "Airam Manuel Guerra",
      role: "Profesor de ciencias marinas",
      description: `- Profesor en la Universidad del Atlántico Medio donde su actividad docente e investigadora se enfoca en la valorización de las ciencias marinas a través de la enseñanza STEM y la evaluación del impacto de Inteligencia Artificial Generativa (IAGen) en el ámbito universitario. 
- Miembro del grupo de investigación "Transformación de la Enseñanza STEM en Educación Superior (TES-STEM) " .
- Investigador Principal del proyecto "Uso participativo del análisis DAFO para el diseño de una guía de buenas prácticas de la Inteligencia Artificial Generativa en el proceso de enseñanza-aprendizaje universitario. "`,
      imageUrl: speaker_4,
      linkedin: "https://es.linkedin.com/in/airam-manuel-guerra-marrero-69a5b3136",

    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans mx-10 md:p-8 flex flex-col justify-center items-center">
      <div className="flex flex-col items-center mb-16">
        <div className="flex items-center gap-3">
          <h2 className="section-title">Ponentes</h2>
        </div>
      </div>

      <div className="w-full max-w-7xl flex flex-wrap justify-around items-start mb-10">
        {speakers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

const TeamMember = ({ name, role, description, imageUrl, linkedin, twitter, website }: SpeakersProps) => (
  <div className="flex flex-col items-center justify-center text-center hover:scale-105">
    <div className="relative aspect-square mb-6" >
      <div className="w-64 h-72  bg-[#f0f4f8] rounded-[2rem] overflow-hidden">
        <Dialog>
          <DialogTrigger asChild>
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-full object-cover object-top cursor-pointer"
            />
          </DialogTrigger>

          <DialogPortal>
            <DialogOverlay className="fixed inset-0 bg-black/50 z-50" >
              <DialogContent className=" fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-2xl shadow-xl z-50 w-[90vw] max-w-screen-md">
                <DialogTitle className="flex justify-between mb-4" >
                  <h2 className='text-accent text-2xl font-bold' >{name}</h2>
                  <DialogClose>
                    <X />
                  </DialogClose>
                </DialogTitle>
                <div className='flex gap-8 max-[700px]:flex-col max-[700px]:items-center  ' >
                  <div>
                    <div className='w-64 h-72 max-[700px]:h-56 rounded-[2rem] overflow-hidden' >
                      <img className='w-full h-full object-cover object-top' src={imageUrl} alt="name" />
                    </div>
                    <div>
                      <div className='flex gap-4 mt-4' >
                        {linkedin != null && <a className="text-gray-500 text-sm leading-relaxed max-w-[220px]" href={linkedin}><Linkedin /></a>}
                        {twitter != null && <a className="text-gray-500 text-sm leading-relaxed max-w-[220px]" href={twitter}><Twitter /></a>}
                        {website != null && <a className="text-gray-500 text-sm leading-relaxed max-w-[220px]" href={website}><Globe /></a>}
                      </div>
                    </div>
                  </div>
                  <DialogDescription className="text-gray-600 h-80 max-[700px]:h-32 overflow-y-scroll [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                    <ReactMarkdown
                      components={{
                        strong: ({ node, ...props }) => <span className="font-bold text-accent" {...props} />,
                        a: ({ node, ...props }) => <a className="text-accent hover:text-blue-700" {...props} />,
                        ul: ({ node, ...props }) => <ul className="list-disc ml-4" {...props} />,
                        li: ({ node, ...props }) => <li className="mb-2" {...props} />,
                      }}
                    >
                      {description}
                    </ReactMarkdown>
                    <br />
                  </DialogDescription>
                </div>

              </DialogContent>

            </DialogOverlay>
          </DialogPortal>
        </Dialog>
      </div>
    </div>

    <h3 className="text-2xl font-bold text-[#1a1c2d] mb-3">{name}</h3>
    <p className="text-gray-500 text-sm leading-relaxed max-w-[220px]">
      {role}
    </p>

  </div>
);