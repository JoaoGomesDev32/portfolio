"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Github, ExternalLink, Folder } from "lucide-react"

const projects = [
  {
    title: "Xtreme Filmes",
    description: "Xtreme Filmes is a responsive website that offers a large collection of movies and series for online viewing.",
    image: "/projects/xtreme.jpg",
    technologies: ["JavaScript", "Bootstrap", "Responsive"],
    github: "https://github.com/JoaoGomesDev32/xtreme-filmes",
    demo: "https://xtremefilmes.netlify.app/",
    featured: true
  },
  {
    title: "JSD News",
    description: "News portal with an admin system and automatic news import using the Guardian API.",
    image: "/projects/news.jpg",
    technologies: ["Node.js", "Express", "EJS", "MongoDB"],
    github: "https://github.com/JoaoGomesDev32/Portal-Noticias-Estatico",
    demo: "https://jsdnews.onrender.com/",
    featured: true
  },
  {
    title: "Calculadora de IMC",
    description: "A modern, responsive application for calculating Body Mass Index (BMI).",
    image: "/projects/calc.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/JoaoGomesDev32/calc_imc",
    demo: "https://bmicalculator-3ulf.onrender.com/calcimc/Calcimc",
    featured: true
  },
  {
    title: "JS Music",
    description: "Web application to search for music on Deezer, create custom playlists and save them locally.",
    image: "/projects/music.jpg",
    technologies: ["React", "TypeScript", "Node.js"],
    github: "https://github.com/JoaoGomesDev32/js-music",
    demo: "https://jsxmusic.netlify.app/",
    featured: false
  },
  {
    title: "libft",
    description: "C functions library developed at 42 Lisboa as part of my current focus on low-level systems.",
    image: "/projects/libft.jpg",
    technologies: ["C", "Makefile", "Unix"],
    github: "https://github.com/JoaoGomesDev32/libft",
    demo: "#",
    featured: false
  },
  {
    title: "ft_printf",
    description: "Implementação da função printf em C com suporte a múltiplas especificações e tratamento de variadic arguments.",
    image: "/projects/ft_printf.png",
    technologies: ["C", "Makefile", "Unix"],
    github: "https://github.com/JoaoGomesDev32/printf",
    demo: "#",
    featured: false
  },
  {
    title: "ToDo List",
    description: "A simple and intuitive todo list application built with Vue.js.",
    image: "/projects/todo.jpg",
    technologies: ["Vue.js", "JavaScript"],
    github: "https://github.com/JoaoGomesDev32/todo-list",
    demo: "#",
    featured: false
  },
  {
    title: "Flappy Bird",
    description: "A simple and fun game inspired by the classic Flappy Bird.",
    image: "/projects/game.jpg",
    technologies: ["JavaScript", "Canvas"],
    github: "https://github.com/JoaoGomesDev32/flappyBird",
    demo: "https://voapassarinhovoa.netlify.app/",
    featured: false
  },
  {
    title: "Gerador de Mensagens",
    description: "An app to generate motivational and inspirational messages, optimized for mobile devices.",
    image: "/projects/messages.jpg",
    technologies: ["Vue 3", "Vuetify"],
    github: "https://github.com/JoaoGomesDev32/gerador-mensagens/tree/main",
    demo: "#",
    featured: false
  }
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [showAll, setShowAll] = useState(false)

  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)
  const displayedOtherProjects = showAll ? otherProjects : []

  return (
    <section id="projects" className="py-32 px-6 bg-card/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-16">
            <span className="text-primary font-mono text-sm">04.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Projects</h2>
            <div className="flex-1 h-px bg-border max-w-xs" />
          </div>

          {/* Featured Projects */}
          <div className="space-y-24 mb-20">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`grid lg:grid-cols-12 gap-8 items-center ${
                  index % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                {/* Project Image */}
                <div className={`lg:col-span-7 ${index % 2 === 1 ? "lg:col-start-6" : ""}`}>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="block group">
                    <div className="relative overflow-hidden rounded-xl bg-muted aspect-video">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Folder className="w-16 h-16 text-primary/40" />
                      </div>
                    </div>
                  </a>
                </div>

                {/* Project Info */}
                <div className={`lg:col-span-6 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1 lg:text-left" : "lg:col-start-6 lg:-ml-16 lg:text-right"} relative z-10`}>
                  <p className="text-primary font-mono text-sm mb-2">Featured Project</p>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{project.title}</h3>
                  
                  <div className="p-6 rounded-xl bg-card border border-border shadow-xl mb-4">
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  </div>

                  <div className={`flex flex-wrap gap-2 mb-4 ${index % 2 === 1 ? "" : "lg:justify-end"}`}>
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-xs font-mono text-muted-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className={`flex gap-4 ${index % 2 === 1 ? "" : "lg:justify-end"}`}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={22} />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors"
                      aria-label="Demo"
                    >
                      <ExternalLink size={22} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Projects */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-foreground mb-2">Other Projects</h3>
            <p className="text-muted-foreground">A selection of other works I've built</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedOtherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:-translate-y-2">
                  <div className="flex justify-between items-start mb-6">
                    <div className="overflow-hidden rounded-xl w-24 h-24 bg-muted">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="GitHub"
                      >
                        <Github size={20} />
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>

                  <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-xs font-mono text-muted-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Show More Button */}
          {!showAll && otherProjects.length > 0 && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowAll(true)}
                className="px-8 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-all"
              >
                See More Projects
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
