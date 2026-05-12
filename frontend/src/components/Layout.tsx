import { Link, NavLink, Outlet } from "react-router-dom";
import { Mail, Phone} from "lucide-react";
import logo from "@/assets/logo.png";
import Footer from "@/components/Footer";
import FAQ from "./FAQ";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const navItems = [
  { to: "/", label: "Inicio" },
  { to: "/programa", label: "Programa" },
  { to: "/inscripcion", label: "Inscripción" },
  { to: "/documentacion", label: "Documentación" },
  { to: "/contacto", label: "Contacto" },
];

const Layout = () => {

  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Topbar */}
      <div id="top-arrow" className="bg-topbar text-primary-foreground text-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center justify-center gap-x-10 gap-y-1">
          <a href="tel:+34828019019" className="flex items-center gap-2 hover:opacity-80">
            <Phone className="w-4 h-4" /> +34 828 019 019
          </a>
          <a href="mailto:jornadas@atlanticomedio.es" className="flex items-center gap-2 hover:opacity-80">
            <Mail className="w-4 h-4" /> investigacion@atlanticomedio.es
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="bg-background border-b border-border sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="logo atlantico medio" width={130} />
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

      <FAQ />

      <Footer />

    </div>
  );
};

export default Layout;
