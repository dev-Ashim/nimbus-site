"use client";

import { motion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";
import { ease } from "@/components/motion";

// The first page load is covered by the preloader, so the curtain only plays on
// in-app navigation. This also keeps it out of the server HTML, where it would hide
// the page until scripts load.
let hasNavigated = false;

// Runs on every navigation: an orange curtain lifts away and the new page slides up.
export default function Template({ children }: { children: ReactNode }) {
  const [animate] = useState(() => hasNavigated);

  useEffect(() => {
    hasNavigated = true;
  }, []);

  return (
    <>
      {animate && (
        <motion.div
          className="page-curtain"
          aria-hidden="true"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          transition={{ duration: 0.75, ease }}
        />
      )}
      <motion.div
        initial={animate ? { opacity: 0, y: 40 } : false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.25, ease }}
      >
        {children}
      </motion.div>
    </>
  );
}
