"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { SmartImage as Image } from "@/components/SmartImage";
import Link from "next/link";
import { useRef } from "react";
import { photos, whyPoints } from "@/lib/content";
import { Reveal, Stagger, StaggerItem } from "./motion";

const words = ["Smart.", "Strategic.", "Efficient.", "Reliable.", "Innovative."];

export function Why({ teaser = false }: { teaser?: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section className="why-section" ref={ref}>
      <div className="why-photo">
        <motion.div className="parallax" style={{ y: imageY }}>
          <Image
            src={photos.officeHall}
            alt="Well-managed contemporary office interior"
            fill
            sizes="(max-width: 680px) 100vw, 50vw"
          />
        </motion.div>
      </div>

      <div className="why-copy">
        <Reveal>
          <span className="eyebrow">Why Nimbus</span>
        </Reveal>
        {/* The trigger sits on the heading: the clipped words themselves never count as "in view". */}
        <motion.h2
          className="why-words"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          {words.map((word) => (
            <span className="line-mask" key={word}>
              <motion.span
                variants={{
                  hidden: { y: "110%" },
                  show: { y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
                }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </motion.h2>
        <Reveal delay={0.2}>
          <p className="why-lead">
            We work alongside your HR, IT, and operations teams to align facility services with your
            business strategy. With over 20 years of experience designing, implementing, and
            maintaining major facility projects, our value engineering approach helps you reach
            optimal operating costs through smart use of energy, water, and resources.
          </p>
        </Reveal>
        <Stagger className="why-points">
          {whyPoints.map((point) => (
            <StaggerItem key={point.title} className="why-point">
              <strong>{point.title}</strong>
              <p>{point.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
        {teaser && (
          <Reveal delay={0.2} className="button-row">
            <Link className="button" href="/why-nimbus">
              <span>Why choose Nimbus</span> <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  );
}
