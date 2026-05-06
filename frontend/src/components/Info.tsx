import { Phone, Mail, MapPin } from "lucide-react";
import { ReactNode } from "react";

interface InfoProps {
  title: string,
  subtitle: string,
  children?: ReactNode
}
export default function Info({ title, subtitle, children }: InfoProps) {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold mb-2">{title}</h2>
      <div className="w-12 h-1 bg-accent mb-6" />
      <p className="text-muted-foreground mb-8 leading-relaxed">
        {subtitle}
      </p>

      {children}

    </div>
  )
}