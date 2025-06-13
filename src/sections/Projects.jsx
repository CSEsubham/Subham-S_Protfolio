/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Project from "../componets/Project";
import { myProjects } from "../constants";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

export default function Projects() {
  const [preview, setPreview] = useState(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 12, stiffness: 120 });
  const springY = useSpring(y, { damping: 12, stiffness: 120 });

  const handleMouseMove = (e) => {
    x.set(e.clientX + 24);
    y.set(e.clientY + 24);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing z-20 w-full m-0"
    >
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-heading text-3xl md:text-4xl font-bold text-center mb-6"
      >
        Projects 
      </motion.h2>

      {/* Decorative Line */}
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-4 h-[1px] w-full" />

      {/* Projects Grid */}
      <motion.div
        className="grid gap-12 mt-12 md:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {myProjects.map((project) => (
          <Project key={project.id} {...project} setPreview={setPreview} />
        ))}
      </motion.div>

      {/* Image Preview Tooltip */}
      <AnimatePresence>
        {preview && (
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-xl pointer-events-none w-80"
            src={preview}
            alt="Project Preview"
            style={{ x: springX, y: springY }}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
