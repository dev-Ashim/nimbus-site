"use client";

import { AnimatePresence, motion } from "framer-motion";
import { SmartImage as Image } from "@/components/SmartImage";
import Link from "next/link";
import { useState } from "react";
import { categorySlug, serviceCategories, services } from "@/lib/content";
import { ease, Reveal } from "./motion";

type Filter = (typeof serviceCategories)[number];

export function Services() {
  const [filter, setFilter] = useState<Filter>("All");
  const visible = filter === "All" ? services : services.filter((s) => s.category === filter);

  return (
    <section className="section services-section">
      <div className="container">
        <div className="services-head">
          <Reveal className="section-heading">
            <span className="eyebrow">Explore by category</span>
            <h2>Every service your facility needs.</h2>
            <p>
              Our scope covers hard, soft, security, premium, and rural water (JJM) services, designed to protect your
              assets and keep every space running smoothly.
            </p>
          </Reveal>

          <Reveal from="left" delay={0.1}>
            <div className="filter-tabs" role="tablist" aria-label="Filter services">
              {serviceCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={filter === cat}
                  className={filter === cat ? "is-active" : undefined}
                  onClick={() => setFilter(cat)}
                >
                  {filter === cat && (
                    <motion.span
                      className="filter-pill"
                      layoutId="filter-pill"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="filter-label">{cat === "All" ? "All services" : cat}</span>
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <motion.div layout className="service-grid">
          <AnimatePresence mode="popLayout">
            {visible.map((service, i) => (
              <motion.article
                layout
                key={service.title}
                className="service-card"
                initial={{ opacity: 0, y: 50, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.25 } }}
                whileHover={{ y: -10, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                transition={{ duration: 0.7, delay: (i % 4) * 0.08, ease }}
              >
                <div className="service-media">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 680px) 100vw, 25vw"
                    style={service.position ? { objectPosition: service.position } : undefined}
                  />
                  <span className="service-tag">{service.category} services</span>
                </div>
                <div className="service-card-content">
                  <span className="service-number">{String(services.indexOf(service) + 1).padStart(2, "0")}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <Link className="service-link" href={`/services/${categorySlug[service.category]}`}>
                    Learn more <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
