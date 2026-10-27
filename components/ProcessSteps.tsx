"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { processSteps } from "@/lib/content";
import { Reveal, Stagger, StaggerItem } from "./motion";

export function ProcessSteps() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 60%"] });
  const line = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section className="section process-section">
      <div className="container">
        <Reveal className="section-heading centered">
          <span className="eyebrow">How we work</span>
          <h2>A simple process. Exceptional results.</h2>
        </Reveal>
        <div className="process" ref={ref}>
          <div className="process-line">
            <motion.span style={{ scaleX: line }} />
          </div>
          <Stagger className="process-grid">
            {processSteps.map((step, i) => (
              <StaggerItem key={step.title} className="process-step">
                <span className="process-num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
