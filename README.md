# Тестовое задание от Netlab

## [NetlabTest](https://jorianp.github.io/NetlabTest)

## Задание

Приложение на Angular 8. 

Роутниг: - “/” - рутовый роут - “/form” - роут c lazy-загрузкой на котором находится форма для заполнения 

State-менеджмент: - NGXS или NGRX 

При первой загрузке выводится сообщение - Форма пока не заполнена, После того, как пользователь заполнил форму и нажал на кнопку “отправить” - либо подсвечиваются поля не прошедшие валидацию, либо, в случае, если все заполнено верно, пользователя перебрасывает на рутовый роут, где вместо надписи “Форма пока не заполнена” выводятся поля формы и значения этих полей. Кнопка “заполнить форму” изменяется на “Изменить”, при нажатии на нее, пользователь переходит на роут /form/edit, где может изменить заполненные ранее данные:
```
Form data: 

ФИО: Иван Иванович
E-mail: info@mail.com
Тема: Тема 1

```

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.19.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Deploy to Gh-pages
Run `ng deploy`
