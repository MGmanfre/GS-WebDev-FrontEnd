import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@/components/Button' // seu Button existente (ou use <button>)

export default function Hero({
  title = "O Futuro do Trabalho Começa Aqui",
  subtitle = "Conectando pessoas, competências e propósito através da tecnologia",
  text = "Uma plataforma que transforma relações profissionais e promove um futuro mais justo, inclusivo e sustentável",
  children
}) {
  return (
    <section
      className="relative overflow-hidden"
      aria-label="Hero principal"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-sky-800 to-cyan-500"></div>
      <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32 lg:py-40">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
            {title}
          </h1>

          <p className="mt-4 text-lg sm:text-xl text-white/90">
            {subtitle}
          </p>

          <p className="mt-6 text-sm sm:text-base text-white/80 max-w-2xl mx-auto">
            {text}
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}