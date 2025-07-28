import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const catalogItems = [
    {
      id: 1,
      name: 'Брусчатка классическая',
      category: 'classic',
      price: '1,200₽/м²',
      image: '/img/389e151b-ecc9-4b47-acf8-6dbd05ba652f.jpg',
      description: 'Прочная брусчатка для дорожек и площадей'
    },
    {
      id: 2,
      name: 'Тротуарная плитка "Волна"',
      category: 'decorative',
      price: '950₽/м²',
      image: '/img/4fe0adf6-717f-46ca-89fa-89a59216f6a8.jpg',
      description: 'Декоративная плитка с рельефной поверхностью'
    },
    {
      id: 3,
      name: 'Плитка садовая',
      category: 'garden',
      price: '800₽/м²',
      image: '/img/9547967f-52b0-4a1b-a976-f6d4b4b36e78.jpg',
      description: 'Идеальна для садовых дорожек и зон отдыха'
    }
  ];

  const advantages = [
    {
      icon: 'Shield',
      title: 'Гарантия 25 лет',
      description: 'Полная гарантия на всю продукцию с возможностью замены'
    },
    {
      icon: 'Award',
      title: 'Сертификаты качества',
      description: 'ГОСТ, ISO 9001, экологические сертификаты соответствия'
    },
    {
      icon: 'Truck',
      title: 'Доставка по региону',
      description: 'Быстрая доставка собственным транспортом за 24 часа'
    },
    {
      icon: 'Wrench',
      title: 'Услуги укладки',
      description: 'Профессиональная укладка с гарантией на работы'
    }
  ];

  const reviews = [
    {
      name: 'Андрей К.',
      rating: 5,
      text: 'Отличное качество плитки, уложили площадку возле дома. Прошел год - как новая!',
      date: '15 января 2024'
    },
    {
      name: 'Мария С.',
      rating: 5,
      text: 'Быстрая доставка, профессиональные мастера. Рекомендую!',
      date: '28 декабря 2023'
    },
    {
      name: 'Дмитрий П.',
      rating: 5,
      text: 'Большой выбор, приемлемые цены. Покупал для дачи - очень доволен результатом.',
      date: '10 ноября 2023'
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? catalogItems 
    : catalogItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Brick" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-secondary">ПлиткаПро</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#catalog" className="text-secondary hover:text-primary transition-colors">Каталог</a>
              <a href="#advantages" className="text-secondary hover:text-primary transition-colors">Преимущества</a>
              <a href="#reviews" className="text-secondary hover:text-primary transition-colors">Отзывы</a>
              <a href="#contacts" className="text-secondary hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="hidden md:inline-flex">Заказать звонок</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary via-secondary/90 to-secondary/80 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Качественная<br />
              <span className="text-primary">тротуарная плитка</span><br />
              с гарантией 25 лет
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Преобразите ваш участок с нашей прочной и красивой плиткой. 
              Сертифицированное качество и профессиональная укладка.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-4 bg-primary hover:bg-primary/90">
                <Icon name="Phone" size={20} className="mr-2" />
                Получить консультацию
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-secondary">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-10">
          <img 
            src="/img/389e151b-ecc9-4b47-acf8-6dbd05ba652f.jpg" 
            alt="Тротуарная плитка" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-secondary mb-4">Каталог продукции</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Широкий выбор тротуарной плитки для любых задач - от садовых дорожек до городских площадей
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Button 
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('all')}
              className="mb-2"
            >
              Все категории
            </Button>
            <Button 
              variant={selectedCategory === 'classic' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('classic')}
              className="mb-2"
            >
              Классическая
            </Button>
            <Button 
              variant={selectedCategory === 'decorative' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('decorative')}
              className="mb-2"
            >
              Декоративная
            </Button>
            <Button 
              variant={selectedCategory === 'garden' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('garden')}
              className="mb-2"
            >
              Садовая
            </Button>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{item.name}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{item.price}</span>
                    <Button>Заказать</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-secondary mb-4">Наши преимущества</h2>
            <p className="text-xl text-gray-600">Почему выбирают именно нас</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={advantage.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-secondary">{advantage.title}</h3>
                  <p className="text-gray-600">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certificates */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-secondary mb-8">Сертификаты качества</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="text-sm px-4 py-2">ГОСТ 17608-2017</Badge>
              <Badge variant="outline" className="text-sm px-4 py-2">ISO 9001:2015</Badge>
              <Badge variant="outline" className="text-sm px-4 py-2">Экологический сертификат</Badge>
              <Badge variant="outline" className="text-sm px-4 py-2">Сертификат соответствия ТР ТС</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-secondary mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-gray-600">Что говорят о нас наши клиенты</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="p-6">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div>
                      <h4 className="font-semibold text-secondary">{review.name}</h4>
                      <div className="flex items-center">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">"{review.text}"</p>
                  <p className="text-sm text-gray-400">{review.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-secondary mb-4">Контакты</h2>
            <p className="text-xl text-gray-600">Свяжитесь с нами для консультации</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-secondary">Как с нами связаться</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon name="Phone" size={24} className="text-primary mr-4" />
                  <div>
                    <p className="font-semibold">+7 (495) 123-45-67</p>
                    <p className="text-gray-600">Звонки принимаем с 8:00 до 20:00</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" size={24} className="text-primary mr-4" />
                  <div>
                    <p className="font-semibold">info@plitkarpro.ru</p>
                    <p className="text-gray-600">Ответим в течение часа</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" size={24} className="text-primary mr-4" />
                  <div>
                    <p className="font-semibold">г. Москва, ул. Строительная, 15</p>
                    <p className="text-gray-600">Работаем ежедневно с 9:00 до 18:00</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4 text-secondary">Гарантийные обязательства</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <Icon name="CheckCircle" size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    25 лет гарантии на всю продукцию
                  </li>
                  <li className="flex items-start">
                    <Icon name="CheckCircle" size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    Бесплатная замена при заводском браке
                  </li>
                  <li className="flex items-start">
                    <Icon name="CheckCircle" size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    Гарантия на укладочные работы - 3 года
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="p-6">
                <CardHeader>
                  <CardTitle>Оставьте заявку</CardTitle>
                  <CardDescription>Мы свяжемся с вами в течение 15 минут</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <Input placeholder="Ваше имя" />
                    <Input placeholder="Телефон" type="tel" />
                    <Input placeholder="Email" type="email" />
                    <Textarea placeholder="Комментарий или вопрос" />
                    <Button className="w-full" size="lg">
                      <Icon name="Send" size={20} className="mr-2" />
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Brick" size={32} className="text-primary" />
                <h3 className="text-2xl font-bold">ПлиткаПро</h3>
              </div>
              <p className="text-white/80">
                Качественная тротуарная плитка с гарантией 25 лет. 
                Профессиональная укладка и доставка по всему региону.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2">
                <li><a href="#catalog" className="text-white/80 hover:text-white transition-colors">Каталог</a></li>
                <li><a href="#advantages" className="text-white/80 hover:text-white transition-colors">Преимущества</a></li>
                <li><a href="#reviews" className="text-white/80 hover:text-white transition-colors">Отзывы</a></li>
                <li><a href="#contacts" className="text-white/80 hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-white/80">
                <p>+7 (495) 123-45-67</p>
                <p>info@plitkarpro.ru</p>
                <p>г. Москва, ул. Строительная, 15</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-white/60">© 2024 ПлиткаПро. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;