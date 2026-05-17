"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Instagram, Heart } from "lucide-react"

const socialLinks = [
  { icon: Github, href: "https://github.com/JoaoGomesDev32", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/joaofelipedev32/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/", label: "Instagram" },
]

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <p className="text-xl font-semibold text-foreground mb-2">
              JG<span className="text-primary">.</span>
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Built with <Heart size={14} className="text-primary" /> by João Gomes
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>

          {/* Year */}
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
