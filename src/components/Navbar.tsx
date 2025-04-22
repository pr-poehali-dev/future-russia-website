import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Logo />
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">Главная</Link>
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">О проекте</Link>
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">Направления</Link>
            <Link to="/team" className="text-gray-700 hover:text-blue-600 font-medium">Команда</Link>
            <Link to="/admin" className="text-gray-700 hover:text-blue-600 font-medium">Материалы</Link>
          </div>
          
          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-blue-500 to-red-500 hover:from-blue-600 hover:to-red-600">
              Записаться
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 animate-fade-in">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium py-2">Главная</Link>
              <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium py-2">О проекте</Link>
              <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium py-2">Направления</Link>
              <Link to="/team" className="text-gray-700 hover:text-blue-600 font-medium py-2">Команда</Link>
              <Link to="/admin" className="text-gray-700 hover:text-blue-600 font-medium py-2">Материалы</Link>
              <Button className="bg-gradient-to-r from-blue-500 to-red-500 hover:from-blue-600 hover:to-red-600 w-full mt-4">
                Записаться
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
