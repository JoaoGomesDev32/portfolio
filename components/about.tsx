"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, GraduationCap, Briefcase } from "lucide-react"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-16">
            <span className="text-primary font-mono text-sm">01.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Sobre Mim</h2>
            <div className="flex-1 h-px bg-border max-w-xs" />
          </div>

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
            {/* Text Content */}
            <div className="lg:col-span-3 space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Hi — I'm <span className="text-primary font-medium">João Gomes</span>, a Frontend Software Engineer from Brazil based in Lisbon, Portugal.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed">
                I have experience building modern web applications using Vue.js, TypeScript and JavaScript, focusing on enterprise interfaces and interactive dashboards.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed">
                I worked as a frontend developer at Magnisoft, contributing to a billing web application, implementing complex features, dynamic tables and charts, and maintaining the application in a professional environment.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed">
                I hold a degree in Software Analysis and Development and currently study at 42 Lisboa, deepening my knowledge in systems, Linux, Shell, programming logic and low-level software development.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm passionate about modern frontend development, application architecture, user experience and frontend-backend integration. I aim to keep growing as a software engineer by working on challenging projects and building scalable, high-quality applications.
              </p>

              {/* Quick Info Cards */}
              <div className="grid sm:grid-cols-3 gap-4 pt-6">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                  <MapPin className="text-primary" size={20} />
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground font-medium">Lisbon, PT</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                  <GraduationCap className="text-primary" size={20} />
                  <div>
                    <p className="text-sm text-muted-foreground">Education</p>
                    <p className="text-foreground font-medium">ADS - Estácio</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                  <Briefcase className="text-primary" size={20} />
                  <div>
                    <p className="text-sm text-muted-foreground">Experience</p>
                    <p className="text-foreground font-medium">+1 year</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Photo */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative group"
              >
                <div className="relative z-10 overflow-hidden rounded-2xl">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    {/* Profile image */}
                    <img
                      src="/foto-perfil.jpg"
                      alt="Foto de perfil de João Gomes"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                </div>
                {/* Decorative border */}
                <div className="absolute inset-0 border-2 border-primary rounded-2xl translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
