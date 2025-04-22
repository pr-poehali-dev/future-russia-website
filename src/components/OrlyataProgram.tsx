import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Award, Calendar, Compass, Target } from "lucide-react";

const OrlyataProgram = () => {
  return (
    <div className="py-16 bg-gradient-to-br from-blue-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            <span className="bg-gradient-to-r from-blue-600 to-red-600 text-transparent bg-clip-text">
              Программа «Орлята России»
            </span>
            <span className="absolute -top-6 -right-10 text-2xl">🦅</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Наш образовательный проект готовит детей к участию в престижной программе 
            «Орлята России» от Всероссийского детского центра «Орлёнок»
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-transform hover:scale-105">
            <div className="h-64 bg-gradient-to-r from-blue-500 to-red-500 p-8 flex items-center justify-center">
              <img src="/placeholder.svg" alt="ВДЦ Орлёнок" className="h-full object-contain" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">О программе «Орлята России»</h3>
              <p className="text-gray-700 mb-4">
                Программа «Орлята России» — это уникальная возможность для детей получить 
                всероссийский опыт, развить лидерские качества и встретиться с единомышленниками 
                со всей страны в легендарном детском центре «Орлёнок».
              </p>
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Лидерство</span>
                <span className="bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full">Патриотизм</span>
                <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Дружба</span>
                <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">Активность</span>
              </div>
              <Button variant="outline" className="w-full">Узнать больше</Button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-6">Как мы готовим детей</h3>
              
              <div className="space-y-4">
                <Card className="overflow-hidden border-l-4 border-blue-500">
                  <CardContent className="p-4 flex items-start">
                    <div className="mr-4 mt-1 bg-blue-100 p-2 rounded-full">
                      <TrendingUp className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Развитие лидерских качеств</h4>
                      <p className="text-gray-600 text-sm">Учим детей проявлять инициативу и принимать решения</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden border-l-4 border-red-500">
                  <CardContent className="p-4 flex items-start">
                    <div className="mr-4 mt-1 bg-red-100 p-2 rounded-full">
                      <Users className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Командная работа</h4>
                      <p className="text-gray-600 text-sm">Развиваем навыки эффективного взаимодействия в коллективе</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden border-l-4 border-green-500">
                  <CardContent className="p-4 flex items-start">
                    <div className="mr-4 mt-1 bg-green-100 p-2 rounded-full">
                      <Award className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Достижение результатов</h4>
                      <p className="text-gray-600 text-sm">Помогаем ставить цели и добиваться успеха</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden border-l-4 border-yellow-500">
                  <CardContent className="p-4 flex items-start">
                    <div className="mr-4 mt-1 bg-yellow-100 p-2 rounded-full">
                      <Calendar className="h-5 w-5 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Подготовка к смене</h4>
                      <p className="text-gray-600 text-sm">Погружаем в атмосферу и традиции ВДЦ «Орлёнок»</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-blue-900 text-white p-8 md:p-12">
          <div className="absolute top-0 right-0 w-40 h-40 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          
          <div className="relative z-10 md:w-3/4">
            <h3 className="text-3xl font-bold mb-6">Преимущества участия в программе</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="bg-white/10 p-3 rounded-full mr-4">
                  <Compass className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Новые горизонты</h4>
                  <p className="text-blue-100">Знакомство с уникальной образовательной средой ВДЦ «Орлёнок»</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white/10 p-3 rounded-full mr-4">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Друзья со всей России</h4>
                  <p className="text-blue-100">Возможность подружиться с детьми из разных регионов страны</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white/10 p-3 rounded-full mr-4">
                  <Target className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Развитие талантов</h4>
                  <p className="text-blue-100">Раскрытие потенциала в разных направлениях деятельности</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white/10 p-3 rounded-full mr-4">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Престижный опыт</h4>
                  <p className="text-blue-100">Участие в программе — значимое достижение для будущего</p>
                </div>
              </div>
            </div>
            
            <Button className="bg-white text-blue-900 hover:bg-blue-50">
              Записаться на подготовку к программе
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrlyataProgram;
