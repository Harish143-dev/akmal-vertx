import { Reveal } from "./Reveal";
import { ClipboardCheck, Sparkles, Truck, ShieldCheck, Rocket } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: ClipboardCheck,
    title: "Plan",
    when: "2 weeks before",
    desc: "Safe flight zone confirmed, permissions secured, theme aligned with you.",
    bullets: ["Location recce", "Permissions", "Theme"],
  },
  {
    n: "02",
    icon: Sparkles,
    title: "Design",
    when: "1–2 weeks before",
    desc: "Custom animations, choreographed flight paths, sync sound design.",
    bullets: ["Storyboarding", "Animation & programming", "Sound production"],
  },
  {
    n: "03",
    icon: Truck,
    title: "Arrival",
    when: "2 days before",
    desc: "Equipment and operations team arrive on-site to begin deployment.",
    bullets: ["Equipment transport", "On-site setup"],
  },
  {
    n: "04",
    icon: ShieldCheck,
    title: "Final Checks",
    when: "1 day before",
    desc: "Multiple test flights and safety checks to guarantee flawless execution.",
    bullets: ["Testing & trials", "Final safety checks"],
  },
  {
    n: "05",
    icon: Rocket,
    title: "The Grand Finale",
    when: "Show day",
    desc: "Your vision takes flight. The sky becomes the canvas.",
    bullets: ["Drone light show, live"],
  },
];

export const HowItWorks = () => (
  <section id="process" className="relative bg-background py-24 md:py-32 border-t border-border/60">
    <div className="container">
      <div className="max-w-3xl mb-16">
        <Reveal><span className="font-tech text-[10px] text-primary">PROCESS</span></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 font-display text-4xl md:text-6xl tracking-tight leading-[1]">
            From concept <br />to <span className="bg-gradient-to-r from-primary to-[hsl(var(--accent-violet))] bg-clip-text text-transparent">sky</span>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-5 text-foreground/60 font-grotesk max-w-xl">
            Every step is carefully crafted so the only thing you have to do is look up.
          </p>
        </Reveal>
      </div>

      <div className="relative">
        {/* Vertical accent line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent" />

        <div className="space-y-12">
          {steps.map((s, i) => {
            const Icon = s.icon;
            const left = i % 2 === 0;
            return (
              <Reveal key={s.n} delay={i * 0.05}>
                <div className="relative grid md:grid-cols-2 gap-6 items-center">
                  {/* Node */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-background border-2 border-primary glow-blue" />

                  <div className={`pl-16 md:pl-0 ${left ? "md:pr-16 md:text-right" : "md:order-2 md:pl-16"}`}>
                    <div className="font-tech text-xs text-primary">{s.n} · {s.when.toUpperCase()}</div>
                    <h3 className="mt-2 font-display text-3xl md:text-4xl">{s.title}</h3>
                    <p className="mt-3 text-foreground/65 font-grotesk">{s.desc}</p>
                    <ul className={`mt-4 flex flex-wrap gap-2 ${left ? "md:justify-end" : ""}`}>
                      {s.bullets.map((b) => (
                        <li key={b} className="text-[11px] font-tech px-3 py-1 rounded-full border border-border bg-card/50 text-foreground/70">
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`hidden md:flex ${left ? "md:order-2 md:pl-16" : "md:pr-16 md:justify-end"}`}>
                    <div className="h-32 w-32 rounded-2xl border border-border bg-card/40 grid place-items-center backdrop-blur-md">
                      <Icon className="text-primary" size={42} strokeWidth={1.3} />
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);