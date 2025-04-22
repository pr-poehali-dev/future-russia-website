import { Button } from "@/components/ui/button";
import { PROJECT_DESCRIPTION, PROJECT_SLOGAN } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="max-w-2xl lg:w-1/2">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-red-600 text-transparent bg-clip-text animate-fade-in">
              БУДУЩЕЕ РОССИИ
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              {PROJECT_DESCRIPTION}
            </p>
            <p className="text-lg text-gray-600 mb-10 italic">
              "{PROJECT_SLOGAN}"
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-blue-500 to-red-500 hover:from-blue-600 hover:to-red-600 text-white text-lg px-8 py-6 h-auto">
                Записаться на занятия
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="text-lg px-8 py-6 h-auto border-2">
                Наши программы
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute top-20 right-20 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            
            <div className="relative">
              <div className="bg-white border-4 border-gray-100 rounded-2xl shadow-lg p-6 transform transition-transform hover:scale-105">
                <img 
                  src="/placeholder.svg" 
                  alt="Счастливые дети на занятии" 
                  className="w-full h-auto rounded-lg mb-4"
                />
                <div className="bg-gradient-to-r from-blue-500 to-red-500 text-white p-4 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">10 развивающих треков</h3>
                  <p className="text-sm">Комплексный подход к развитию ребенка с учетом его индивидуальных особенностей</p>
                </div>
                <div className="flex justify-center mt-4 space-x-3">
                  {['🇷🇺', '⚽', '🎨', '👨‍👩‍👧‍👦', '❤️'].map((emoji, i) => (
                    <div key={i} className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-xl shadow-sm">
                      {emoji}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
