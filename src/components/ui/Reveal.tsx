"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

type RevealDirection = "up" | "left" | "right" | "fade";

interface RevealProps {
  children: React.ReactNode;
  direction?: RevealDirection;
  delay?: number;
  className?: string;
}

const animations: Record<RevealDirection, string> = {
  up: "animate-slide-up",
  left: "animate-slide-in-left",
  right: "animate-slide-in-right",
  fade: "animate-fade-in",
};

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  className,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        isVisible ? animations[direction] : "opacity-0",
        className,
      )}
      style={isVisible && delay > 0 ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
