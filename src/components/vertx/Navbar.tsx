import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#process" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/70 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 md:h-20 items-center justify-between">
        <Tooltip>
          <TooltipTrigger asChild>
            <a href="#top" className="flex items-baseline gap-2 text-foreground group">
              <span className="font-display font-semibold text-3xl tracking-[0.18em] leading-none">VERTX</span>
              <span className="h-1.5 w-1.5 rounded-full bg-primary pulse-glow translate-y-[-4px]" />
            </a>
          </TooltipTrigger>
          <TooltipContent side="bottom" className="font-serif-italic text-base">
            We Paint the Sky
          </TooltipContent>
        </Tooltip>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild size="sm" className="bg-primary hover:bg-primary-glow text-primary-foreground rounded-full px-6 h-10 font-sans tracking-wide pulse-glow">
            <a href="#contact">Get a Quote</a>
          </Button>
        </div>

        <button
          className="lg:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border">
          <div className="container py-6 flex flex-col gap-5">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-foreground/80 hover:text-foreground">
                {l.label}
              </a>
            ))}
            <Button asChild className="bg-primary hover:bg-primary-glow text-primary-foreground rounded-full">
              <a href="#contact" onClick={() => setOpen(false)}>Get a Quote</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
