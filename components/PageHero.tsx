"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { SmartImage as Image } from "@/components/SmartImage";
import Link from "next/link";
import { useRef } from "react";
import { ease } from "./motion";

export function PageHero({
  eyebrow,
  title,
  text,
  image,
  crumbs,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  image: string;
  crumbs: { label: string; href?: string }[];
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section className="page-hero" ref={ref}>
      <motion.div className="page-hero-image" style={{ y }}>
        <motion.div
          className="page-hero-zoom"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease }}
        >
          <Image src={image} alt="" fill priority sizes="100vw" />
        </motion.div>
      </motion.div>
      <div className="page-hero-overlay" />

      <motion.div className="container page-hero-content" style={{ opacity: fade }}>
        <motion.span
          className="eyebrow"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease }}
        >
          {eyebrow}
        </motion.span>
        <h1>
          <span className="line-mask">
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease }}
            >
              {title}
            </motion.span>
          </span>
        </h1>
        {text && (
          <motion.p
            className="page-hero-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease }}
          >
            {text}
          </motion.p>
        )}
        <motion.nav
          className="breadcrumb"
          aria-label="Breadcrumb"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85, ease }}
        >
          <Link href="/">Home</Link>
          {crumbs.map((crumb) => (
            <span key={crumb.label}>
              <span className="breadcrumb-sep" aria-hidden="true">/</span>
              {crumb.href ? <Link href={crumb.href}>{crumb.label}</Link> : <span aria-current="page">{crumb.label}</span>}
            </span>
          ))}
        </motion.nav>
      </motion.div>

      <svg className="page-hero-wave" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 60V30C240 0 480 0 720 22s480 40 720 8v30Z" />
      </svg>
    </section>
  );
}
