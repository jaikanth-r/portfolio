"use client";

import { useEffect } from "react";

export default function CursorSpotlight() {
  useEffect(() => {
    const media = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    );

    if (!media.matches) return;

    const spotlight = document.createElement("div");

    Object.assign(spotlight.style, {
      position: "fixed",
      inset: "0",
      pointerEvents: "none",
      zIndex: "30",
      opacity: "0",
      background:
        "radial-gradient(600px circle at var(--x) var(--y), rgba(7, 82, 216, 0.15), transparent 80%)",
      transition: "opacity 300ms ease",
      willChange: "background",
    });

    document.body.appendChild(spotlight);

    const move = (event: MouseEvent) => {
      spotlight.style.setProperty("--x", `${event.clientX}px`);
      spotlight.style.setProperty("--y", `${event.clientY}px`);
      spotlight.style.opacity = "1";
    };

    const leave = () => {
      spotlight.style.opacity = "0";
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      spotlight.remove();
    };
  }, []);

  return null;
}
