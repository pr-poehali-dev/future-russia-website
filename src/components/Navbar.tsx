import { Link } from "react-router-dom";
import Logo from "./Logo";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Logo />
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">
            Главная
          </Link>
          <Link to="/programs" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">
            Программы
          </Link>
          <Link to="/about" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">
            О проекте
          </Link>
          <Link to="/contacts" className="font-medium text-gray-700 hover:text-blue-600 transition-colors">
            Контакты
          </Link>
        </div>
        
        <Button className="bg-gradient-to-r from-blue-500 to-red-500 hover:from-blue-600 hover:to-red-600 text-white">
          Присоединиться
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
