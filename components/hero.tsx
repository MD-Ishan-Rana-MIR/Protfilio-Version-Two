"use client"

import { motion } from "framer-motion"
import { containerVariants, itemVariants } from "@/lib/animations"
import { ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[rgb(100,200,255)] rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse"></div>
      <div
        className="absolute bottom-20 right-10 w-72 h-72 bg-[rgb(150,150,255)] rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants}>
          <motion.p className="text-lg text-[rgb(var(--primary))] font-semibold mb-4" whileHover={{ scale: 1.05 }}>
            Welcome to my portfolio
          </motion.p>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-5xl sm:text-7xl font-bold mb-6 leading-tight">
          Full-Stack Developer &
          <br />
          <span className="gradient-text">Competitive Programmer</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl text-[rgb(var(--muted-foreground))] mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Crafting beautiful, scalable web applications and mobile experiences with React, Node.js, and MongoDB. 1.5+
          years of professional experience building production-ready solutions.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-[rgb(var(--primary))] text-[rgb(var(--primary-foreground))] rounded-lg font-semibold hover:shadow-lg transition-shadow glow"
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-[rgb(var(--primary))] text-[rgb(var(--primary))] rounded-lg font-semibold hover:bg-[rgb(var(--card))] transition-colors"
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="flex justify-center gap-4">
          {[
            { icon: "𝗚", href: "https://github.com", label: "GitHub" },
            { icon: "𝗜𝗡", href: "https://linkedin.com", label: "LinkedIn" },
            { icon: "𝗧𝗪", href: "https://twitter.com", label: "Twitter" },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-lg bg-[rgb(var(--card))] border border-[rgb(var(--border))] flex items-center justify-center text-[rgb(var(--primary))] hover:glow transition-all"
              title={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <a href="#about" className="inline-block">
          <ChevronDown className="w-6 h-6 text-[rgb(var(--primary))]" />
        </a>
      </motion.div>
    </section>
  )
}
