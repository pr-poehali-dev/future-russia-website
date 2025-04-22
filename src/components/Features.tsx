import { Heart, Star, Users, Medal, Rocket, Shield } from "lucide-react";

const features = [
  {
    icon: <Heart className="h-10 w-10 text-red-500" />,
    title: "Личностное развитие",
    description: "Индивидуальный подход к каждому ребенку, учитывая его интересы и темп развития"
  },
  {
    icon: <Star className="h-10 w-10 text-yellow-500" />,
    title: "Патриотическое воспитание",
    description: "Прививаем любовь к Родине через знакомство с традициями и историей России"
  },
  {
    icon: <Users className="h-10 w-10 text-green-500" />,
    title: "Социализация",
    description: "Учим детей взаимодействовать друг с другом, работать в команде и разрешать конфликты"
  },
  {
    icon: <Medal className="h-10 w-10 text-blue-500" />,
    title: "Физическое развитие",
    description: "Спортивные игры и активности для формирования здорового образа жизни с детства"
  },
  {
    icon: <Rocket className="h-10 w-10 text-purple-500" />,
    title: "Творческий потенциал",
    description: "Раскрываем таланты через рисование, музыку, театр и другие творческие занятия"
  },
  {
    icon: <Shield className="h-10 w-10 text-indigo-500" />,
    title: "Подготовка к школе",
    description: "Формируем базовые навыки и знания для успешного старта школьного обучения"
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6">Комплексное развитие дошкольников</h2>
          <p className="text-gray-600">
            Наша миссия — помочь каждому ребенку вырасти гармоничной личностью, 
            любящей свою Родину и готовой к успешной жизни в современном мире
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-5 inline-block p-3 bg-gray-50 rounded-full">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
