import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const programs = [
  {
    title: "Цифровые технологии",
    description: "Изучите основы программирования, искусственного интеллекта и больших данных",
    duration: "6 месяцев",
    level: "Начальный",
    badge: "Популярное"
  },
  {
    title: "Инженерия будущего",
    description: "Робототехника, автоматизация и проектирование умных систем",
    duration: "8 месяцев",
    level: "Средний",
    badge: "Новинка"
  },
  {
    title: "Управление проектами",
    description: "Современные методологии и инструменты для реализации сложных проектов",
    duration: "4 месяца",
    level: "Продвинутый"
  }
];

const Programs = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Наши образовательные программы</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Выберите направление, которое поможет вам приобрести навыки будущего и стать частью новой экономики
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                  {program.badge && (
                    <Badge className="bg-gradient-to-r from-blue-500 to-red-500">{program.badge}</Badge>
                  )}
                </div>
                <CardDescription>{program.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Длительность: {program.duration}</span>
                  <span>Уровень: {program.level}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Подробнее</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="border-2">
            Смотреть все программы
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;
