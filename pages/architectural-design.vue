<template>
  <div class="main">
    <pre-loader :rolling-top="rollingTop" :rolling-right="rollingRight" />
    <div>
      <navigation-bar />
      <div class="padding-100">
        <b-img
          src="../static/images/architecturial-design/title-img.png"
          fluid
          alt="Responsive image"
        />
        <div class="top-title-container">
          <span class="top-title-text">
            Проект дома <br />европейского уровня
          </span>
        </div>
        <div class="feedback">
          <div class="d-flex flex-column">
            <a href="tel:89280807670">
              <span class="title-text">Связаться с нами</span>
            </a>
            <span class="action">Заказать звонок сейчас</span>
          </div>
        </div>
      </div>
      <b-row class="padding-150 text-center">
        <b-col class="font-weight-bold">01</b-col>
        <b-col class="font-weight-bold">Услуга</b-col>
        <b-col class="font-weight-bold">Архитектурное проектирование</b-col>
      </b-row>
      <b-row align-h="center" class="padding-100">
        <b-col cols="3" class="normal-text">
          Разработка архитектурного проекта
        </b-col>
        <b-col cols="6" class="big-text">
          От первых эскизов до новоселья вместе с вами мы создадим современный
          дом европейского уровня
          <b-row class="mt-4">
            <b-col class="small-text text-gray">
              Разработаем архитектурный проект и планировку дома. Спроектируем
              дом индивидуально для вас и вашей семьи
            </b-col>
            <b-col class="small-text text-gray">
              Наша команда будет сопровождать проект от первых эскизов до
              завершения отделки.
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row class="padding-150 text-center">
        <b-col class="font-weight-bold">02</b-col>
        <b-col class="font-weight-bold">Как мы работаем</b-col>
        <b-col class="font-weight-bold">Этапы работы</b-col>
      </b-row>
      <b-row align-h="center" class="padding-150">
        <b-col cols="5" offset="1">
          <b-img
            src="../static/images/architecturial-design/02-image.png"
            fluid
            alt="02_image"
          />
        </b-col>
        <b-col cols="4" offset="1">
          <b-row class="padding-100 h-100">
            <b-col cols="12" class="mr-auto">
              <div class="normal-text mb-2">
                Техническое задание
              </div>
              <div class="small-text padding-50">
                Для того, чтобы проект вашего частного дома и его планировка
                соответствовали вашему привычному быту, мы узнаем особенности
                вашей жизни
              </div>
            </b-col>
            <b-col cols="12" class="mr-auto">
              <div class="normal-text mb-2">
                Архитектурное проектирование
              </div>
              <div class="small-text padding-50">
                Разработаем планировочное решение совместно с архитектурой.
                Проектируем дом, основываясь на особенностях вашего быта и ваших
                пожеланиях
              </div>
            </b-col>
            <b-col cols="12" class="mr-auto">
              <div class="normal-text mb-2">
                Рабочий проект
              </div>
              <div class="small-text padding-50">
                Подготовим полный набор чертежей, необходимый для воплощения
                проекта вашего дачного дома или дома для постоянного проживания
              </div>
            </b-col>
            <b-col cols="12" class="mr-auto">
              <div class="normal-text mb-2">
                Спецификация
              </div>
              <div class="small-text padding-50">
                Подберем материалы и рассчитаем стоимость строительства
              </div>
            </b-col>
            <b-col cols="12" class="mr-auto">
              <div class="normal-text mb-2">
                Авторский надзор и управление строительством
              </div>
              <div class="small-text padding-50">
                Осуществим технический контроль и авторский надзор, чтобы в
                действительности здание соответствовало созданным
                3D-визуализациям
              </div>
            </b-col>
            <b-col cols="12" class="mr-auto action-text">
              стоимость каждого этапа расчитывается отдельно
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row class="padding-150 text-center">
        <b-col class="font-weight-bold">03</b-col>
        <b-col class="font-weight-bold">Примеры работ</b-col>
        <b-col class="font-weight-bold">Готовые проекты</b-col>
      </b-row>
      <b-row align-h="center padding-150">
        <b-img src="../static/images/default.png" fluid alt="02_image" />
      </b-row>
      <b-row class="padding-150 text-center">
        <b-col class="font-weight-bold">04</b-col>
        <b-col class="font-weight-bold">Вопросы</b-col>
        <b-col class="font-weight-bold">Свяжись с нами</b-col>
      </b-row>
      <b-row class="padding-150">
        <b-col cols="5" offset="2" class="mr-auto">
          <div class="big-text padding-50">
            Остались вопросы?
            <br />
            Или хотите связаться с нами?
            <br />
            Мы всегда рады вам помочь!
          </div>
          <div class="normal-text underline">
            Заказать звонок
          </div>
        </b-col>
      </b-row>
      <footer-container />
    </div>
  </div>
</template>
<script>
import PreLoader from "../components/PreLoader";
import NavigationBar from "../components/NavigationBar";
import FooterContainer from "../components/FooterContainer";

export default {
  components: {
    PreLoader,
    NavigationBar,
    FooterContainer
  },
  head: {
    title: "Home page",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Home page description"
      }
    ]
  },
  asyncData() {
    return {
      rollingRight: !process.server,
      rollingTop: !process.server
    };
  },
  mounted() {
    setTimeout(() => {
      this.rollingRight = true;
    }, 1000);
    setTimeout(() => {
      this.rollingTop = true;
    }, 4000);
  }
};
</script>
<style scoped>
.main {
  width: 100%;
  overflow: hidden;
}
a:hover {
  text-decoration: none;
}
.top-title-container {
  position: absolute;
  top: 20vw;
  left: 9vw;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  color: #fff;
  font-size: 2.25rem;
}

.feedback {
  position: absolute;
  top: 43vw;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33vw;
  height: 14vw;
  background-color: #fff;
}
.feedback div .action {
  font-size: 1.25rem;
  font-weight: 500;
  color: #adadad;
}
.feedback a {
  color: #000;
}
</style>
