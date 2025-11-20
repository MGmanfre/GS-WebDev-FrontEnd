import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import logo from "../assets/img/logo.jpg";

export default function Header({ children }) {
  return (
    <header className="sticky p-4 top-0 z-40 bg-zinc-800 text-white backdrop-blur-sm border-t-0 border-b border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:text-black transition-colors duration-200">
            <img src={logo} alt="Logo" className="h-20 w-auto rounded-2xl" />
            <span className="hidden sm:inline text-2xl font-semibold dark:text-white">SkillBridge</span>
          </Link>

          <nav className="flex items-center gap-6">
            <ThemeToggle />            
            <Link to="/about" className="text-xl text-white hover:text-black transition-colors duration-200">
              Sobre
            </Link>
            <Link to="/about" className="text-xl text-white hover:text-black transition-colors duration-200">
              Contato
            </Link>
            {children}
          </nav>
        </div>
      </div>
    </header>
  )
}