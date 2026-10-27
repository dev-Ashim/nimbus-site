"use client";

import { AnimatePresence, motion, type Variants } from "framer-motion";
import { SmartImage as Image } from "@/components/SmartImage";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { heroSlides } from "@/lib/content";
import { ease } from "./motion";

const SLIDE_MS = 6500;

const slideVariants: Variants = {
  enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%" }),
  center: { x: 0, transition: { duration: 1.1, ease } },
  exit: (dir: number) => ({ x: dir > 0 ? "-30%" : "30%", transition: { duration: 1.1, ease } }),
};

const textParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.35 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.35 } },
};

const textChild: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
};

export function Hero() {
  const [[index, direction], setSlide] = useState<[number, number]>([0, 1]);
  const [paused, setPaused] = useState(false);
  const slide = heroSlides[index];

  const go = useCallback((dir: number) => {
    setSlide(([i]) => [(i + dir + heroSlides.length) % heroSlides.length, dir]);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setTimeout(() => go(1), SLIDE_MS);
    return () => clearTimeout(timer);
  }, [index, paused, go]);

  return (
    <section
      className="hero"
      aria-roledescription="carousel"
      aria-label="Nimbus highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={index}
          className="hero-slide"
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragEnd={(_, info) => {
            if (info.offset.x < -80) go(1);
            else if (info.offset.x > 80) go(-1);
          }}
        >
          <motion.div
            className="hero-image"
            initial={{ scale: 1.18 }}
            animate={{ scale: 1 }}
            transition={{ duration: SLIDE_MS / 1000 + 1.5, ease: "linear" }}
          >
            <Image src={slide.image} alt={slide.alt} fill priority={index === 0} sizes="100vw" />
          </motion.div>
          <div className="hero-overlay" />
        </motion.div>
      </AnimatePresence>

      <div className="container hero-inner">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="hero-content"
            variants={textParent}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <motion.span className="eyebrow" variants={textChild}>
              {slide.eyebrow}
            </motion.span>
            <h1>
              {slide.title.map((line, i) => (
                <span className="line-mask" key={line}>
                  <motion.span className={i === 1 ? "accent" : undefined} variants={textChild}>
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>
            <motion.p className="hero-copy" variants={textChild}>
              {slide.copy}
            </motion.p>
            <motion.div className="hero-actions" variants={textChild}>
              <Link className="button" href="/services">
                <span>Explore our services</span> <span aria-hidden="true">→</span>
              </Link>
              <Link className="button button-ghost" href="/about">
                <span>Discover Nimbus</span>
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <div className="hero-controls">
          <button className="hero-arrow" type="button" aria-label="Previous slide" onClick={() => go(-1)}>
            ←
          </button>
          <div className="hero-dots">
            {heroSlides.map((s, i) => (
              <button
                key={s.image}
                type="button"
                className={`hero-dot${i === index ? " is-active" : ""}`}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index}
                onClick={() => setSlide([i, i > index ? 1 : -1])}
              >
                {i === index && (
                  <motion.span
                    key={`${index}-${paused}`}
                    className="hero-dot-fill"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: paused ? 0 : 1 }}
                    transition={{ duration: paused ? 0.3 : SLIDE_MS / 1000, ease: "linear" }}
                  />
                )}
              </button>
            ))}
          </div>
          <button className="hero-arrow" type="button" aria-label="Next slide" onClick={() => go(1)}>
            →
          </button>
        </div>
      </div>
    </section>
  );
}
