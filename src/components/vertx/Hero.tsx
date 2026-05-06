import { Button } from "@/components/ui/button";
import { ChevronRight, Play } from "lucide-react";
import heroPoster from "@/assets/hero-poster.jpg";
import heroDrone from "@/assets/hero-drone.mp4";
import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/spotlight";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen w-full overflow-hidden bg-background"
    >
      {/* Fullscreen background video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={heroPoster}
          className="h-full w-full object-cover"
        >
          <source src={heroDrone} type="video/mp4" />
        </video>
        {/* Readability overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/55 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/40" />
      </div>

      <div className="relative z-10 container flex items-center min-h-screen pt-28 pb-20">
        <div className="flex flex-col max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="font-display text-foreground text-4xl sm:text-5xl md:text-5xl lg:text-6xl leading-[1.02] tracking-tight"
          >
            India's Most
            <br />
            <span className="bg-gradient-to-r from-primary via-[hsl(var(--primary-glow))] to-[hsl(var(--accent-violet))] bg-clip-text text-transparent">
              Advanced
            </span>
            <br />
            Drone Light Shows
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button asChild size="lg" className="group bg-gradient-to-r from-primary/80 to-[hsl(var(--accent-violet))/0.8] hover:opacity-100 text-primary-foreground rounded-full px-8 h-14 font-tech text-xs tracking-[0.2em] pulse-glow">
              <a href="#contact">
                GET A QUOTE
                <ChevronRight className="ml-1 transition-transform group-hover:translate-x-1" size={18} />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-transparent border-foreground/20 text-foreground hover:bg-foreground/10 hover:text-foreground rounded-full px-8 h-14 font-tech text-xs tracking-[0.2em]">
              <a href="#contact">
                <Play className="mr-2" size={16} /> BOOK A SHOW
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
