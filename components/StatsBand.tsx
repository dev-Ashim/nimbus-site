"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { SmartImage as Image } from "@/components/SmartImage";
import { useRef } from "react";
import { photos, stats } from "@/lib/content";
import { Counter, Stagger, StaggerItem } from "./motion";

export function StatsBand() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section className="stats-band" ref={ref}>
      <motion.div className="parallax" style={{ y }}>
        <Image src={photos.skyline} alt="" fill sizes="100vw" />
      </motion.div>
      <div className="stats-band-overlay" />
      <Stagger className="container stats-band-grid">
        {stats.map((stat) => (
          <StaggerItem key={stat.label} className="stats-band-item">
            <strong>
              <Counter to={stat.value} suffix={stat.suffix} />
            </strong>
            <span>{stat.label}</span>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
