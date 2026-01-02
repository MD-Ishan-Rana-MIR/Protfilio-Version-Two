"use client"

import type React from "react"

import { motion } from "framer-motion"
import { containerVariants, itemVariants, fadeInUpVariants } from "@/lib/animations"
import { Mail, Linkedin, Github, Twitter } from "lucide-react"
import { useState } from "react"

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub", color: "hover:text-white" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", color: "hover:text-blue-400" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter", color: "hover:text-blue-300" },
  { icon: Mail, href: "mailto:your.email@example.com", label: "Email", color: "hover:text-red-400" },
]

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[rgb(20,20,35)]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">Let's Work Together</h2>
          <div className="h-1 w-20 bg-[rgb(var(--primary))] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h3 variants={itemVariants} className="text-2xl font-bold text-[rgb(var(--foreground))] mb-6">
              Get In Touch
            </motion.h3>

            <motion.p variants={itemVariants} className="text-[rgb(var(--muted-foreground))] mb-8 leading-relaxed">
              I'm always interested in hearing about new projects and opportunities. Feel free to reach out if you'd
              like to collaborate or just chat about web development!
            </motion.p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4 mb-8"
            >
              <motion.a
                variants={itemVariants}
                href="mailto:your.email@example.com"
                className="flex items-center gap-3 text-[rgb(var(--foreground))] hover:text-[rgb(var(--primary))] transition-colors group"
              >
                <Mail className="w-5 h-5 text-[rgb(var(--primary))]" />
                <span className="group-hover:underline">your.email@example.com</span>
              </motion.a>
              <motion.a
                variants={itemVariants}
                href="#"
                className="flex items-center gap-3 text-[rgb(var(--foreground))] hover:text-[rgb(var(--primary))] transition-colors group"
              >
                <Linkedin className="w-5 h-5 text-[rgb(var(--primary))]" />
                <span className="group-hover:underline">linkedin.com/in/yourprofile</span>
              </motion.a>
              <motion.a
                variants={itemVariants}
                href="#"
                className="flex items-center gap-3 text-[rgb(var(--foreground))] hover:text-[rgb(var(--primary))] transition-colors group"
              >
                <Github className="w-5 h-5 text-[rgb(var(--primary))]" />
                <span className="group-hover:underline">github.com/yourprofile</span>
              </motion.a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-12 h-12 rounded-lg bg-[rgb(var(--card))] border border-[rgb(var(--border))] flex items-center justify-center text-[rgb(var(--primary))] hover:glow transition-all ${social.color}`}
                  title={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-[rgb(var(--foreground))] mb-2">
                Name
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-4 py-3 bg-[rgb(var(--card))] border border-[rgb(var(--border))] rounded-lg text-[rgb(var(--foreground))] focus:border-[rgb(var(--primary))] focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-[rgb(var(--foreground))] mb-2">
                Email
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-4 py-3 bg-[rgb(var(--card))] border border-[rgb(var(--border))] rounded-lg text-[rgb(var(--foreground))] focus:border-[rgb(var(--primary))] focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-[rgb(var(--foreground))] mb-2">
                Message
              </label>
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                id="message"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="w-full px-4 py-3 bg-[rgb(var(--card))] border border-[rgb(var(--border))] rounded-lg text-[rgb(var(--foreground))] focus:border-[rgb(var(--primary))] focus:outline-none transition-colors resize-none"
                placeholder="Tell me about your project..."
              ></motion.textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full px-6 py-3 bg-[rgb(var(--primary))] text-[rgb(var(--primary-foreground))] rounded-lg font-semibold hover:shadow-lg transition-shadow glow"
            >
              {submitted ? "Message Sent!" : "Send Message"}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
