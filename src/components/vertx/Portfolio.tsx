import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { ArrowUpRight, Play, X } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

type Item = {
  src: string;
  video: string;
  title: string;
  category: string;
  location: string;
  year: string;
  drones: string;
};

// Replace these video URLs with your actual show footage.
const SAMPLE = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

const items: Item[] = [
  { src: g1, video: SAMPLE, title: "Sky Vows", category: "Wedding", location: "Chennai", year: "2025", drones: "300" },
  { src: g2, video: SAMPLE, title: "Aurora Launch", category: "Brand Activation", location: "Bangalore", year: "2025", drones: "500" },
  { src: g3, video: SAMPLE, title: "Tricolour Above", category: "National Event", location: "New Delhi", year: "2026", drones: "800" },
  { src: g4, video: SAMPLE, title: "Moonlit Reception", category: "Wedding", location: "Hyderabad", year: "2025", drones: "250" },
  { src: g5, video: SAMPLE, title: "Vertex Summit", category: "Corporate", location: "Mumbai", year: "2026", drones: "400" },
  { src: g6, video: SAMPLE, title: "Coastal Rhythm", category: "Music Festival", location: "Goa", year: "2025", drones: "600" },
];

export const Portfolio = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<Item | null>(null);
  const hoverVideoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const cards = el.querySelectorAll<HTMLElement>("[data-parallax]");

    const onScroll = () => {
      const vh = window.innerHeight;
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const dist = (center - vh / 2) / vh; // -1..1 across viewport
        const img = card.querySelector<HTMLElement>("[data-parallax-img]");
        if (img) {
          img.style.transform = `translate3d(0, ${dist * -40}px, 0) scale(1.15)`;
        }
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Lock body scroll when modal open + ESC to close
  useEffect(() => {
    if (!active) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  const handleHoverPlay = (i: number, play: boolean) => {
    const v = hoverVideoRefs.current[i];
    if (!v) return;
    if (play) {
      v.currentTime = 0;
      v.play().catch(() => {});
    } else {
      v.pause();
    }
  };

  return (
    <section id="portfolio" className="relative bg-background py-28 md:py-36 overflow-hidden">
      {/* Decorative radial glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] radial-blue opacity-60" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-2xl">
            <Reveal><SectionLabel>Selected Portfolio</SectionLabel></Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-8 font-display text-5xl md:text-7xl tracking-tight leading-[0.95]">
                Shows that <span className="font-serif-italic text-gradient-blue">moved</span> the sky
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <p className="text-foreground/60 font-light max-w-sm md:text-right">
              A curated selection of cinematic drone performances staged across India.
            </p>
          </Reveal>
        </div>

        {/* Marquee strip */}
        <Reveal delay={0.2}>
          <div className="relative mt-14 overflow-hidden border-y border-border/60 py-6">
            <div className="flex gap-12 whitespace-nowrap animate-marquee will-change-transform">
              {[...items, ...items].map((it, i) => (
                <span key={i} className="flex items-center gap-4 font-display text-3xl md:text-5xl text-foreground/30 hover:text-foreground transition-colors">
                  {it.title}
                  <span className="inline-block w-2 h-2 rounded-full bg-primary/70" />
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Editorial grid with parallax */}
        <div ref={containerRef} className="mt-20 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {items.map((it, i) => {
            // Editorial layout spans
            const layout = [
              "md:col-span-7 md:row-span-2 h-[420px] md:h-[640px]",
              "md:col-span-5 h-[360px] md:h-[300px] md:mt-16",
              "md:col-span-5 h-[360px] md:h-[330px]",
              "md:col-span-5 h-[360px] md:h-[330px] md:mt-12",
              "md:col-span-7 md:row-span-2 h-[420px] md:h-[640px]",
              "md:col-span-5 h-[360px] md:h-[300px]",
            ];
            return (
              <article
                key={i}
                data-parallax
                onMouseEnter={() => handleHoverPlay(i, true)}
                onMouseLeave={() => handleHoverPlay(i, false)}
                className={`group relative overflow-hidden rounded-2xl border border-border/70 bg-card ${layout[i]} interactive`}
              >
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    data-parallax-img
                    src={it.src}
                    alt={`${it.title} — ${it.category} drone show in ${it.location}`}
                    loading="lazy"
                    className="h-full w-full object-cover scale-[1.15] transition-transform duration-[1.2s] ease-out group-hover:scale-[1.22]"
                  />
                  {/* Hover-preview video (muted, looping) */}
                  <video
                    ref={(el) => (hoverVideoRefs.current[i] = el)}
                    src={it.video}
                    muted
                    loop
                    playsInline
                    preload="none"
                    className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  />
                </div>

                {/* Gradient veil */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-primary/0 group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-700" />

                {/* Top meta */}
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between text-[10px] tracking-[0.3em] uppercase text-foreground/70">
                  <span className="px-3 py-1 rounded-full border border-foreground/20 backdrop-blur-md bg-background/30">
                    {it.category}
                  </span>
                  <span className="font-mono">{it.year}</span>
                </div>

                {/* Bottom content */}
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <div className="flex items-end justify-between gap-4">
                    <div className="min-w-0">
                      <div className="text-[10px] tracking-[0.3em] uppercase text-primary/90 mb-2">
                        {it.location}
                      </div>
                      <h3 className="font-display text-3xl md:text-4xl leading-tight truncate">
                        {it.title}
                      </h3>
                      <div className="mt-3 h-px w-0 bg-primary group-hover:w-24 transition-all duration-700" />
                      <div className="mt-3 text-xs text-foreground/60 font-light">
                        <span className="font-mono text-foreground/90">{it.drones}</span> drones in formation
                      </div>
                    </div>
                    <div className="shrink-0 h-12 w-12 rounded-full border border-foreground/30 grid place-items-center backdrop-blur-md bg-background/30 transition-all duration-500 group-hover:bg-primary group-hover:border-primary group-hover:rotate-45">
                      <button
                        type="button"
                        aria-label={`Play ${it.title}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActive(it);
                        }}
                        className="h-full w-full rounded-full grid place-items-center"
                      >
                        <ArrowUpRight size={18} className="group-hover:hidden" />
                        <Play size={16} className="hidden group-hover:block fill-current" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Footer line */}
        <Reveal delay={0.1}>
          <div className="mt-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-t border-border/60 pt-8">
            <p className="font-display text-2xl md:text-3xl max-w-xl">
              Over <span className="text-gradient-blue">500 shows</span> staged. Every sky, a new canvas.
            </p>
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 text-sm tracking-[0.25em] uppercase text-foreground/80 hover:text-primary transition-colors"
            >
              Commission your show
              <span className="h-px w-12 bg-primary transition-all group-hover:w-20" />
              <ArrowUpRight size={16} />
            </a>
          </div>
        </Reveal>
      </div>

      {/* Lightbox modal */}
      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 backdrop-blur-xl animate-in fade-in duration-300"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setActive(null)}
            className="absolute top-6 right-6 h-12 w-12 rounded-full border border-foreground/30 grid place-items-center backdrop-blur-md bg-background/40 hover:bg-primary hover:border-primary transition-colors interactive"
          >
            <X size={20} />
          </button>

          <div
            className="relative w-[92vw] max-w-6xl aspect-video rounded-2xl overflow-hidden border border-border shadow-2xl glow-blue-soft"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: "scale-in 0.4s cubic-bezier(0.4,0,0.2,1) both" }}
          >
            <video
              src={active.video}
              poster={active.src}
              autoPlay
              controls
              playsInline
              className="h-full w-full object-cover bg-black"
            />
            <div className="absolute top-4 left-4 flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase">
              <span className="px-3 py-1 rounded-full border border-foreground/30 backdrop-blur-md bg-background/40">
                {active.category}
              </span>
              <span className="text-foreground/70 font-mono">{active.location} · {active.year}</span>
            </div>
          </div>

          <div className="absolute bottom-8 left-0 right-0 text-center px-6">
            <h3 className="font-display text-3xl md:text-5xl">{active.title}</h3>
            <p className="mt-2 text-sm text-foreground/60 font-light">
              <span className="font-mono text-foreground/90">{active.drones}</span> drones in formation
            </p>
          </div>
        </div>
      )}
    </section>
  );
};