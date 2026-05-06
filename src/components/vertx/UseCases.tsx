import { Reveal } from "./Reveal";
import { Building2, Heart, Music2, Trophy, ArrowUpRight } from "lucide-react";
import g1 from "@/assets/gallery-2.jpg";
import g2 from "@/assets/gallery-4.jpg";
import g3 from "@/assets/gallery-6.jpg";
import g4 from "@/assets/gallery-3.jpg";

const cases = [
  { icon: Building2, title: "Corporate Events", desc: "Brand reveals, launches, anniversaries, and IPO celebrations.", image: g1, tag: "B2B / BRANDS" },
  { icon: Heart,     title: "Weddings",         desc: "Bespoke aerial storytelling for the most personal night.",   image: g2, tag: "PRIVATE" },
  { icon: Music2,    title: "Festivals",        desc: "Headline-grade visuals synced to live music and mainstage.", image: g3, tag: "LIVE STAGE" },
  { icon: Trophy,    title: "Sports Events",    desc: "Opening ceremonies, finals, and stadium spectacles.",        image: g4, tag: "STADIUMS" },
];

export const UseCases = () => (
  <section id="use-cases" className="relative bg-background py-24 md:py-32 border-t border-border/60 overflow-hidden">
    <div className="pointer-events-none absolute inset-0 opacity-50">
      <div className="absolute -top-20 right-1/3 h-[420px] w-[420px] rounded-full blur-[160px] bg-primary/10" />
      <div className="absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full blur-[160px] bg-[hsl(var(--accent-violet))/0.12]" />
    </div>

    <div className="container relative">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
        <div className="max-w-2xl">
          <Reveal><span className="font-tech text-[10px] text-primary tracking-[0.3em]">USE CASES</span></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-display text-4xl md:text-6xl tracking-tight leading-[1]">
              Built for{" "}
              <span className="bg-gradient-to-r from-primary to-[hsl(var(--accent-violet))] bg-clip-text text-transparent">
                every stage
              </span>
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.15}>
          <p className="max-w-sm text-sm md:text-base text-foreground/60 font-grotesk leading-relaxed">
            From intimate ceremonies to nation-scale spectacles — VERTX choreographs the sky for any moment that matters.
          </p>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {cases.map(({ icon: Icon, title, desc, image, tag }, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <a
              href="#contact"
              className="group relative block h-[340px] md:h-[380px] overflow-hidden rounded-2xl border border-border/70 interactive"
            >
              <img
                src={image}
                alt={title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/10" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-primary/25 via-transparent to-[hsl(var(--accent-violet))/0.25]" />

              {/* tag */}
              <div className="absolute top-5 left-5">
                <span className="px-3 py-1 rounded-full text-[10px] font-tech tracking-[0.25em] backdrop-blur-md bg-background/40 border border-border/60">
                  {tag}
                </span>
              </div>

              {/* arrow */}
              <div className="absolute top-5 right-5 h-10 w-10 rounded-full border border-foreground/30 grid place-items-center backdrop-blur-md bg-background/30 transition-all group-hover:bg-primary group-hover:border-primary group-hover:rotate-45">
                <ArrowUpRight size={16} />
              </div>

              {/* footer */}
              <div className="absolute inset-x-0 bottom-0 p-7 flex items-end gap-5">
                <div className="h-14 w-14 rounded-xl border border-primary/40 bg-background/40 backdrop-blur-md grid place-items-center flex-shrink-0 group-hover:bg-primary/20 transition-all">
                  <Icon className="text-primary" size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-display text-2xl md:text-3xl">{title}</h3>
                  <p className="mt-2 text-sm text-foreground/65 font-grotesk leading-relaxed max-w-md">
                    {desc}
                  </p>
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
