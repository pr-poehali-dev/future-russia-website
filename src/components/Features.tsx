import { Book, Rocket, Users, Award } from "lucide-react";

const features = [
  {
    icon: <Book className="h-10 w-10 text-blue-500" />,
    title: "Инновационные методики",
    description: "Образовательные программы, основанные на передовых мировых практиках"
  },
  {
    icon: <Rocket className="h-10 w-10 text-red-500" />,
    title: "Технологии будущего",
    description: "Обучение с использованием передовых цифровых инструментов и платформ"
  },
  {
    icon: <Users className="h-10 w-10 text-purple-500" />,
    title: "Сильное сообщество",
    description: "Нетворкинг и поддержка единомышленников на всех этапах обучения"
  },
  {
    icon: <Award className="h-10 w-10 text-yellow-500" />,
    title: "Признанные эксперты",
    description: "Преподаватели с большим опытом в своих областях и страстью к образованию"
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Почему выбирают нас</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 hover:-translate-y-1 transition-transform"
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
