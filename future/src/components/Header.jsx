import { Link } from "react-router-dom";
import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import logo from "../assets/img/logos/logo.jpg";

export default function Header({ children }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky p-4 top-0 z-40 bg-white text-zinc-900 dark:bg-zinc-800 dark:text-white backdrop-blur-sm border-t-0 border-b border-zinc-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:text-black transition-colors duration-200">
            <img src={logo} alt="Logo" className="h-20 w-auto rounded-2xl" />
            <span className="hidden sm:inline text-2xl font-semibold">SkillBridge</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <ThemeToggle />
            <Link to="/about" className="text-lg text-zinc-900 dark:text-white hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors duration-200">Sobre</Link>
            <Link to="/contact" className="text-lg text-zinc-900 dark:text-white hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors duration-200">Contato</Link>
            <Link to="/dashboard" className="text-lg text-zinc-900 dark:text-white hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors duration-200">DashBoard</Link>
            {children}
          </nav>
          <div className="flex items-center md:hidden gap-2">
            <ThemeToggle />
            <button
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={open}
              onClick={() => setOpen(v => !v)}
              className="p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {open ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <>
                    <path d="M3 12h18"></path>
                    <path d="M3 6h18"></path>
                    <path d="M3 18h18"></path>
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* mobile menu panel */}
      {open && (
        <div className="md:hidden bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white border-t border-zinc-200 dark:border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col gap-3">
              <Link to="/about" onClick={() => setOpen(false)} className="text-lg hover:text-cyan-700 dark:hover:text-cyan-300">Sobre</Link>
              <Link to="/contact" onClick={() => setOpen(false)} className="text-lg hover:text-cyan-700 dark:hover:text-cyan-300">Contato</Link>
              <Link to="/dashboard" onClick={() => setOpen(false)} className="text-lg hover:text-cyan-700 dark:hover:text-cyan-300">DashBoard</Link>
              {children}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}