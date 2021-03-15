<template>
  <div class="main">
    <b-navbar type="dark" variant="transparent" class="navbar">
      <NuxtLink to="/">
        <b-img src="../static/images/logo.svg" fluid alt="logo" />
      </NuxtLink>

      <b-navbar-toggle target="navbar-toggle-collapse">
        <b-img src="../static/images/navbar_icon.svg" fluid alt="navbar icon" />
      </b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="navbar-titles navbar-text">
          <NuxtLink to="/">дизайн интерьера</NuxtLink>
          <NuxtLink to="/architectural-design"
            >архитектурное проектирование</NuxtLink
          >
          <NuxtLink to="/construction">строительство</NuxtLink>
          <NuxtLink to="/">ремонт</NuxtLink>
          <NuxtLink to="/">корпусная мебель</NuxtLink>
          <NuxtLink to="/">интерьерный салон</NuxtLink>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto"></b-navbar-nav>
      </b-collapse>
      <b-img src="../static/images/navbar_icon.svg" fluid alt="navbar icon" />
    </b-navbar>
    <div class="padding-100">
      <b-img
        src="../static/images/architecturial-design/title-img.png"
        fluid
        alt="Responsive image"
      />
      <div class="top-title-container">
        <span class="top-title"> Проект дома <br />европейского уровня </span>
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
        От первых эскизов до новоселья вместе с вами мы создадим современный дом
        европейского уровня
        <b-row class="mt-4">
          <b-col class="small-text text-gray">
            Разработаем архитектурный проект и планировку дома. Спроектируем дом
            индивидуально для вас и вашей семьи
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
              Разработаем планировочное решение совместно  с архитектурой.
              Проектируем дом, основываясь  на особенностях вашего быта и ваших
              пожеланиях
            </div>
          </b-col>
          <b-col cols="12" class="mr-auto">
            <div class="normal-text mb-2">
              Рабочий проект
            </div>
            <div class="small-text padding-50">
              Подготовим полный набор чертежей, необходимый для воплощения
              проекта вашего дачного дома  или дома для постоянного проживания
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
              действительности здание соответствовало созданным 3D-визуализациям
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
    <b-row class="footer big-padding gray-small-text-500">
      <b-col cols="3">
        <p class="title-text text-black">Карта сайта</p>
        <p>Главная</p>
        <p>Наша команда</p>
        <p>Дизайн интерьера</p>
        <p>Проектирование</p>
        <p>Строительство</p>
        <p>Ремонт</p>
        <p>Корпусная мебель</p>
        <p>Интерьерный салон</p>
      </b-col>
      <b-col cols="3">
        <p class="title-text text-black">Мы в соцсетях</p>
        <p>Instagram</p>
        <p>YouTube</p>
      </b-col>
      <b-col cols="6" class="text-right">
        <div class="d-flex flex-column justify-content-between h-100">
          <div>
            <p>8 (928) 719-66-38</p>
            <p>Улица Ахохова, 183, Нальчик</p>
            <p>urusov-stroy@gmail.com</p>
          </div>
          <div>
            <p class="footer-text text-black">URUSOVSTROY 2021</p>
            <p>Made by DOT.</p>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
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
      rendering: process.server ? "server" : "client"
    };
  }
};
</script>
<style scoped>
.main {
  width: 100%;
  overflow: hidden;
}
.navbar {
  position: absolute;
  width: 85vw;
  top: 0;
  margin: 60px 150px;
}
.navbar-titles {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0 80px;
  width: 100%;
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
.top-title {
  font-weight: 400;
  font-size: 4rem;
  line-height: 150%;
  letter-spacing: 0.4rem;
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
.navbar-text {
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25rem;
  text-transform: uppercase;
  color: #fff;
}
.action-text {
  font-weight: 600;
  font-size: 0.8125rem;
  line-height: 1.25rem;
  letter-spacing: 0.02rem;
  text-transform: uppercase;
  color: #605f5f;
}
.title-text {
  font-size: 1.4375rem;
  font-weight: 500;
}
.big-text {
  font-weight: 600;
  font-size: 2.25rem;
  line-height: 160%;
}
.title-text {
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 3.75rem;
}
.normal-text {
  font-weight: 600;
  font-size: 1.75rem;
  line-height: 2.875rem;
}
.small-text {
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 2.0625rem;
}
.gray-big-text {
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 2rem;
  color: #adadad;
}
.gray-small-text {
  font-weight: 600;
  font-size: 0.8125rem;
  line-height: 1.25rem;
  letter-spacing: 0.02rem;
  text-transform: uppercase;
  color: #6d6d6d;
}
.gray-small-text-500 {
  font-weight: 500;
  font-size: 0.8125rem;
  line-height: 1.25rem;
  letter-spacing: 0.02rem;
  text-transform: uppercase;
  color: #6d6d6d;
}
.footer-text {
  font-family: "EurostyleLTStd";
  font-style: normal;
  font-weight: normal;
  font-size: 1.875rem;
  line-height: 3.375rem;
}
.big-padding {
  padding: 150px;
}
.padding-50 {
  padding-bottom: 50px;
}
.padding-100 {
  padding-bottom: 100px;
}
.padding-150 {
  padding-bottom: 150px;
}
.text-black {
  color: #000;
}
.text-gray {
  color: #6d6d6d;
}
.underline {
  width: fit-content;
  border-bottom: 2px solid;
  padding-bottom: 5px;
}
.footer {
  border-top: 1px solid #e5e5e5;
  text-transform: none;
}
.footer p {
  margin-bottom: 14px;
}
.footer p.footer-text {
  margin-bottom: 0;
}
</style>
