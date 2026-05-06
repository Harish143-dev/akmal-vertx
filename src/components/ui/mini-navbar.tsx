import React, { useState, useEffect, useRef } from "react";
import vertxLogo from "@/assets/vertx-logo.png";

const AnimatedNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <a
      href={href}
      className="group relative block h-5 overflow-hidden text-sm whitespace-nowrap text-foreground/70 hover:text-foreground transition-colors"
    >
      <span className="block h-5 leading-5 font-grotesk tracking-wide transition-transform duration-300 ease-out group-hover:-translate-y-5">
        {children}
      </span>
      <span className="block h-5 leading-5 font-grotesk tracking-wide text-primary transition-transform duration-300 ease-out group-hover:-translate-y-5">
        {children}
      </span>
    </a>
  );
};

const navLinksData = [
  { label: "Home", href: "#top" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function MiniNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [headerShapeClass, setHeaderShapeClass] = useState("rounded-full");
  const [scrolled, setScrolled] = useState(false);
  const shapeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (shapeTimeoutRef.current) clearTimeout(shapeTimeoutRef.current);
    if (isOpen) setHeaderShapeClass("rounded-2xl");
    else shapeTimeoutRef.current = setTimeout(() => setHeaderShapeClass("rounded-full"), 300);
    return () => {
      if (shapeTimeoutRef.current) clearTimeout(shapeTimeoutRef.current);
    };
  }, [isOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center
      backdrop-blur-xl
      bg-background/60 border border-border/70 shadow-[0_8px_30px_rgba(0,0,0,0.45)]
      ${scrolled ? "px-3 py-2 w-auto" : "pl-6 pr-6 py-2.5 w-[calc(100%-1.5rem)] sm:w-auto"}
      transition-all duration-300 ease-in-out ${headerShapeClass}`}
    >
      <div className="flex items-center justify-between w-full gap-x-6 sm:gap-x-8">
        <a href="#top" className="flex items-center gap-2 flex-shrink-0">
          <img
            src={vertxLogo}
            alt="Vertx"
            className={`w-auto brightness-0 invert transition-all duration-300 ${scrolled ? "h-6" : "h-8"}`}
          />
        </a>

        {!scrolled && (
          <>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              {navLinksData.map((link) => (
                <AnimatedNavLink key={link.href} href={link.href}>
                  {link.label}
                </AnimatedNavLink>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a
                href="#contact"
                className="relative inline-flex items-center justify-center whitespace-nowrap px-5 py-2 text-xs font-tech tracking-[0.2em] rounded-full
                bg-gradient-to-r from-primary to-[hsl(var(--accent-violet))] text-primary-foreground
                shadow-[0_0_20px_hsl(var(--primary)/0.45)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.7)] transition-shadow"
              >
                GET QUOTE
              </a>
            </div>
          </>
        )}

        <button
          className={`${scrolled ? "flex" : "md:hidden flex"} items-center justify-center w-8 h-8 text-foreground`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      <div
        className={`${scrolled ? "flex" : "md:hidden flex"} flex-col items-center w-full transition-all ease-in-out duration-300 overflow-hidden
          ${isOpen ? "max-h-[500px] opacity-100 pt-4 mt-3 border-t border-border/60" : "max-h-0 opacity-0 pt-0 mt-0"}`}
      >
        <nav className="flex flex-col items-center gap-4 text-base w-full">
          {navLinksData.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-grotesk text-foreground/80 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          onClick={() => setIsOpen(false)}
          className="mt-5 mb-1 inline-flex items-center justify-center px-6 py-2.5 text-xs font-tech tracking-[0.2em] rounded-full
          bg-gradient-to-r from-primary to-[hsl(var(--accent-violet))] text-primary-foreground"
        >
          GET QUOTE
        </a>
      </div>
    </header>
  );
}