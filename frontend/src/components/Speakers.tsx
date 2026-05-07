import speaker_1 from '/images/speaker-1.jpg'
import speaker_2 from '/images/speaker-2.jpg'
import speaker_3 from '/images/speaker-3.jpg'
import speaker_4 from '/images/speaker-4.jpg'

export default function Speakers() {
  const speakers = [
    {
      name: "Ana García Valcárcel",
      role: "Dra en educacion y Catedrática",
      description: "Miembro de la Comisión Académica del Doctorado “Formación en la sociedad del conocimiento”",
      imageUrl: speaker_1,
    },
    {
      name: "Manuel Area Moreira",
      role: "Dr. en Pedagogía y Catedrático",
      description: "Su ámbito de investigación y docencia es la Tecnología Educativa",
      imageUrl: speaker_2,
    },
    {
      name: "Cristina Villalonga",
      role: "Dra en comunicación y educación",
      description: " Su actividad docente e investigadora se articula en los procesos educomunicativos y el desarrollo de competencias digitales y mediáticas",
      imageUrl: speaker_3,
    },
    {
      name: "Airam Manuel Guerra",
      role: "Profesor de ciencas marinas",
      description: "Miembro del grupo de investigación 'Transformación de la Enseñanza STEM en Educación Superior (TES-STEM)' ",
      imageUrl: speaker_4,
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans mx-10 md:p-8 flex flex-col justify-center items-center">
      <div className="flex flex-col items-center mb-16">
        <div className="flex items-center gap-3">
          <h2 className="section-title">Ponentes</h2>
        </div>
      </div>

      <div className="w-full flex flex-wrap justify-around items-start mb-10">
        {speakers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

const TeamMember = ({ name, role, description, imageUrl }) => (
  <div className="flex flex-col items-center justify-center text-center">
    <div className="relative aspect-square mb-6" >
      <div className="w-80 h-80 bg-[#f0f4f8] rounded-[2rem] overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white px-4 py-1.5 rounded-full shadow-sm">
        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-800 whitespace-nowrap">
          {role}
        </span>
      </div>
    </div>
    
    <h3 className="text-2xl font-bold text-[#1a1c2d] mb-3">{name}</h3>
    <p className="text-gray-500 text-sm leading-relaxed max-w-[220px]">
      {description}
    </p>


  </div>
);