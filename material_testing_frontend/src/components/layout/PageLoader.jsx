import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function PageLoader() {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);
  const [phase, setPhase] = useState("idle"); // idle | enter | exit

  useEffect(() => {
    setVisible(true);
    setPhase("enter");

    const exitTimer = setTimeout(() => setPhase("exit"), 500);
    const hideTimer = setTimeout(() => {
      setVisible(false);
      setPhase("idle");
    }, 900);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(hideTimer);
    };
  }, [pathname]);

  if (!visible) return null;

  const entering = phase === "enter";

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        pointerEvents: "none",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Top progress bar */}
      <div
        style={{
          height: "3px",
          background: "#f97316",
          transformOrigin: "left center",
          transform: entering ? "scaleX(1)" : "scaleX(0)",
          transition: entering
            ? "transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)"
            : "transform 0.25s ease-in",
          opacity: entering ? 1 : 0,
          transitionProperty: entering ? "transform" : "transform, opacity",
        }}
      />

      {/* Overlay */}
      <div
        style={{
          flex: 1,
          background: "#1a2332",
          opacity: entering ? 1 : 0,
          transform: entering ? "translateY(0)" : "translateY(-8px)",
          transition: entering
            ? "opacity 0.2s ease-out"
            : "opacity 0.35s ease-in, transform 0.35s ease-in",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Bar loader only */}
        <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              style={{
                width: "4px",
                height: "28px",
                background: "#f97316",
                borderRadius: "3px",
                animation: `barPulse 0.7s ease-in-out ${i * 0.1}s infinite alternate`,
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes barPulse {
          from { opacity: 0.15; transform: scaleY(0.35); }
          to   { opacity: 1;   transform: scaleY(1); }
        }
      `}</style>
    </div>
  );
}
