import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { FaGithub, FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function Hero() {
  const subtitleRef = useRef<HTMLHeadingElement | null>(null)
  const containerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (containerRef.current) {
      gsap.from(containerRef.current.querySelector('h1'), {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
      })
    }

    const messages = ['Desenvolvedor Web', 'Apaixonado por Tecnologia', 'Pronto para Inovar']
    let i = 0

    const typeEffect = () => {
      if (!subtitleRef.current) return
      subtitleRef.current.textContent = ''
      let j = 0
      const interval = setInterval(() => {
        if (!subtitleRef.current) return
        subtitleRef.current.textContent += messages[i][j]
        j++
        if (j === messages[i].length) {
          clearInterval(interval)
          setTimeout(() => {
            i = (i + 1) % messages.length
            typeEffect()
          }, 1500)
        }
      }, 80)
    }

    typeEffect()

    return () => {
      // cleanup if needed
    }
  }, [])

  return (
    <section ref={containerRef} className="hero h-screen flex items-center justify-center text-center bg-gradient-to-br from-gray-900 via-gray-800 to-green-700 text-white">
      <div className="hero-content">
        <h1 className="text-4xl md:text-6xl font-bold text-green-400 mb-4">Bem-vindo, Eu sou João Silva</h1>
        <h2 ref={subtitleRef} className="text-xl md:text-2xl h-10 mb-6"></h2>
        <a href="#portfolio" className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded">Veja Meus Projetos</a>
        <div className="social-icons mt-8 flex justify-center space-x-6 text-2xl">
          <a href="https://github.com/JoaoGomesDev32" target="_blank" rel="noreferrer" className="hover:text-black">
            <FaGithub />
          </a>
          <a href="https://wa.me/seunumerodetelefone" target="_blank" rel="noreferrer" className="hover:text-black">
            <FaWhatsapp />
          </a>
          <a href="https://www.instagram.com/seuusuario" target="_blank" rel="noreferrer" className="hover:text-black">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/joaofelipedev32/" target="_blank" rel="noreferrer" className="hover:text-black">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  )
}
