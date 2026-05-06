import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Info() {
    return (
        <div>
            <h2 className="font-display text-2xl font-semibold mb-2">Universidad del Atlántico Medio</h2>
            <div className="w-12 h-1 bg-accent mb-6" />
            <p className="text-muted-foreground mb-8 leading-relaxed">
              La UNAMED es una universidad privada en Las Palmas de Gran Canaria con un fuerte
              compromiso con la investigación, la innovación y la transferencia de conocimiento
              al tejido empresarial y social canario.
            </p>

            <ul className="space-y-5">
              <li className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Dirección</div>
                  <div className="text-muted-foreground text-sm">Carretera de Quílmes, 37 · 35017 Tafira Baja · Las Palmas de Gran Canaria</div>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Teléfono</div>
                  <a href="tel:+34828019019" className="text-muted-foreground text-sm hover:text-accent">+34 828 019 019</a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Email</div>
                  <a href="mailto:jornadas@atlanticomedio.es" className="text-muted-foreground text-sm hover:text-accent">jornadas@atlanticomedio.es</a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Horario</div>
                  <div className="text-muted-foreground text-sm">Lunes a viernes · 9:00 – 18:00</div>
                </div>
              </li>
            </ul>
          </div>
    )
}