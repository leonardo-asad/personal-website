"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function Sidebar({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.aside
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -60 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="hidden 2xl:flex justify-center 2xl:fixed left-0 top-0 bottom-0 w-60"
        >
          <ul className="leading-10 mt-16">
            <li>Home</li>
            <li>About Me</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
