"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { contact, navLinks, type NavItem } from "@/lib/content";
import { ease } from "./motion";
import { Brand } from "./Brand";
import { getLenis } from "./SmoothScroll";

function isActive(item: NavItem, pathname: string) {
  if (item.href === "/") return pathname === "/";
  return item.children
    ? item.children.some((c) => pathname === c.href || pathname.startsWith(`${c.href}/`))
    : pathname.startsWith(item.href);
}

export function Header() {
  const pathname = usePathname();
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 40));

  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    if (menuOpen) getLenis()?.stop();
    else getLenis()?.start();
  }, [menuOpen]);

  const activeItem = navLinks.find((item) => isActive(item, pathname))?.label ?? null;
  const underlined = hovered ?? activeItem;

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-contact">
            <a href={contact.phones[0].href}>{contact.phones[0].label}</a>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </div>
          <span>Reliable facility management, built around you.</span>
        </div>
      </div>

      <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
        <motion.div className="scroll-progress" style={{ scaleX: progress }} />
        <nav className="container nav-wrap" aria-label="Main navigation">
          <Brand />

          <ul className="nav-links" onMouseLeave={() => setHovered(null)}>
            {navLinks.map((item) => (
              <li
                key={item.label}
                className={item.children ? "has-dropdown" : undefined}
                onMouseEnter={() => {
                  setHovered(item.label);
                  setOpenDropdown(item.children ? item.label : null);
                }}
                onMouseLeave={() => setOpenDropdown(null)}
                onFocus={() => item.children && setOpenDropdown(item.label)}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget)) setOpenDropdown(null);
                }}
              >
                <Link
                  href={item.href}
                  className={activeItem === item.label ? "is-active" : undefined}
                  aria-haspopup={item.children ? "true" : undefined}
                  aria-expanded={item.children ? openDropdown === item.label : undefined}
                >
                  {item.label}
                  {item.children && <span className="caret" aria-hidden="true">▾</span>}
                  {underlined === item.label && (
                    <motion.span
                      className="nav-underline"
                      layoutId="nav-underline"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    />
                  )}
                </Link>

                <AnimatePresence>
                  {item.children && openDropdown === item.label && (
                    <motion.ul
                      className="dropdown"
                      initial={{ opacity: 0, y: 14, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.3, ease }}
                    >
                      {item.children.map((child, i) => (
                        <motion.li
                          key={child.href}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.04 * i, duration: 0.3, ease }}
                        >
                          <Link href={child.href} className={pathname === child.href ? "is-current" : undefined}>
                            {child.label}
                          </Link>
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>

          <Link className="button nav-cta" href="/contact">
            <span>Get a quote</span> <span aria-hidden="true">↗</span>
          </Link>

          <button
            className={`menu-toggle${menuOpen ? " is-open" : ""}`}
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.aside
              className="mobile-menu"
              data-lenis-prevent
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease }}
            >
              <motion.ul
                initial="hidden"
                animate="show"
                variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } } }}
              >
                {navLinks.map((item) => (
                  <motion.li
                    key={item.label}
                    variants={{ hidden: { opacity: 0, x: 40 }, show: { opacity: 1, x: 0 } }}
                    transition={{ duration: 0.45, ease }}
                  >
                    {item.children ? (
                      <>
                        <button
                          type="button"
                          className="mobile-group"
                          aria-expanded={mobileGroup === item.label}
                          onClick={() => setMobileGroup((g) => (g === item.label ? null : item.label))}
                        >
                          {item.label}
                          <motion.span animate={{ rotate: mobileGroup === item.label ? 45 : 0 }} aria-hidden="true">
                            +
                          </motion.span>
                        </button>
                        <AnimatePresence initial={false}>
                          {mobileGroup === item.label && (
                            <motion.ul
                              className="mobile-sub"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.35, ease }}
                            >
                              {item.children.map((child) => (
                                <li key={child.href}>
                                  <Link href={child.href} onClick={() => setMenuOpen(false)}>
                                    {child.label}
                                  </Link>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link href={item.href} onClick={() => setMenuOpen(false)}>
                        {item.label} <span aria-hidden="true">→</span>
                      </Link>
                    )}
                  </motion.li>
                ))}
              </motion.ul>
              <Link className="button" href="/contact" onClick={() => setMenuOpen(false)}>
                <span>Get a quote</span> <span aria-hidden="true">↗</span>
              </Link>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
