import { Button } from "@/components/ui/button";
import { PROJECT_DESCRIPTION, PROJECT_SLOGAN } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-red-600 text-transparent bg-clip-text animate-fade-in">
            БУДУЩЕЕ РОССИИ
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            {PROJECT_DESCRIPTION}
          </p>
          <p className="text-lg text-gray-600 mb-10 italic">
            "{PROJECT_SLOGAN}"
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-blue-500 to-red-500 hover:from-blue-600 hover:to-red-600 text-white text-lg px-8 py-6 h-auto">
              Наши программы
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="text-lg px-8 py-6 h-auto border-2">
              Узнать больше
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
