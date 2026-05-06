import { useState } from "react";
import { Reveal } from "./Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { ChevronRight, MessageCircle } from "lucide-react";

const WHATSAPP = "919999999999";

export const ContactForm = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    vibe: "",
    date: "",
    location: "",
    details: "",
  });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName || !form.lastName || !form.phone || !form.email) {
      toast.error("Please fill in all required fields.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    toast.success("Thank you! Our team will reach out shortly.");
    setForm({ firstName: "", lastName: "", phone: "", email: "", vibe: "", date: "", location: "", details: "" });
  };

  const onWhatsApp = () => {
    const msg = encodeURIComponent(
      `Hi Vertx, I'd like to enquire about a drone light show. Name: ${form.firstName} ${form.lastName}. Date: ${form.date}. Location: ${form.location}.`
    );
    window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, "_blank");
  };

  return (
    <section id="contact" className="relative bg-background py-24 md:py-32 border-t border-border/60">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] radial-blue opacity-50" />
      </div>
      <div className="container relative grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <Reveal><span className="font-tech text-[10px] text-primary">START A SHOW</span></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-display text-4xl md:text-6xl tracking-tight leading-[1]">
              Let's light up <br />the <span className="bg-gradient-to-r from-primary to-[hsl(var(--accent-violet))] bg-clip-text text-transparent">sky together</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 text-foreground/65 font-grotesk max-w-sm">
              Tell us about your event. Our team will respond within one business day with a tailored proposal.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <Button onClick={onWhatsApp} variant="outline" className="mt-8 rounded-full border-foreground/25 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary font-tech text-xs tracking-[0.2em] h-12 px-6">
              <MessageCircle className="mr-2" size={16} /> WHATSAPP US
            </Button>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lg:col-span-7 lg:col-start-6">
          <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5 p-8 md:p-10 rounded-2xl border border-border/70 bg-card/40 backdrop-blur-md">
            <Field label="First Name *" id="firstName"><Input value={form.firstName} onChange={set("firstName")} className="bg-background/40 border-border h-12" /></Field>
            <Field label="Last Name *" id="lastName"><Input value={form.lastName} onChange={set("lastName")} className="bg-background/40 border-border h-12" /></Field>
            <Field label="Phone *" id="phone"><Input type="tel" value={form.phone} onChange={set("phone")} className="bg-background/40 border-border h-12" /></Field>
            <Field label="Email *" id="email"><Input type="email" value={form.email} onChange={set("email")} className="bg-background/40 border-border h-12" /></Field>
            <Field label="Event vibe / concept" id="vibe" full><Input value={form.vibe} onChange={set("vibe")} className="bg-background/40 border-border h-12" /></Field>
            <Field label="Event date" id="date"><Input type="date" value={form.date} onChange={set("date")} className="bg-background/40 border-border h-12" /></Field>
            <Field label="Event location" id="location"><Input value={form.location} onChange={set("location")} className="bg-background/40 border-border h-12" /></Field>
            <Field label="A few more details" id="details" full>
              <Textarea value={form.details} onChange={set("details")} maxLength={600} rows={4} className="bg-background/40 border-border" placeholder="Up to 100 words" />
            </Field>
            <div className="md:col-span-2 flex justify-end">
              <Button type="submit" className="group bg-gradient-to-r from-primary to-[hsl(var(--accent-violet))] hover:opacity-90 text-primary-foreground rounded-full px-7 h-12 font-tech text-xs tracking-[0.2em] pulse-glow">
                SEND ENQUIRY <ChevronRight className="ml-1 transition-transform group-hover:translate-x-1" size={16} />
              </Button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
};

const Field = ({ label, id, children, full }: { label: string; id: string; children: React.ReactNode; full?: boolean }) => (
  <div className={`flex flex-col gap-2 ${full ? "md:col-span-2" : ""}`}>
    <Label htmlFor={id} className="font-tech text-[10px] text-foreground/60">{label}</Label>
    {children}
  </div>
);