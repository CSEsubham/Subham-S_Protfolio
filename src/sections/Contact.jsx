/* eslint-disable no-unused-vars */


import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

export default function Contact({
  className,
  gradientSize = 200,
  gradientColor = "#1a1a1a",
  gradientOpacity = 0.8,
  gradientFrom = "#E6E6FA",
  gradientTo = "#D8BFD8",
}) {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(-gradientSize);
  const mouseY = useMotionValue(-gradientSize);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleMouseMove = useCallback((e) => {
    if (cardRef.current) {
      const { left, top } = cardRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - left);
      mouseY.set(e.clientY - top);
    }
  }, []);

  const handleMouseOut = useCallback(() => {
    mouseX.set(-gradientSize);
    mouseY.set(-gradientSize);
  }, [gradientSize]);

  const handleMouseEnter = useCallback(() => {
    mouseX.set(-gradientSize);
    mouseY.set(-gradientSize);
  }, [gradientSize]);

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseout", handleMouseOut);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [handleMouseMove, handleMouseOut, handleMouseEnter]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_mail: formData.email,
      from_message: formData.message,
    };

    try {
      await emailjs.send(
        "service_qtg1wnh",
        "template_mdw1iik",
        templateParams,
        "j2e3YCXalw8wVd0oV"
      );
      toast.success("Message sent successfully! I'll reach out soon!", {
  duration: 5000,
  description: "Thank you for reaching out. Stay awesome! ✨",
  icon: "📨",
});
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message!if you want you can try again or send by manual mailing", {
  duration: 5000,
  description: "Please check your internet connection or try again later.",
  icon: "⚠️",
});
      console.error(error);
    }
  };

  return (
    <div
      ref={cardRef}
      className={twMerge("group relative rounded-2xl p-6 shadow-xl z-35", className)}
      id="Contact"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl bg-border opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px,
            ${gradientFrom}, 
            ${gradientTo}, 
            transparent 100%)
          `,
        }}
      />
      <div className="absolute inset-px rounded-2xl bg-black" />
      <motion.div
        className="pointer-events-none absolute inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${gradientColor}, transparent 100%)
          `,
          opacity: gradientOpacity,
        }}
      />
      <div className="relative z-10 text-white">
        <h2 className="text-2xl font-bold mb-4">Send me a message</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="p-2 rounded-md "
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="p-2 rounded-md "
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            className="p-2 rounded-md "
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="bg-white text-white font-semibold py-2 px-4 rounded-md hover:bg-[#D8BFD8] transition-all duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
