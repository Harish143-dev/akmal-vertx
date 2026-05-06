import { useEffect, useRef, useState } from "react";

export const DroneCursor = () => {
  const droneRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const target = useRef({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      if (!visible) setVisible(true);
      const el = e.target as HTMLElement;
      const interactive = el.closest("a, button, [role='button'], input, textarea, select, label, .interactive");
      setHovering(!!interactive);
    };
    const onLeave = () => setVisible(false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);

    let raf = 0;
    const tick = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.18;
      pos.current.y += (target.current.y - pos.current.y) * 0.18;
      if (droneRef.current) {
        droneRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%) ${hovering ? "scale(1.25)" : "scale(1)"}`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${target.current.x}px, ${target.current.y}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, [hovering, visible]);

  return (
    <>
      <div
        ref={droneRef}
        className="drone-cursor"
        style={{ opacity: visible ? 1 : 0, position: "fixed", left: 0, top: 0 }}
        aria-hidden
      >
        <svg viewBox="0 0 64 64" width="44" height="44" fill="none">
          {/* Glow halo */}
          <circle cx="32" cy="32" r="28" fill="hsl(211 100% 55% / 0.08)" />
          {/* Arms */}
          <line x1="20" y1="20" x2="44" y2="44" stroke="hsl(211 100% 55%)" strokeWidth="1.5" />
          <line x1="44" y1="20" x2="20" y2="44" stroke="hsl(211 100% 55%)" strokeWidth="1.5" />
          {/* Propellers (spinning) */}
          <g className="propeller" style={{ transformOrigin: "20px 20px" }}>
            <ellipse cx="20" cy="20" rx="9" ry="2" fill="hsl(211 100% 65% / 0.55)" />
            <ellipse cx="20" cy="20" rx="2" ry="9" fill="hsl(211 100% 65% / 0.55)" />
          </g>
          <g className="propeller" style={{ transformOrigin: "44px 20px", animationDirection: "reverse" }}>
            <ellipse cx="44" cy="20" rx="9" ry="2" fill="hsl(211 100% 65% / 0.55)" />
            <ellipse cx="44" cy="20" rx="2" ry="9" fill="hsl(211 100% 65% / 0.55)" />
          </g>
          <g className="propeller" style={{ transformOrigin: "20px 44px", animationDirection: "reverse" }}>
            <ellipse cx="20" cy="44" rx="9" ry="2" fill="hsl(211 100% 65% / 0.55)" />
            <ellipse cx="20" cy="44" rx="2" ry="9" fill="hsl(211 100% 65% / 0.55)" />
          </g>
          <g className="propeller" style={{ transformOrigin: "44px 44px" }}>
            <ellipse cx="44" cy="44" rx="9" ry="2" fill="hsl(211 100% 65% / 0.55)" />
            <ellipse cx="44" cy="44" rx="2" ry="9" fill="hsl(211 100% 65% / 0.55)" />
          </g>
          {/* Body */}
          <circle cx="20" cy="20" r="3" fill="hsl(210 39% 5%)" stroke="hsl(211 100% 55%)" strokeWidth="1" />
          <circle cx="44" cy="20" r="3" fill="hsl(210 39% 5%)" stroke="hsl(211 100% 55%)" strokeWidth="1" />
          <circle cx="20" cy="44" r="3" fill="hsl(210 39% 5%)" stroke="hsl(211 100% 55%)" strokeWidth="1" />
          <circle cx="44" cy="44" r="3" fill="hsl(210 39% 5%)" stroke="hsl(211 100% 55%)" strokeWidth="1" />
          {/* Core */}
          <rect x="26" y="26" width="12" height="12" rx="2" fill="hsl(210 39% 5%)" stroke="hsl(211 100% 55%)" strokeWidth="1.2" />
          <circle cx="32" cy="32" r="2" fill="hsl(211 100% 65%)">
            <animate attributeName="opacity" values="1;0.3;1" dur="1.2s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>
      <div
        ref={dotRef}
        className="drone-cursor-dot"
        style={{ opacity: visible ? 1 : 0 }}
        aria-hidden
      />
    </>
  );
};