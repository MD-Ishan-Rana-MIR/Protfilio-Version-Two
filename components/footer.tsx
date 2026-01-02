"use client"

import { motion } from "framer-motion"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[rgb(20,20,35)] border-t border-[rgb(var(--border))] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="text-center md:text-left">
            <p className="text-[rgb(var(--muted-foreground))]">
              © {currentYear} Designed & Built with <span className="text-[rgb(var(--primary))]">♥</span> by Me
            </p>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[rgb(var(--muted-foreground))] text-sm"
          >
            Available for freelance projects and full-time opportunities
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            <motion.a
              href="#home"
              whileHover={{ y: -2 }}
              className="text-[rgb(var(--muted-foreground))] hover:text-[rgb(var(--primary))] transition-colors text-sm"
            >
              Back to Top
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
