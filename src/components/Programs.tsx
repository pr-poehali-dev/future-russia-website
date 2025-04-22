import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DEVELOPMENT_TRACKS } from "@/lib/constants";

const Programs = () => {
  // Отображаем только 6 треков из 10 на главной странице
  const displayedTracks = DEVELOPMENT_TRACKS.slice(0, 6);
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Наши развивающие треки</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            10 уникальных направлений для всестороннего развития ребенка, формирования любви к Родине и успешной социализации
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedTracks.map((track) => (
            <Card key={track.id} className="hover:shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden">
              <div className={`${track.color} h-2`}></div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{track.icon}</span>
                    <CardTitle className="text-xl">{track.title}</CardTitle>
                  </div>
                  {track.id <= 3 && (
                    <Badge className="bg-gradient-to-r from-blue-500 to-red-500">Популярное</Badge>
                  )}
                </div>
                <CardDescription className="mt-2">{track.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Возраст: 3-7 лет</span>
                  <span>Занятия: 2 раза в неделю</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className={`w-full ${track.color} hover:opacity-90 text-white`}>Подробнее</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="border-2">
            Смотреть все направления
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;
