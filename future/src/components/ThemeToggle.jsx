import { useEffect, useState } from 'react'
import { HiSun, HiMoon } from 'react-icons/hi'

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light'
    const stored = localStorage.getItem('theme')
    if (stored) return stored
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggle = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark')

  return (
    <button
      onClick={toggle}
      aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
      title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
      className="cursor-pointer p-2 rounded-md hover:bg-gray-200/30 dark:hover:bg-white/10 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
    >
      {theme === 'dark' ? (
        <HiSun className="w-5 h-5 text-white" />
      ) : (
        <HiMoon className="w-5 h-5 text-white" />
      )}
    </button>
  )
}