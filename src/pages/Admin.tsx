import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload, FileText, CheckCircle, AlertCircle } from "lucide-react";

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fileName, setFileName] = useState("");
  const [fileDescription, setFileDescription] = useState("");
  const [uploadStatus, setUploadStatus] = useState<null | "success" | "error">(null);
  const [fileCategory, setFileCategory] = useState("patriotic");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // В реальном проекте здесь будет настоящая аутентификация
    if (username === "admin" && password === "password") {
      setIsAuthenticated(true);
    } else {
      alert("Неверные учетные данные!");
    }
  };

  const handleFileUpload = (e: React.FormEvent) => {
    e.preventDefault();
    // Имитация загрузки файла
    setUploadStatus("success");
    setTimeout(() => {
      setUploadStatus(null);
      setFileName("");
      setFileDescription("");
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-red-600 text-transparent bg-clip-text">
          Панель администратора
        </h1>
        
        {!isAuthenticated ? (
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle>Вход в систему</CardTitle>
              <CardDescription>
                Введите ваши учетные данные для доступа к панели администратора
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Имя пользователя</Label>
                  <Input 
                    id="username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Пароль</Label>
                  <Input 
                    id="password" 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-red-500">
                  Войти
                </Button>
              </form>
            </CardContent>
          </Card>
        ) : (
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="upload" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="upload">Загрузка материалов</TabsTrigger>
                <TabsTrigger value="manage">Управление материалами</TabsTrigger>
                <TabsTrigger value="settings">Настройки</TabsTrigger>
              </TabsList>
              
              <TabsContent value="upload" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Загрузка образовательных материалов</CardTitle>
                    <CardDescription>
                      Загрузите новые образовательные материалы для вашего проекта
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleFileUpload} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="fileCategory">Категория</Label>
                        <select 
                          id="fileCategory"
                          value={fileCategory}
                          onChange={(e) => setFileCategory(e.target.value)}
                          className="w-full p-2 border rounded-md"
                        >
                          <option value="patriotic">Патриотическое воспитание</option>
                          <option value="sports">Спортивное развитие</option>
                          <option value="creative">Творческое мышление</option>
                          <option value="social">Социализация</option>
                          <option value="orlyata">Орлята России</option>
                        </select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="fileName">Название материала</Label>
                        <Input 
                          id="fileName" 
                          value={fileName} 
                          onChange={(e) => setFileName(e.target.value)} 
                          required 
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="fileDescription">Описание</Label>
                        <textarea 
                          id="fileDescription" 
                          value={fileDescription} 
                          onChange={(e) => setFileDescription(e.target.value)} 
                          className="w-full p-2 border rounded-md h-24"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="file">Файл материала</Label>
                        <div className="border-2 border-dashed rounded-md p-8 text-center cursor-pointer hover:bg-gray-50">
                          <Upload className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                          <p className="text-sm text-gray-500">
                            Перетащите файл сюда или нажмите для выбора
                          </p>
                          <input id="file" type="file" className="hidden" required />
                        </div>
                      </div>
                      
                      {uploadStatus && (
                        <div className={`p-3 rounded-md ${uploadStatus === "success" ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"} flex items-center`}>
                          {uploadStatus === "success" ? (
                            <>
                              <CheckCircle className="h-5 w-5 mr-2" />
                              <span>Материал успешно загружен!</span>
                            </>
                          ) : (
                            <>
                              <AlertCircle className="h-5 w-5 mr-2" />
                              <span>Ошибка при загрузке материала.</span>
                            </>
                          )}
                        </div>
                      )}
                    </CardContent>
                    <CardFooter>
                      <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-red-500">
                        Загрузить материал
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </TabsContent>
              
              <TabsContent value="manage">
                <Card>
                  <CardHeader>
                    <CardTitle>Управление материалами</CardTitle>
                    <CardDescription>
                      Просмотр и редактирование загруженных образовательных материалов
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[1, 2, 3].map((item) => (
                        <div key={item} className="flex items-center justify-between p-3 border rounded-md">
                          <div className="flex items-center">
                            <FileText className="h-5 w-5 mr-3 text-blue-500" />
                            <div>
                              <h4 className="font-medium">Материал #{item}</h4>
                              <p className="text-sm text-gray-500">Загружен: 01.06.2023</p>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">Изменить</Button>
                            <Button variant="outline" size="sm" className="text-red-500">Удалить</Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="settings">
                <Card>
                  <CardHeader>
                    <CardTitle>Настройки администратора</CardTitle>
                    <CardDescription>
                      Управление учетной записью и настройками доступа
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="adminName">Имя администратора</Label>
                        <Input id="adminName" defaultValue="Администратор" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="adminEmail">Email</Label>
                        <Input id="adminEmail" type="email" defaultValue="admin@будущеероссии.рф" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="newPassword">Новый пароль</Label>
                        <Input id="newPassword" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Подтверждение пароля</Label>
                        <Input id="confirmPassword" type="password" />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-gradient-to-r from-blue-500 to-red-500">
                      Сохранить изменения
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Admin;
