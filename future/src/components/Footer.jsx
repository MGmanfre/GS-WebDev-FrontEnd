import { Link } from "react-router-dom";
import { SiInstagram } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import footerLogo from "../assets/img/logos/footerLogo.png";


export default function Footer() {
    return (
        <footer className="bg-white text-zinc-900 dark:bg-zinc-900 dark:text-white border-t border-zinc-200 dark:border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 md:gap-24 py-6">
                    <div className="bg-zinc-100 dark:bg-zinc-800 rounded-2xl flex flex-col items-center p-6 w-full md:w-72">
                        <img src={footerLogo} alt="Logo" className="h-20 w-auto" />
                        <p className="text-lg mt-2 text-center text-zinc-700 dark:text-zinc-200">Conectando talentos ao futuro do trabalho</p>
                    </div>

                    <div className="bg-zinc-100 dark:bg-zinc-800 rounded-2xl flex flex-col items-center p-6 w-full md:w-96">
                        <h4 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">Geral</h4>
                        <ul className="flex flex-col space-y-2 text-lg text-center">
                            <li><Link to="/about" className="hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors duration-200">Sobre Nós</Link></li>
                            <li><Link to="/contact" className="hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors duration-200">Contato</Link></li>
                            <li><Link to="/dashboard" className="hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors duration-200">Dashboard</Link></li>
                        </ul>
                    </div>

                    <div className="bg-zinc-100 dark:bg-zinc-800 rounded-2xl flex flex-col items-center p-6 w-full md:w-72">
                        <h4 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">Redes Sociais</h4>
                        <ul className="flex flex-col items-center gap-2 justify-center text-lg">
                            <li><a href="#" className="hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors duration-200 flex flex-row gap-2 justify-center items-center"><SiInstagram/>Instagram</a></li>
                            <li><a href="#" className="hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors duration-200 flex flex-row gap-2 justify-center items-center"><BsTwitterX/>Twitter</a></li>
                            <li><a href="#" className="hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors duration-200 flex flex-row gap-2 justify-center items-center"><FaLinkedin/>LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-zinc-200 dark:border-white/10 pt-4 pb-4 text-center text-sm text-zinc-600 dark:text-zinc-300">
                    <p>© 2025 FuturoConnect. Todos os direitos reservados. Global Solution - FIAP</p>
                </div>
            </div>
        </footer>
    )
}


