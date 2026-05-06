import { useState } from "react";
import { Reveal } from "./Reveal";
import { Play } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-3.jpg";
import g3 from "@/assets/gallery-5.jpg";
import heroDrone from "@/assets/hero-drone.mp4";

type Tile = {
  src: string;
  title: string;
  category: string;
  drones: string;
  year: string;
  video: string;
};

const tiles: Tile[] = [
  { src: g1, title: "Sky Vows",        category: "Wedding · Chennai",  drones: "300", year: "2025", video: heroDrone },
  { src: g2, title: "Tricolour Above", category: "National · Delhi",   drones: "800", year: "2026", video: heroDrone },
  { src: g3, title: "Vertex Summit",   category: "Corporate · Mumbai", drones: "400", year: "2026", video: heroDrone },
];

export const PortfolioPreview = () => {
  const [active, setActive] = useState<Tile | null>(null);

  return (
    <section id="portfolio" className="relative bg-background py-24 md:py-32 overflow-hidden">
      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute top-1/4 -left-20 h-[420px] w-[420px] rounded-full blur-[140px] bg-primary/15" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full blur-[140px] bg-[hsl(var(--accent-violet))/0.15]" />
      </div>

      <div className="container relative">
        <div className="mb-14 max-w-2xl">
          <Reveal>
            <span className="font-tech text-[10px] text-primary tracking-[0.3em]">SELECTED WORK</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-display text-4xl md:text-6xl leading-[1] tracking-tight">
              A glimpse of{" "}
              <span className="bg-gradient-to-r from-primary to-[hsl(var(--accent-violet))] bg-clip-text text-transparent">
                our sky
              </span>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {tiles.map((t, i) => (
            <Reveal
              key={i}
              delay={i * 0.08}
              className={i === 0 ? "md:col-span-7 md:row-span-2" : "md:col-span-5"}
            >
              <button
                type="button"
                onClick={() => setActive(t)}
                className={`group relative block w-full overflow-hidden rounded-2xl border border-border/70 interactive text-left
                  ${i === 0 ? "h-[320px] md:h-[560px]" : "h-[280px] md:h-[270px]"}`}
              >
                <img
                  src={t.src}
                  alt={`${t.title} — ${t.category}`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />

                {/* meta chips */}
                <div className="absolute top-5 left-5 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-[10px] font-tech tracking-[0.2em] backdrop-blur-md bg-background/40 border border-border/60">
                    {t.year}
                  </span>
                  <span className="px-3 py-1 rounded-full text-[10px] font-tech tracking-[0.2em] backdrop-blur-md bg-background/40 border border-border/60">
                    {t.drones} DRONES
                  </span>
                </div>

                {/* play button */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-16 w-16 md:h-20 md:w-20 rounded-full grid place-items-center
                  bg-gradient-to-br from-primary to-[hsl(var(--accent-violet))]
                  shadow-[0_0_40px_hsl(var(--primary)/0.6)]
                  scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500">
                  <Play className="ml-1 text-primary-foreground" size={24} fill="currentColor" />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="font-tech text-[10px] text-primary mb-2 tracking-[0.25em]">{t.category}</div>
                  <h3 className="font-display text-2xl md:text-3xl">{t.title}</h3>
                  <div className="mt-3 h-px w-12 bg-primary group-hover:w-28 transition-all duration-700" />
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-w-5xl p-0 bg-background border border-border/70 overflow-hidden">
          {active && (
            <div>
              <div className="relative aspect-video w-full bg-black">
                <video
                  key={active.title}
                  src={active.video}
                  autoPlay
                  controls
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-wrap items-center justify-between gap-6">
                <div>
                  <div className="font-tech text-[10px] text-primary mb-2 tracking-[0.25em]">{active.category}</div>
                  <h3 className="font-display text-2xl md:text-3xl">{active.title}</h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-[10px] font-tech tracking-[0.2em] border border-border/60">{active.year}</span>
                  <span className="px-3 py-1 rounded-full text-[10px] font-tech tracking-[0.2em] border border-border/60">{active.drones} DRONES</span>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
