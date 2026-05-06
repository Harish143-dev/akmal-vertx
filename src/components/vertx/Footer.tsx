import { Instagram, Youtube, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import vertxLogo from "@/assets/vertx-logo.png";

export const Footer = () => (
  <footer className="bg-background border-t border-border pt-24 pb-10">
    <div className="container">
      <div className="grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <img src={vertxLogo} alt="Vertx" className="h-12 w-auto brightness-0 invert" />
          <p className="mt-6 font-display font-serif-italic text-3xl md:text-4xl tracking-tight max-w-md">
            We Paint <span className="text-gradient-blue">the Sky.</span>
          </p>
          <p className="mt-6 text-sm text-foreground/60 leading-relaxed font-sans max-w-md">
            Vertx is India's premier drone light show company, creating breathtaking aerial experiences for events,
            brands, and celebrations across the country.
          </p>
          <div className="mt-8 flex gap-3">
            {[
              { Icon: Instagram, href: "#", label: "Instagram" },
              { Icon: Youtube, href: "#", label: "YouTube" },
              { Icon: Linkedin, href: "#", label: "LinkedIn" },
            ].map(({ Icon, href, label }) => (
              <a key={label} href={href} aria-label={label} className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border hover:border-primary hover:text-primary hover:bg-primary/5 transition-all">
                <Icon size={20} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-3">
          <h4 className="font-sans font-semibold text-[11px] tracking-[0.32em] uppercase text-foreground/50">Quick Links</h4>
          <ul className="mt-6 space-y-4 text-sm font-sans">
            {[
              ["About Us", "#about"],
              ["Services", "#services"],
              ["How It Works", "#process"],
              ["Gallery", "#gallery"],
              ["Contact", "#contact"],
            ].map(([l, h]) => (
              <li key={h}><a href={h} className="text-foreground/70 hover:text-primary transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="font-sans font-semibold text-[11px] tracking-[0.32em] uppercase text-foreground/50">Contact</h4>
          <ul className="mt-6 space-y-4 text-sm text-foreground/70 font-sans">
            <li className="flex items-start gap-3"><Mail size={18} className="mt-0.5 text-primary shrink-0" strokeWidth={1.5} /> hello@vertx.in</li>
            <li className="flex items-start gap-3"><Phone size={18} className="mt-0.5 text-primary shrink-0" strokeWidth={1.5} /> +91 XXXXX XXXXX</li>
            <li className="flex items-start gap-3"><MapPin size={18} className="mt-0.5 text-primary shrink-0" strokeWidth={1.5} /> Chennai, Tamil Nadu, India</li>
          </ul>
        </div>
      </div>

      <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-foreground/50 font-sans">
        <div>© 2026 Vertx Drone Light Show. All rights reserved.</div>
        <div>Designed &amp; Developed by <span className="text-foreground/80">EyeLevel Growth Studio</span></div>
      </div>
    </div>
  </footer>
);
