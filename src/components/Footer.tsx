import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <Logo size="small" />
            <p className="mt-4 text-gray-400">
              Образовательная платформа для новаторов и лидеров будущего России
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Ссылки</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Главная</Link></li>
              <li><Link to="/programs" className="text-gray-400 hover:text-white transition-colors">Программы</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">О проекте</Link></li>
              <li><Link to="/contacts" className="text-gray-400 hover:text-white transition-colors">Контакты</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <ul className="space-y-2 text-gray-400">
              <li>info@future-russia.ru</li>
              <li>+7 (800) 123-45-67</li>
              <li>г. Москва, ул. Инновационная, 42</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Подписаться</h3>
            <p className="text-gray-400 mb-4">Получайте новости о наших программах</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email" 
                className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none w-full"
              />
              <button className="bg-gradient-to-r from-blue-500 to-red-500 px-4 rounded-r-md">
                ОК
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} БУДУЩЕЕ РОССИИ. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
