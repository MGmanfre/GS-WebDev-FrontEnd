import { Link } from "react-router-dom";
import { SiInstagram } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";
import footerLogo from "../assets/img/logos/footerLogo.png";


export default function Footer() {
    return (
        <footer className="bg-zinc-800 border-t border-gray-200 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-stretch justify-center gap-24 py-4">
                    <div className="bg-zinc-700 shadow-black rounded-2xl flex flex-col items-center p-4 w-full md:w-72">
                        <img src={footerLogo} alt="Logo" className="h-20 w-auto" />
                        <p className="text-lg mt-2 text-center">Conectando talentos ao futuro do trabalho</p>
                    </div>

                    <div className="bg-zinc-700 shadow-black rounded-2xl flex flex-col items-center p-4 w-full md:w-96">
                        <h4 className="text-2xl font-bold text-white mb-4">Geral</h4>
                        <ul className="flex flex-col space-y-2 text-xl text-center">
                            <li><Link to="/about" className="hover:text-black transition-colors duration-200">Sobre Nós</Link></li>
                            <li><Link to="/contact" className="hover:text-black transition-colors duration-200">Contato</Link></li>
                            <li><Link to="/dashboard" className="hover:text-black transition-colors duration-200">Dashboard</Link></li>
                        </ul>
                    </div>

                    <div className="bg-zinc-700 shadow-black rounded-2xl flex flex-col items-center p-4 w-full md:w-72">
                        <h4 className="text-2xl font-bold text-white mb-4">Redes Sociais</h4>
                        <ul className="flex flex-col items-center gap-2 justify-center space-x-4 text-2xl">
                            <li><a href="#" className="hover:text-black transition-colors duration-200 flex flex-row gap-1 items-center"><SiInstagram/>Instagram</a></li>
                            <li><a href="#" className="hover:text-black transition-colors duration-200 flex flex-row gap-1 items-center"><BsTwitterX/>Twitter</a></li>
                        </ul>
                    </div>
                </div>
                <div class="border-t border-white pt-4 pb-4 text-center text-sm">
                    <p>© 2025 FuturoConnect. Todos os direitos reservados. Global Solution - FIAP</p>
                </div>
            </div>
        </footer>
    )
}


