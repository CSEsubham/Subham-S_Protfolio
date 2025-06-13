/* eslint-disable no-unused-vars */
"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { experiences, myProjects } from "../constants"; // ✅ import here

const timelineData = [
  {
    title: "💼 Internships",
    content: <hr className="border-t-2 border-gray-400 mb-4" />,
  },
  ...experiences.map((exp) => ({
    title: `${exp.title} @ ${exp.job} (${exp.date})`,
    content: (
      <ul className="list-disc list-inside space-y-2 text-neutral-700 dark:text-neutral-300 z-20">
        {exp.contents.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    ),
  })),
  {
    title: "🚀 Projects",
    content: <hr className="border-t-2 border-gray-400 mb-4" />,
  },
  ...myProjects.map((proj) => ({
    title: proj.title,
    content: (
      <div className="space-y-4">
        <p className="text-neutral-700 dark:text-neutral-300">{proj.description}</p>
        <ul className="list-disc list-inside space-y-1 text-neutral-600 dark:text-neutral-400 text-sm">
          {proj.subDescription.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
        <div className="flex gap-2 mt-2">
          {proj.tags.map((tag) => (
            <img
              key={tag.id}
              src={tag.path}
              alt={tag.name}
              title={tag.name}
              className="h-6 w-6"
            />
          ))}
        </div>
        <a
          href={proj.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline text-sm "
        >
          Done
        </a>
      </div>
    ),
  })),
];

// ✅ Component remains unchanged
export const Internship = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      ref={containerRef}
      className={twMerge("w-full bg-white dark:bg-neutral-950 font-sans md:px-10 " ) }
      id="Work"
    >
      <div className={twMerge("max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10")}>
        <h2 className={twMerge("text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl")}>
          Timeline of My Internships and Projects
        </h2>
        <p className={twMerge("text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm")}>
          Here's a timeline of my work experience and academic contributions.
        </p>
      </div>

      <div ref={ref} className={twMerge("relative max-w-7xl mx-auto pb-20")}>
        {timelineData.map((item, index) => (
          <div key={index} className={twMerge("flex justify-start pt-10 md:pt-40 md:gap-10")}>
            <div className={twMerge("sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full")}>
              <div className={twMerge("h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center")}>
                <div className={twMerge("h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2")} />
              </div>
              <h3 className={twMerge("hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500")}>
                {item.title}
              </h3>
            </div>

            <div className={twMerge("relative pl-20 pr-4 md:pl-4 w-full")}>
              <h3 className={twMerge("md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500")}>
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        {/* Timeline vertical line */}
        <div
          style={{ height: `${height}px` }}
          className={twMerge(
            "absolute md:left-8 left-8 top-0 overflow-hidden w-[2px]",
            "bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))]",
            "from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]",
            "[mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
          )}
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className={twMerge(
              "absolute inset-x-0 top-0 w-[2px]",
              "bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%]",
              "rounded-full"
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default Internship;
