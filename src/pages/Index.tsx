import { MiniNavbar } from "@/components/ui/mini-navbar";
import { Hero } from "@/components/vertx/Hero";
import { Highlights } from "@/components/vertx/Highlights";
import { PortfolioPreview } from "@/components/vertx/PortfolioPreview";
import { UseCases } from "@/components/vertx/UseCases";
import { HowItWorks } from "@/components/vertx/HowItWorks";
import { FAQ } from "@/components/vertx/FAQ";
import { ContactForm } from "@/components/vertx/ContactForm";
import { Footer } from "@/components/vertx/Footer";
import { DroneCursor } from "@/components/vertx/DroneCursor";

const Index = () => (
  <main className="bg-background text-foreground min-h-screen">
    <DroneCursor />
    <MiniNavbar />
    <Hero />
    <Highlights />
    <PortfolioPreview />
    <UseCases />
    <HowItWorks />
    <FAQ />
    <ContactForm />
    <Footer />
  </main>
);

export default Index;
