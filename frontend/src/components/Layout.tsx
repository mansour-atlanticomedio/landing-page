import { Link, NavLink, Outlet } from "react-router-dom";
import { Mail, Phone, Facebook, Twitter, Instagram, Linkedin, Youtube, MapPin, CircleArrowUp } from "lucide-react";
import logo from "@/assets/logo.png";
import logo_white from "@/assets/logo_white.png";

const navItems = [
  { to: "/", label: "Programa" },
  { to: "/inscripcion", label: "Inscripción" },
  { to: "/documentacion", label: "Documentación" },
  { to: "/contacto", label: "Contacto" },
];

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Topbar */}
      <div id="top-arrow" className="bg-topbar text-primary-foreground text-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center justify-center gap-x-10 gap-y-1">
          <a href="tel:+34828019019" className="flex items-center gap-2 hover:opacity-80">
            <Phone className="w-4 h-4" /> +34 828 019 019
          </a>
          <a href="mailto:jornadas@atlanticomedio.es" className="flex items-center gap-2 hover:opacity-80">
            <Mail className="w-4 h-4" /> jornadas@atlanticomedio.es
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="bg-background border-b border-border sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="UNAMED" width={130} />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `uppercase text-sm font-semibold tracking-wider transition-colors ${isActive ? "text-accent" : "text-foreground hover:text-accent"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
        {/* Mobile nav */}
        <nav className="md:hidden border-t border-border flex justify-around py-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `text-xs uppercase font-semibold ${isActive ? "text-accent" : "text-foreground"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
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
    </div>
  );
};

export default Layout;
