# acronis-test-app

## Тестовое задание для Acronis

#### Основные особенности:

*   "Ленивая" подгрузка копонентов в зависимости от пути на роутере
*   Локализация с определением локали и "ленивой" подгрузкой ресурсов
*   Валидация пользователького ввода на форме
*   При использовании ElementUI используются только нужные компоненты - тем самым снижаем размер бандла
*   Реализована иммитация бекенда, который иногда выстреливает ошибки
*   Ошибки бекенда отображаются в виде локализованных сообщений
*   По заданию необходимо написать тесты на компоненты: сьют находится тут **src/components/todo/test/TodoItem.spec.js**

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
