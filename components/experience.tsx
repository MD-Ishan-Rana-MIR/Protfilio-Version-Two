"use client"

import { motion } from "framer-motion"
import { containerVariants, itemVariants } from "@/lib/animations"

const experiences = [
  {
    company: "Spark Tech Agency",
    position: "Frontend Developer & App Developer",
    period: "Mar 2025 - Present",
    description:
      "Building responsive web applications and React Native mobile apps for diverse clients. Implementing modern UI/UX patterns using Tailwind CSS and shadcn UI.",
    skills: ["React", "React Native", "Tailwind CSS", "shadcn UI", "Zustand"],
  },
  {
    company: "Universe Soft Tech",
    position: "MERN Stack Developer",
    period: "Jan 2024 - Mar 2025",
    description:
      "Developed full-stack web applications using MongoDB, Express, React, and Node.js. Implemented APIs, database schemas, and optimized frontend performance.",
    skills: ["React", "Node.js", "Express", "MongoDB", "Redux", "Tailwind CSS"],
  },
  {
    company: "Self-Learning Journey",
    position: "Frontend Developer",
    period: "2023 - Present",
    description:
      "Continuously learning and improving skills in web development. Building personal projects and participating in competitive programming challenges.",
    skills: ["React", "TypeScript", "Web Performance", "Data Structures", "Algorithms"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">Professional Experience</h2>
          <div className="h-1 w-20 bg-[rgb(var(--primary))]"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative pl-8 border-l-2 border-[rgb(var(--primary))]"
            >
              {/* Timeline dot */}
              <motion.div
                className="absolute -left-4 top-2 w-6 h-6 bg-[rgb(var(--primary))] rounded-full border-4"
                style={{ borderColor: "rgb(var(--background))" }}
                whileHover={{ scale: 1.3 }}
              ></motion.div>

              <motion.div
                className="bg-[rgb(var(--card))] rounded-lg p-6 border border-[rgb(var(--border))] hover:border-[rgb(var(--primary))] transition-colors"
                whileHover={{ translateY: -5 }}
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <div>
                    <h3 className="text-2xl font-bold text-[rgb(var(--foreground))]">{exp.position}</h3>
                    <p className="text-[rgb(var(--primary))] font-semibold">{exp.company}</p>
                  </div>
                  <span className="text-[rgb(var(--muted-foreground))] text-sm mt-2 sm:mt-0 whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                <p className="text-[rgb(var(--muted-foreground))] mb-4 leading-relaxed">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 bg-[rgb(var(--primary))] bg-opacity-10 text-[rgb(var(--primary))] rounded-full text-sm font-medium"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
