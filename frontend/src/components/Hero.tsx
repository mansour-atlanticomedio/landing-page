import { ReactNode } from "react";

interface HeroProps {
  title: string;
  subtitle?: string;
  image: string;
  children?: ReactNode;
}

const Hero = ({ title, subtitle, image, children }: HeroProps) => (
  <section
    className="relative min-h-[420px] md:min-h-[520px] flex items-center justify-center text-center text-primary-foreground"
    style={{ backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center" }}
  >
    <div className="absolute inset-0 hero-overlay" />
    <div className="relative z-10 max-w-4xl px-6 py-20">
      <h1 className=" font-display text-3xl md:text-5xl font-bold uppercase tracking-wide text-primary-foreground mb-4">
        {title}
      </h1>
      {subtitle && <p className="text-lg md:text-xl text-primary-foreground/90">{subtitle}</p>}
      {children && <div className="mt-8">{children}</div>}
    </div>
  </section>
);

export default Hero;
