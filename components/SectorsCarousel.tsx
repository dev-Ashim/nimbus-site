"use client";

import { animate, motion, useMotionValue } from "framer-motion";
import { SmartImage as Image } from "@/components/SmartImage";
import { useEffect, useRef, useState } from "react";
import { sectors } from "@/lib/content";
import { ease, Reveal } from "./motion";

export function SectorsCarousel() {
  const viewport = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (!viewport.current || !track.current) return;
      setMaxScroll(Math.max(0, track.current.scrollWidth - viewport.current.clientWidth));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  function slide(dir: 1 | -1) {
    const card = track.current?.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + 22 : 300;
    const target = Math.min(0, Math.max(-maxScroll, x.get() - dir * step));
    animate(x, target, { duration: 0.8, ease });
  }

  return (
    <section className="section sectors-section">
      <div className="container sectors-head">
        <Reveal className="section-heading">
          <span className="eyebrow">Sectors we serve</span>
          <h2>Customized care for every kind of space.</h2>
          <p>Drag or use the arrows to explore the environments our teams look after every day.</p>
        </Reveal>
        <Reveal from="left" className="carousel-arrows">
          <button type="button" aria-label="Previous" onClick={() => slide(-1)}>
            ←
          </button>
          <button type="button" aria-label="Next" onClick={() => slide(1)}>
            →
          </button>
        </Reveal>
      </div>

      <div className="container carousel-viewport" ref={viewport}>
        <motion.div
          className="carousel-track"
          ref={track}
          style={{ x }}
          drag="x"
          dragConstraints={{ left: -maxScroll, right: 0 }}
          dragElastic={0.08}
        >
          {sectors.map((sector, i) => (
            <motion.article
              key={sector.title}
              className="sector-card"
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.08, ease }}
            >
              <Image src={sector.image} alt={sector.title} fill sizes="(max-width: 680px) 80vw, 340px" draggable={false} />
              <div className="sector-overlay" />
              <div className="sector-text">
                <span>{String(i + 1).padStart(2, "0")}</span>
                <h3>{sector.title}</h3>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
