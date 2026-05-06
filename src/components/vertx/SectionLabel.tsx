interface Props { children: React.ReactNode; }
export const SectionLabel = ({ children }: Props) => (
  <div className="inline-flex items-center gap-3 text-[11px] font-medium tracking-[0.32em] text-primary uppercase font-sans">
    <span className="h-px w-10 bg-primary" />
    {children}
    <span className="h-px w-10 bg-primary/40" />
  </div>
);
