"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { SmartImage as Image } from "@/components/SmartImage";
import Link from "next/link";
import { useRef } from "react";
import { contact, realPhotos } from "@/lib/content";
import { Counter, Reveal, Stagger, StaggerItem } from "./motion";

const highlights = [
  "Trained, supported teams",
  "Solutions shaped around you",
  "Safety-led service delivery",
  "Reliable 24x7 support",
];

// `teaser` shows the short homepage version with links to the full About page.
export function About({ teaser = false }: { teaser?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const accentY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section className="section">
      <div className="container about-grid">
        <Reveal from="right">
          <div className="about-image-wrap" ref={ref}>
            <motion.div className="about-accent" style={{ y: accentY }} aria-hidden="true" />
            <div className="about-image">
              <motion.div className="parallax" style={{ y: imageY }}>
                <Image
                  src={realPhotos.officePresentation}
                  alt="Nimbus team in a review presentation"
                  fill
                  sizes="(max-width: 680px) 100vw, 50vw"
                />
              </motion.div>
            </div>
            <div className="experience-card">
              <strong>
                <Counter to={20} suffix="+" />
              </strong>
              <span>years of experience</span>
            </div>
          </div>
        </Reveal>

        <div className="about-copy">
          <Reveal>
            <span className="eyebrow">{teaser ? "About us" : "Who we are"}</span>
            <h2>We make complex operations feel effortless.</h2>
            <p>
              Nimbus Facility Management is a trusted name in integrated facility services,
              delivering excellence with precision, professionalism, and passion. Since our
              inception, we have helped businesses, residential complexes, institutions, and
              industrial facilities create clean, safe, efficient, and well-managed environments.
            </p>
            {!teaser && (
              <p>
                Whether it’s a corporate office, residential society, hospital, retail space,
                industrial unit, or educational institution, we offer customized services that are
                scalable, cost-effective, and sustainable. Our trained housekeeping staff,
                professional security personnel, skilled technicians, and experienced supervisors
                work in sync to provide 24x7 support.
              </p>
            )}
          </Reveal>
          <Stagger className="check-list">
            {highlights.map((item) => (
              <StaggerItem key={item} className="check-item">
                {item}
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.2} className="button-row">
            {teaser ? (
              <>
                <Link className="button" href="/about">
                  <span>More about us</span> <span aria-hidden="true">→</span>
                </Link>
                <a className="button button-outline" href={contact.phones[0].href}>
                  <span>Call for enquiries</span>
                </a>
              </>
            ) : (
              <Link className="button" href="/our-people">
                <span>Meet our people</span> <span aria-hidden="true">→</span>
              </Link>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
