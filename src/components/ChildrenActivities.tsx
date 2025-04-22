import { Card, CardContent } from "@/components/ui/card";

const activities = [
  {
    title: "Игровые встречи",
    image: "/placeholder.svg",
    description: "Весёлые игры, способствующие развитию социальных навыков и командной работы",
    age: "3-7 лет"
  },
  {
    title: "Творческие мастерские",
    image: "/placeholder.svg",
    description: "Рисование, лепка и аппликации для развития мелкой моторики и творческого мышления",
    age: "4-7 лет"
  },
  {
    title: "Спортивные игры",
    image: "/placeholder.svg", 
    description: "Активные занятия для физического развития и воспитания командного духа",
    age: "3-7 лет"
  }
];

const ChildrenActivities = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Как проходят наши занятия</h2>
          <p className="text-gray-600">
            Мы создаём дружественную и безопасную среду, где каждый ребёнок может раскрыть свой потенциал
            через игру, творчество и общение со сверстниками
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
              <div className="relative">
                <img 
                  src={activity.image} 
                  alt={activity.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 right-3 bg-white rounded-full px-3 py-1 text-sm font-medium">
                  {activity.age}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">{activity.title}</h3>
                <p className="text-gray-600">{activity.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-red-50 rounded-2xl p-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-4">Первое пробное занятие бесплатно!</h3>
              <p className="text-gray-600 mb-6">
                Приходите с ребёнком на пробное занятие, чтобы увидеть, как проходят наши встречи, 
                познакомиться с педагогами и другими детьми.
              </p>
              <button className="bg-gradient-to-r from-blue-500 to-red-500 hover:from-blue-600 hover:to-red-600 text-white font-medium px-6 py-3 rounded-lg">
                Записаться на пробное занятие
              </button>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="relative w-48 h-48 bg-white rounded-full flex items-center justify-center shadow-md">
                <div className="absolute -right-2 -top-2 bg-red-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold">
                  0₽
                </div>
                <div className="text-center">
                  <span className="block text-4xl">🎁</span>
                  <span className="block font-bold mt-2">Первый визит</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChildrenActivities;
