"use client"

import { motion } from "framer-motion"
import { containerVariants, itemVariants } from "@/lib/animations"

const skillsData = [
  {
    category: "Frontend Development",
    skills: [
      { name: "React", level: 95 },
      { name: "React Native", level: 85 },
      { name: "Next.js", level: 92 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "shadcn UI", level: 90 },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 88 },
      { name: "MongoDB", level: 85 },
      { name: "RESTful APIs", level: 92 },
      { name: "Database Design", level: 85 },
      { name: "Authentication", level: 88 },
    ],
  },
  {
    category: "State Management & Tools",
    skills: [
      { name: "Redux", level: 88 },
      { name: "Zustand", level: 87 },
      { name: "Git & GitHub", level: 92 },
      { name: "Postman", level: 90 },
      { name: "Framer Motion", level: 85 },
      { name: "Web Performance", level: 85 },
    ],
  },
  {
    category: "Competitive Programming",
    skills: [
      { name: "Data Structures", level: 90 },
      { name: "Algorithms", level: 88 },
      { name: "Problem Solving", level: 92 },
      { name: "Time Complexity", level: 90 },
      { name: "C++", level: 85 },
      { name: "JavaScript", level: 95 },
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">Technical Skills</h2>
          <div className="h-1 w-20 bg-[rgb(var(--primary))]"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillsData.map((skillGroup, groupIndex) => (
            <motion.div
              key={groupIndex}
              variants={itemVariants}
              className="bg-[rgb(var(--card))] rounded-lg p-6 border border-[rgb(var(--border))] hover:border-[rgb(var(--primary))] transition-colors"
            >
              <h3 className="text-xl font-bold text-[rgb(var(--primary))] mb-6">{skillGroup.category}</h3>

              <div className="space-y-4">
                {skillGroup.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[rgb(var(--foreground))] font-semibold">{skill.name}</span>
                      <span className="text-[rgb(var(--primary))] text-sm font-semibold">{skill.level}%</span>
                    </div>

                    <div className="h-2 bg-[rgb(var(--muted))] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-[rgb(100,200,255)] to-[rgb(150,150,255)] rounded-full"
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
        >
          {[
            { label: "Years Experience", value: "1.5+" },
            { label: "Projects Built", value: "20+" },
            { label: "Happy Clients", value: "15+" },
            { label: "Code Commits", value: "1000+" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-[rgb(var(--card))] rounded-lg p-4 border border-[rgb(var(--primary))] border-opacity-20 text-center"
            >
              <p className="text-3xl font-bold gradient-text mb-2">{stat.value}</p>
              <p className="text-sm text-[rgb(var(--muted-foreground))]">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
