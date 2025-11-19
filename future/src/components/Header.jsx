import { Link } from "react-router-dom";
import logo from "../assets/img/logo.jpg";

export default function Header({children}) {
    return (
        <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="h-16 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-3">
                        <img
                            src={logo}
                            alt="Logo"
                            className="h-20 w-auto rounded-xl"
                        />
                    </Link>

                    <nav className="flex items-center gap-4">
                        <Link to="/about" className="text-sm text-gray-600 hover:text-gray-900">
                            About
                        </Link>
                        <Link to="/contact" className="text-sm text-gray-600 hover:text-gray-900">
                            Contact
                        </Link>
                        {children}
                    </nav>
                </div>
            </div>
        </header>
    );
}

