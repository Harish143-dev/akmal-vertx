import { Reveal } from "./Reveal";
import { Layers, Timer, Cpu, Crosshair } from "lucide-react";

const items = [
  { icon: Layers, label: "Up to 1000 drones", sub: "Massive aerial canvases" },
  { icon: Timer, label: "15 min flight time", sub: "Full narrative arcs" },
  { icon: Cpu, label: "In-house technology", sub: "Built, owned, operated" },
  { icon: Crosshair, label: "Precision formations", sub: "Centimeter accuracy" },
];

export const Highlights = () => (
  <section className="relative bg-background border-y border-border/60">
    <div className="container grid grid-cols-2 lg:grid-cols-4 divide-x divide-border/60">
      {items.map(({ icon: Icon, label, sub }, i) => (
        <Reveal key={i} delay={i * 0.06}>
          <div className="group flex flex-col gap-3 px-6 py-10 hover:bg-primary/5 transition-colors">
            <Icon className="text-primary group-hover:scale-110 transition-transform" size={28} strokeWidth={1.4} />
            <div className="font-tech text-sm md:text-base text-foreground">{label}</div>
            <div className="text-xs md:text-sm text-foreground/55 font-grotesk">{sub}</div>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);