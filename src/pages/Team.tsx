import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamMember from "@/components/TeamMember";

const Team = () => {
  return (
    <div>
      <Navbar />
      
      <div className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-red-600 text-transparent bg-clip-text">
              Наша команда
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Познакомьтесь с профессионалами, которые делают наш образовательный проект особенным и 
              вдохновляют детей на новые достижения.
            </p>
          </div>
          
          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <TeamMember 
                name="Блинов Антон Александрович"
                role="Куратор образовательного проекта"
                bio="Опытный педагог и руководитель с более чем 10-летним стажем работы в области дошкольного образования. Антон Александрович разработал уникальную методику развития детей, которая сочетает патриотическое воспитание с всесторонним развитием личности ребенка."
                image="/placeholder.svg"
                isCurator={true}
                socialLinks={{
                  email: "blinov@будущеероссии.рф",
                  linkedin: "https://linkedin.com/"
                }}
              />
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-center mb-8">Наши педагоги</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMember 
              name="Иванова Мария Сергеевна"
              role="Руководитель направления творческого развития"
              bio="Профессиональный художник и педагог. Помогает детям раскрыть творческий потенциал и развить креативное мышление через различные виды искусства."
              image="/placeholder.svg"
              socialLinks={{
                email: "ivanova@будущеероссии.рф",
                instagram: "https://instagram.com/"
              }}
            />
            
            <TeamMember 
              name="Петров Дмитрий Игоревич"
              role="Тренер спортивного направления"
              bio="Мастер спорта по лёгкой атлетике. Прививает детям любовь к спорту и активному образу жизни, развивает командный дух и уверенность в себе."
              image="/placeholder.svg"
              socialLinks={{
                email: "petrov@будущеероссии.рф",
                instagram: "https://instagram.com/"
              }}
            />
            
            <TeamMember 
              name="Смирнова Елена Викторовна"
              role="Специалист по социализации"
              bio="Детский психолог с опытом более 8 лет. Помогает детям развивать социальные навыки, эмоциональный интеллект и умение работать в коллективе."
              image="/placeholder.svg"
              socialLinks={{
                email: "smirnova@будущеероссии.рф",
                facebook: "https://facebook.com/"
              }}
            />
            
            <TeamMember 
              name="Козлов Алексей Петрович"
              role="Координатор программы «Орлята России»"
              bio="Бывший вожатый ВДЦ «Орлёнок». Готовит детей к участию в программе, делится опытом и помогает им раскрыть лидерские качества."
              image="/placeholder.svg"
              socialLinks={{
                email: "kozlov@будущеероссии.рф",
                instagram: "https://instagram.com/"
              }}
            />
            
            <TeamMember 
              name="Николаева Ольга Андреевна"
              role="Преподаватель патриотического воспитания"
              bio="Историк, автор программы «С любовью к Родине». Увлекательно знакомит детей с историей и культурой России, прививает гордость за свою страну."
              image="/placeholder.svg"
              socialLinks={{
                email: "nikolaeva@будущеероссии.рф",
                facebook: "https://facebook.com/"
              }}
            />
            
            <TeamMember 
              name="Соколов Игорь Владимирович"
              role="Методист образовательных программ"
              bio="Кандидат педагогических наук. Разрабатывает учебные материалы и программы, обеспечивает высокий стандарт образовательного процесса."
              image="/placeholder.svg"
              socialLinks={{
                email: "sokolov@будущеероссии.рф",
                linkedin: "https://linkedin.com/"
              }}
            />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Team;
