<template>
  <div :class="b()">
    <h2>Тестовое задание для Acronis</h2>
    <h4>Основные особенности:</h4>
    <ul>
      <li>
        "Ленивая" подгрузка копонентов в зависимости от пути на роутере
      </li>
      <li>
        Локализация с определением локали и "ленивой" подгрузкой ресурсов
      </li>
      <li>
        Валидация пользователького ввода на форме
      </li>
      <li>
        При использовании ElementUI используются только нужные компоненты - тем самым снижаем размер бандла
      </li>
      <li>
        Реализована иммитация бекенда, который иногда выстреливает ошибки
      </li>
      <li>
        Ошибки бекенда отображаются в виде локализованных сообщений
      </li>
      <li>
        По заданию необходимо написать тесты на компоненты: сьют находится тут <b>src/components/todo/test/TodoItem.spec.js</b>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'about-screen'
  }
</script>
<style lang="stylus">
  @import "~@/theme/variables.styl"

  .about-screen {
    width 100%;
    height 100%;
    padding 48px

    h2 {
      font-size 20px;
      margin-bottom 16px
      font-weight bold
      color $textColor
    }

    h4 {
      font-size 16px;
      line-height 24px
      margin-bottom 8px
    }

    ul {
      list-style inside
    }

    li {
      color $textColor
      padding 8px
    }

    b {
      font-weight bold;
    }
  }
</style>
