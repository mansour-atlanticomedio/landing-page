import { Mail, Phone, Facebook, Twitter, Instagram, Linkedin, Youtube, MapPin, CircleArrowUp } from "lucide-react";
import logo_white from "@/assets/logo_white.png";

export default function Footer () {
    return (
        <footer className=" bg-primary text-primary-foreground" >
        <div className="max-w-7xl my-36 mx-14 grid md:grid-cols-3 gap-10">
          <div>
            <img src={logo_white} alt="UNAMED" width={130} />
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Universidad del Atlántico Medio — Impulsando la investigación, la innovación
              y la transferencia de conocimiento en Canarias.
            </p>
            <div className="flex gap-3 mt-5">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-accent hover:border-accent transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-primary-foreground font-display uppercase tracking-wider text-sm mb-4">Te puede interesar</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a className="hover:text-accent" href="#">Nuestros estudios</a></li>
              <li><a className="hover:text-accent" href="#">Trabaja con nosotros</a></li>
              <li><a className="hover:text-accent" href="#">Normativa</a></li>
              <li><a className="hover:text-accent" href="#">Buzón de Sugerencias</a></li>
              <li><a className="hover:text-accent" href="#">Canal Ético</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-primary-foreground font-display uppercase tracking-wider text-sm mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-2"><Phone className="w-4 h-4 mt-0.5 text-accent" /> +34 828 019 019</li>
              <li className="flex items-start gap-2"><Mail className="w-4 h-4 mt-0.5 text-accent" /> jornadas@atlanticomedio.es</li>
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-accent" /> Carretera de Quílmes, 37 · 35017 Tafira Baja · Las Palmas de Gran Canaria</li>
            </ul>
          </div>
        </div>
        <div className="bg-topbar text-center text-sm py-5 flex justify-around relative">
          <p>
            Todos los derechos reservados.
          </p>
          <p>
            Aviso Legal · Política de Privacidad · Política de Cookies
          </p>
          <a href="#top-arrow">
            <CircleArrowUp className="absolute right-10" />
          </a>

        </div>
      </footer>
    )
}