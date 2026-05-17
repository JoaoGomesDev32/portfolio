"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, ExternalLink } from "lucide-react"

const experiences = [
  {
    company: "42 Lisboa",
    role: "Software Engineering Student",
    period: "2025 - Present",
    description: "Intensive programming training at 42 Lisboa focused on C and hands-on projects. Completed projects such as Libft and ft_printf, developing skills in low-level programming, memory management and algorithms. Planning new projects in Python.",
    technologies: ["C", "Libft", "ft_printf", "Git", "Unix", "Makefile"],
    link: "https://www.42lisboa.com/"
  },
  {
    company: "Magnisoft",
    role: "Frontend Developer",
    period: "Oct 2024 - Sep 2025",
    description: "Worked on a billing web application using Vue.js and TypeScript, implementing complex features, dynamic tables, charts and maintaining production code within an agile team.",
    technologies: ["Vue.js", "TypeScript", "JavaScript", "CSS3", "Git"],
    link: "#"
  },
  {
    company: "Codecademy",
    role: "Fullstack Engineer Program",
    period: "2024",
    description: "Comprehensive fullstack program covering frontend, backend, databases and modern development methodologies.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "PostgreSQL"],
    link: "https://www.codecademy.com/"
  },
  {
    company: "Estácio",
    role: "Bachelor in Software Analysis and Development",
    period: "2020 - 2024",
    description: "Degree in ADS focused on software development, databases, software engineering and agile methodologies.",
    technologies: ["Java", "Python", "SQL", "UML", "Scrum"],
    link: "https://www.estacio.br/"
  }
]

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-32 px-6 bg-card/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-16">
            <span className="text-primary font-mono text-sm">02.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Experience</h2>
            <div className="flex-1 h-px bg-border max-w-xs" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative grid md:grid-cols-2 gap-8 pb-16 last:pb-0 ${
                  index % 2 === 0 ? "" : "md:direction-rtl"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-primary rounded-full md:-translate-x-1/2 ring-4 ring-background" />

                {/* Content */}
                <div className={`ml-8 md:ml-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}>
                  <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors group">
                    <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <Calendar size={16} className="text-primary" />
                      <span className="text-sm text-primary font-mono">{exp.period}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-foreground mb-1">{exp.role}</h3>
                    
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors mb-4 ${
                        index % 2 === 0 ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      <span>{exp.company}</span>
                      <ExternalLink size={14} />
                    </a>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                    
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-mono text-primary bg-primary/10 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                {index % 2 === 0 ? <div className="hidden md:block" /> : null}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
