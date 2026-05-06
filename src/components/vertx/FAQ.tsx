import { Reveal } from "./Reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "What if I'm near an airport or no-fly zone?",
    a: "We assess airspace classification and applicable aviation regulations, then manage all permissions and coordinate directly with aviation authorities to ensure full compliance — safe, legal, spectacular.",
  },
  {
    q: "Where can I have a drone show?",
    a: "Open fields, stadiums, beaches, rooftops, urban landmarks, festival grounds — almost anywhere. We offer site assessments and guide you to the best location for your event.",
  },
  {
    q: "How does the weather affect a drone show?",
    a: "Light wind and clear skies are ideal. Heavy rain, strong winds, or lightning can cause delays for safety. We monitor forecasts closely and keep you updated throughout.",
  },
  {
    q: "Can I have lasers or fireworks with a drone show?",
    a: "Yes. We integrate lasers, fireworks, and live performances, all carefully coordinated with the drone choreography for maximum visual impact and safety.",
  },
  {
    q: "How long is a drone light show?",
    a: "Typically 10–13 minutes depending on fleet size and complexity. Duration can be customized to suit your event schedule.",
  },
  {
    q: "Are drone light shows safe?",
    a: "Yes. Strict pre-show checks, planned flight paths, airspace permissions, and fail-safe systems on every drone — operated by certified pilots and technicians.",
  },
  {
    q: "What is the booking process?",
    a: "Bring a concept or start from scratch with us. We refine the idea, handle programming, 3D simulations, permits, equipment, and logistics — and deliver a flawless show on the day.",
  },
];

export const FAQ = () => (
  <section id="faq" className="relative bg-background py-24 md:py-32 border-t border-border/60">
    <div className="container grid lg:grid-cols-12 gap-12">
      <div className="lg:col-span-4">
        <Reveal><span className="font-tech text-[10px] text-primary">QUESTIONS</span></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 font-display text-4xl md:text-5xl tracking-tight leading-[1]">
            Frequently <br />asked, <span className="bg-gradient-to-r from-primary to-[hsl(var(--accent-violet))] bg-clip-text text-transparent">honestly answered</span>
          </h2>
        </Reveal>
      </div>
      <div className="lg:col-span-8">
        <Reveal>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border/60">
                <AccordionTrigger className="font-grotesk text-base md:text-lg text-left hover:text-primary py-6">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/65 font-grotesk leading-relaxed text-base">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </div>
  </section>
);