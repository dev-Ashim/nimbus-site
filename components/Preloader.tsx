"use client";

import { AnimatePresence, animate, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ease } from "./motion";

// Shown once per full page load (not on in-app navigation): a counter runs while the
// page finishes loading, then the panel slides up to reveal the site.
export function Preloader() {
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);

  const current = useRef(0);

  useEffect(() => {
    let finished = false;
    const report = (v: number) => {
      current.current = v;
      setProgress(Math.round(v));
    };
    // Creep towards 90% while waiting, then run to 100% once the page has loaded.
    const creep = animate(0, 90, { duration: 2.5, ease: "easeOut", onUpdate: report });
    const finish = () => {
      if (finished) return;
      finished = true;
      creep.stop();
      animate(current.current, 100, {
        duration: 0.4,
        onUpdate: report,
        onComplete: () => setTimeout(() => setDone(true), 250),
      });
    };
    const minShow = new Promise((r) => setTimeout(r, 900));
    const loaded =
      document.readyState === "complete"
        ? Promise.resolve()
        : new Promise((r) => window.addEventListener("load", r, { once: true }));
    // Never hold visitors for more than a few seconds, even on a slow connection.
    Promise.race([Promise.all([minShow, loaded]), new Promise((r) => setTimeout(r, 3500))]).then(finish);
    return () => creep.stop();
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("is-loading", !done);
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="preloader"
          exit={{ y: "-100%", transition: { duration: 0.9, ease } }}
          aria-live="polite"
          aria-label="Loading Nimbus Facility Management"
        >
          <motion.div
            className="preloader-inner"
            exit={{ opacity: 0, y: -40, transition: { duration: 0.4 } }}
          >
            {/* CSS animations, so the loader is alive even before scripts have loaded. */}
            <img
              className="preloader-logo"
              src="/brand/logo-horizontal-light.png"
              alt=""
              width={1396}
              height={297}
              fetchPriority="high"
            />
            <div className="preloader-bar">
              <motion.span style={{ scaleX: progress / 100 }} />
            </div>
            <span className="preloader-count">{progress}%</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
