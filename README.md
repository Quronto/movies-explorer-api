# Дипломный проект: Бэкенд приложения о фильмах

Добро пожаловать в репозиторий дипломного проекта! Этот проект представляет собой серверную часть приложения, которая обеспечивает функциональность управления информацией о фильмах и пользователях.

## О проекте

Целью данного дипломного проекта является создание бэкенд-части для веб-приложения, позволяющего пользователям просматривать информацию о фильмах и добавлять любимые фильмы.

## Основные функции

1. **Регистрация и аутентификация**: Пользователи могут создать учетную запись и войти в систему. Для аутентификации используется токен.

2. **Просмотр списка фильмов**: Пользователи могут просматривать список доступных фильмов с основной информацией о них.

## Технологии и инструменты

- **Node JS**
- **MongoDB**
- **MongoDB**


## Endpoints

* __GET /users/me__  - Возвращает информацию о пользователе (email и имя).

* __PATCH /users/me__ - Обновляет информацию о пользователе (email и имя).

* __POST /signup__ - Создаёт пользователя с переданными в теле
    * email
    * password
    * name
* __POST /signin__ - Проверяет переданные в теле почту и пароль и возвращает __JWT__

* __GET /movies__ - Возвращает все сохранённые текущим пользователем фильмы.

* __POST /movies__ - Создаёт фильм с переданными в теле
  * country
  * director
  * duration
  * year
  * description
  * image
  * trailer
  * nameRU
  * nameEN
  * thumbnail
  * movieId

* __DELETE /movies/id__ - Удаляет сохранённый фильм по id.

## Ссылка на проект

IP 84.201.157.228

Backend https://api.movies.quronto.nomoredomainsicu.ru
