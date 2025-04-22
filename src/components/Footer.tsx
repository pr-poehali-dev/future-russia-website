import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import Logo from "./Logo";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Logo size="large" />
            <p className="mt-4 text-gray-400">
              Комплексная программа развития детей дошкольного возраста. Воспитываем любовь к Родине, спорту и творчеству.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:to-red-500">Направления</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Патриотическое воспитание</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Спортивное развитие</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Творческое мышление</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Социализация</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Все программы</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:to-red-500">Информация</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">О проекте</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Расписание занятий</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Наши педагоги</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Отзывы родителей</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Вопросы и ответы</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:to-red-500">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={18} className="mr-2 text-gray-400 mt-1" />
                <span>8 (800) 123-45-67</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-2 text-gray-400 mt-1" />
                <span>info@будущеероссии.рф</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-gray-400 mt-1" />
                <span>г. Москва, ул. Примерная, д. 123</span>
              </li>
            </ul>
            <Button className="mt-6 bg-gradient-to-r from-blue-500 to-red-500 hover:from-blue-600 hover:to-red-600">
              Записаться на пробное занятие
            </Button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2023 БУДУЩЕЕ РОССИИ. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
