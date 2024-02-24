# InNoHassle Website

> https://innohassle.ru

[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=one-zero-eight_InNoHassle-Website&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=one-zero-eight_InNoHassle-Website)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=one-zero-eight_InNoHassle-Website&metric=bugs)](https://sonarcloud.io/summary/new_code?id=one-zero-eight_InNoHassle-Website)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=one-zero-eight_InNoHassle-Website&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=one-zero-eight_InNoHassle-Website)

## Описание

В экосистеме InNoHassle множество сервисов для студентов Университета Иннополис.
К некоторым из них можно получить доступ с помощью вебсайта InNoHassle.

Сайт работает с API сервисов [InNoHassle-Events](https://github.com/one-zero-eight/InNoHassle-Events), [InNoHassle-MusicRoom](https://github.com/one-zero-eight/InNoHassle-MusicRoom).

### Сервисы

1. Schedule - Расписания
   - Просматривайте расписания всех академических групп, элективов, спортивных секций, клининга
   - Экспортируйте обновляемые расписания в приложение календаря на своих девайсах
   - Добавляйте нужные группы в избранное, чтобы увидеть их в личном кабинете
   - Скрывайте и отображайте группы в личном кабинете
   - Выбирайте формат отображения расписания - на день, на неделю или на месяц
2. Music room - Музыкальная комната
   - Просматривайте все брони музыкальной комнаты на отдельной странице
   - Просматривайте собственные бронирования в личном кабинете
3. Scholarship - Стипендия
   - Посчитайте свою стипендию, исходя из ожидаемых оценок или GPA
   - Рассчитайте, какие необходимы оценки для получения нужной стипендии
   - Узнайте подробную информацию о видах стипендии в Университете

### Возможности

- Вход в личный кабинет с помощью студенческого аккаунта
- Все релевантные учебные группы на одной странице в личном кабинете
- Офлайн доступ к сайту при плохом соединении
- Темная и светлая тема интерфейса

### Технологии

- Node.js, TypeScript
- React, Next.js (App router)
- Стили: TailwindCSS
- Запросы данных: Axios, TanStack Query

## Разработка

### Начало работы

- Установить Node.js 18+, npm
- Установить зависимости: `npm install`
- Скопировать файл переменных окружения: `cp .env.example .env.local`
- При необходимости изменить переменные окружения в файле `.env.local`
  - Не изменяйте ID трекеров, чтобы они не включались при разработке
- Настроить автоформатирование через Prettier, а также ESLint в своей IDE

При изменении типов в API запустите `npm run orval`, чтобы сгенерировать клиентские типы и функции.

### Development сервер

- Запустить сервер разработки: `npm run dev`
- Открыть в браузере: http://localhost:3000
  - Страница будет обновляться при изменении кода.

Чтобы использовать API прод сервера, нужно в браузере изменить у cookie `token` параметр SameSite (установить `None`).
Тогда браузер сможет использовать верный токен для обращения с локального сайта в API.

### Production сервер

- Собрать приложение: `npm run build`
- Запустить сервер: `npm run start`
- Открыть в браузере: http://localhost:3000

### Развертывание на сервере

Мы используем Docker с плагином Docker Compose для запуска вебсайта на серверах.

- Скопировать файл переменных окружения: `cp .env.example .env.local`
- Изменить переменные окружения в файле `.env.local`
- Установить Docker с Docker Compose
- Собрать образ Docker: `docker compose build`
  - Note: API server must be running (check URL in `.env.local` file)
    as Next.js will fetch all resources at build time.
- Запустить контейнер: `docker compose up -d`
- Открыть в браузере: http://localhost:3000

Вы можете настроить Nginx reverse proxy, чтобы добавить SSL сертификаты для https.
