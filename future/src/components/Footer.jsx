import { Link } from "react-router-dom";
import { SiInstagram } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";
import footerLogo from "../assets/img/footerLogo.png";


export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
                <div className="inline-flex flex-wrap gap-2 items-center">
                    <img src={footerLogo} alt="Logo" className="h-20 w-auto"/>
                    <p className="text-sm text-gray-600">&copy; 2025 SkillBridge. All rights reserved.</p>
                </div>
                <div className="flex items-center gap-4">
                    <Link to="#" className="text-gray-600 hover:text-gray-900"><SiInstagram size={20} /></Link>
                    <Link to="#" className="text-gray-600 hover:text-gray-900"><BsTwitterX size={20} /></Link>
                </div>
            </div>
        </footer>
    )
}


