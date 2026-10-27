"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Children, useEffect, useRef, useState, type ReactNode } from "react";

// Height of the sticky site header; short cards stick just below it.
const HEADER_OFFSET = 68;

/**
 * Turns each child into a sticky card. When a card's bottom reaches the bottom of the
 * screen it stays put, shrinks, and darkens while the next card slides up over it.
 * Wrap several sections in a <div> to keep them on one card (fragments get flattened
 * when a server page passes them to this client component).
 */
export function StackCards({ children }: { children: ReactNode }) {
  const items = Children.toArray(children);
  return (
    <div className="stack">
      {items.map((child, i) => (
        <StackCard key={i} first={i === 0} last={i === items.length - 1}>
          {child}
        </StackCard>
      ))}
    </div>
  );
}

function StackCard({ children, first, last }: { children: ReactNode; first: boolean; last: boolean }) {
  const card = useRef<HTMLDivElement>(null);
  const sentinel = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [metrics, setMetrics] = useState({ top: HEADER_OFFSET, height: 0, small: false, short: false });

  // Tall cards stick once their bottom is on screen; short ones stick below the header.
  useEffect(() => {
    const el = card.current;
    if (!el) return;
    let viewport = { w: 0, h: 0 };
    const update = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      // Mobile browsers resize the viewport as their toolbar slides in and out while
      // scrolling. Ignore those small height changes so cards don't jump.
      const toolbarOnly = w === viewport.w && viewport.h > 0 && Math.abs(h - viewport.h) < 150;
      if (!toolbarOnly) viewport = { w, h };
      const height = el.offsetHeight;
      setMetrics({
        top: Math.min(HEADER_OFFSET, viewport.h - height),
        height,
        small: viewport.w < 680,
        short: viewport.h < 500,
      });
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    window.addEventListener("resize", update);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  // The sentinel marks where this card ends in the page flow, i.e. where the next
  // card's top edge is. Progress runs from "next card starts covering" to "fully covered".
  const stuckBottom = metrics.top + metrics.height;
  const { scrollYProgress } = useScroll({
    target: sentinel,
    offset: [`start ${stuckBottom}px`, `start ${metrics.top}px`],
  });
  // Phones get a gentler shrink and smaller corners to suit the narrow screen.
  const cornerRadius = metrics.small ? 20 : 32;
  const scale = useTransform(scrollYProgress, [0, 1], [1, metrics.small ? 0.94 : 0.9]);
  const dim = useTransform(scrollYProgress, [0, 1], [0, 0.6]);
  const radius = useTransform(scrollYProgress, [0, 1], [first ? 0 : cornerRadius, cornerRadius]);

  // Very short screens (e.g. phones held sideways) have no room for stacking.
  const enabled = !reduceMotion && !metrics.short;
  const stacking = enabled && !last;

  return (
    <>
      <motion.div
        ref={card}
        className={`stack-card${first ? " is-first" : ""}`}
        style={{
          top: enabled ? metrics.top : undefined,
          position: enabled ? "sticky" : "relative",
          scale: stacking ? scale : 1,
          borderTopLeftRadius: radius,
          borderTopRightRadius: radius,
        }}
      >
        {children}
        {stacking && <motion.div className="stack-dim" style={{ opacity: dim }} aria-hidden="true" />}
      </motion.div>
      <div ref={sentinel} className="stack-sentinel" aria-hidden="true" />
    </>
  );
}
