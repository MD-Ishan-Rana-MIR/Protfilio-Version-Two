"use client"

import { motion } from "framer-motion"
import { containerVariants, itemVariants } from "@/lib/animations"
import { ExternalLink, Github } from "lucide-react"
import { useState } from "react"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Full-stack MERN application with product catalog, shopping cart, and payment integration. Implemented real-time inventory management and order tracking.",
    image: "/placeholder.svg?key=cqhrj",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Full-Stack",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "React Native mobile app for managing daily tasks and projects. Features include notifications, offline mode, and cloud synchronization.",
    image: "/task-management-mobile-app.jpg",
    tags: ["React Native", "Firebase", "Redux", "Expo"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Mobile",
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    description:
      "Analytics dashboard for social media metrics. Real-time data visualization with charts, performance analytics, and trend analysis.",
    image: "/social-media-analytics-dashboard.jpg",
    tags: ["React", "Chart.js", "Express", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Full-Stack",
  },
  {
    id: 4,
    title: "AI Chat Assistant",
    description:
      "Intelligent chatbot powered by AI. Built with modern React hooks and integrates with OpenAI API for natural language processing.",
    image: "/ai-chatbot-assistant.jpg",
    tags: ["React", "OpenAI API", "Node.js", "WebSocket"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Full-Stack",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description:
      "Modern, animated portfolio website showcasing projects and skills. Responsive design with Framer Motion animations.",
    image: "/animated-portfolio-website.jpg",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Frontend",
  },
  {
    id: 6,
    title: "Fitness Tracking App",
    description:
      "Mobile app for tracking workouts and nutrition. Includes progress charts, goal setting, and community features.",
    image: "/fitness-tracking-mobile-app.jpg",
    tags: ["React Native", "Firebase", "Zustand", "Expo"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Mobile",
  },
]

const categories = ["All", "Full-Stack", "Frontend", "Mobile"]

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((p) => p.category === selectedCategory)

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-[rgb(20,20,35)]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-[rgb(var(--primary))]"></div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                selectedCategory === cat
                  ? "bg-[rgb(var(--primary))] text-[rgb(var(--primary-foreground))] glow"
                  : "border border-[rgb(var(--primary))] text-[rgb(var(--primary))] hover:bg-[rgb(var(--primary))] hover:bg-opacity-10"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--card))] hover:border-[rgb(var(--primary))] transition-colors"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-[rgb(var(--muted))]">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--card))] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[rgb(var(--foreground))]">{project.title}</h3>
                <p className="text-[rgb(var(--muted-foreground))] text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-[rgb(var(--primary))] bg-opacity-10 text-[rgb(var(--primary))] rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.liveUrl}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[rgb(var(--primary))] text-[rgb(var(--primary-foreground))] rounded-lg font-semibold hover:shadow-lg transition-shadow"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-[rgb(var(--primary))] text-[rgb(var(--primary))] rounded-lg font-semibold hover:bg-[rgb(var(--primary))] hover:bg-opacity-10 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
