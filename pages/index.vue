<template>
  <div class="main">
    <div
      class="start d-flex align-items-center"
      :class="{
        'open-end': showSite
      }"
    >
      <span
        class="big-text trans-start"
        :class="{
          'trans-end': showAnime
        }"
      >
        <span class="top-title">urusovstroy</span><br />
        <span class="blink normal-text">
          Сайт в процессе разработки... <br />
          Некоторые функции недоступны
        </span>
      </span>
    </div>
    <div v-show="showSite">
      <b-navbar type="dark" variant="transparent" class="navbar">
        <NuxtLink to="/">
          <b-img src="../static/images/logo.svg" fluid alt="logo" />
        </NuxtLink>

        <b-navbar-toggle target="navbar-toggle-collapse">
          <template #default="{}">
            <b-img
              src="../static/images/navbar_icon.svg"
              fluid
              alt="navbar icon"
            />
          </template>
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
          src="../static/images/big_image.png"
          fluid
          alt="Responsive image"
        />
        <div class="top-title-container">
          <span class="top-title">urusovstroy</span>
          <span class="font-weight-500">от идеи до реализации</span>
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
        <b-col class="font-weight-bold">Кто мы</b-col>
        <b-col class="font-weight-bold">О компании</b-col>
      </b-row>
      <b-row align-h="center" class="padding-100">
        <b-col cols="3" class="normal-text">
          Команда профессионалов
        </b-col>
        <b-col cols="6" class="big-text">
          Амбициозная и уверенная в себе команда с четырехлетним успешным опытом
          реализации проектов разного уровня сложности
          <b-row class="small-text mt-4">
            <b-col>
              Мы удовлетворяем эстетические потребности наших клиентов,
              предлагая уникальную методику работы и высококлассный сервис. Мы
              берем на себя все заботы начиная с замысла до самого новоселья
            </b-col>
            <b-col>
              Больше всего в нашей работе мы заботимся о функциональности
              интерьера, стремясь создать максимально удобные условия для жизни.
              Наш успех предопределен ответственным подходом к работе всей нашей
              команды
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row align-h="center" align-v="center" class="padding-150">
        <b-col cols="5" class="font-weight-bold">
          <b-img src="../static/images/person.png" fluid alt="person image" />
        </b-col>
        <b-col cols="5" class="font-weight-bold big-padding">
          <div class="padding-50">
            <div class="big-text">
              Урусов Алим Русланович
            </div>
            <div class="gray-big-text">
              Основатель
            </div>
          </div>
          <div class="small-text padding-50">
            Каждый заказчик индивидуален и помимо стилевых предпочтений имеет
            особенности образа жизни. Поэтому, больше всего в нашей работе мы
            заостряем внимание на функциональности интерьера, стремясь создать
            максимально удобные и полезные условия для жизни.
          </div>
          <div class="small-text padding-50">
            Наш успех определяет наша эксклюзивность, качество услуг и
            ответственный подход к работе всей нашей команды единомышленников,
            разделяющих наши ценности.
          </div>
          <div class="gray-small-text padding-50">
            Хотите познакомиться со всеми?
          </div>
          <div class="normal-text underline">
            Сотрудники компании
          </div>
        </b-col>
      </b-row>
      <b-row class="padding-150 text-center">
        <b-col class="font-weight-bold">02</b-col>
        <b-col class="font-weight-bold">Что мы предлагаем</b-col>
        <b-col class="font-weight-bold">Наши услуги</b-col>
      </b-row>
      <b-row align-h="center" class="padding-150">
        <b-col cols="6" offset="1">
          <b-row class="padding-100">
            <b-col cols="5" class="mr-auto">
              <div class="font-weight-bold mb-3">
                01
              </div>
              <div class="normal-text mb-2">
                Дизайн интерьера
              </div>
              <div class="small-text padding-50">
                Выполняем комплексное проектирование коммерческих и жилых
                объектов с полным пакетом документов
              </div>
            </b-col>
            <b-col cols="5" class="mr-auto">
              <div class="font-weight-bold mb-3">
                02
              </div>
              <div class="normal-text mb-2">
                Проектирование
              </div>
              <div class="small-text padding-50">
                Выполняем комплексное проектирование коммерческих и жилых
                объектов с полным пакетом документов
              </div>
            </b-col>
            <b-col cols="5" class="mr-auto">
              <div class="font-weight-bold mb-3">
                03
              </div>
              <div class="normal-text mb-2">
                <NuxtLink class="text-black" to="/construction">
                  Строительство
                </NuxtLink>
              </div>
              <div class="small-text padding-50">
                Начиная от первого кирпича, заканчивая новосельем, мы построим
                дом европейского уровня
              </div>
            </b-col>
            <b-col cols="5" class="mr-auto">
              <div class="font-weight-bold mb-3">
                04
              </div>
              <div class="normal-text mb-2">
                Ремонт
              </div>
              <div class="small-text padding-50">
                Электрики, сантехники, плиточники, моляры. Лучшие специалисты в
                одной компании
              </div>
            </b-col>
            <b-col cols="5" class="mr-auto">
              <div class="font-weight-bold mb-3">
                05
              </div>
              <div class="normal-text mb-2">
                Корпусная мебель
              </div>
              <div class="small-text padding-50">
                Мы используем в наших проектах мебель, выполненную по
                индивидуальным эскизам
              </div>
            </b-col>
            <b-col cols="5" class="mr-auto">
              <div class="font-weight-bold mb-3">
                06
              </div>
              <div class="normal-text mb-2">
                Интерьерный салон
              </div>
              <div class="small-text padding-50">
                Эксклюзивные материалы дают нам возможность делать уникальный
                интерьер
              </div>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="5">
          <b-img src="../static/images/image_1.png" fluid alt="image_1" />
        </b-col>
      </b-row>
      <b-row class="padding-150 text-center">
        <b-col class="font-weight-bold">03</b-col>
        <b-col class="font-weight-bold">Почему мы</b-col>
        <b-col class="font-weight-bold">Факты о компании</b-col>
      </b-row>
      <b-row align-h="center" class="padding-150">
        <b-col cols="5" class="font-weight-bold">
          <b-img src="../static/images/image_2.png" fluid alt="image_2 image" />
        </b-col>
        <b-col cols="4" offset="1" class="font-weight-bold">
          <div class="padding-50">
            <div class="normal-text mb-2">
              Индивидуально разработанный интерьер
            </div>
            <div class="small-text">
              За счет детального сбора информации для каждого заказчика и
              составления подробного технического задания, интерьеры получаются
              удобными для повседневной жизни
            </div>
          </div>
          <div class="padding-50">
            <div class="normal-text mb-2">
              Понимание строительных технологий
            </div>
            <div class="small-text">
              Проектирование дизайн проекта идет с четким пониманием того, как
              идеи будут воплощены в реальной жизни
            </div>
          </div>
          <div class="padding-50">
            <div class="normal-text mb-2">
              Соотношение цены и качества
            </div>
            <div class="small-text">
              Во время проектирования, мы грамотно распределяем бюджет
              заказчика, чтобы получить наилучший результат
            </div>
          </div>
        </b-col>
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
  },
  data() {
    return {
      showAnime: false,
      showSite: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.showAnime = true;
    }, 1000);
    setTimeout(() => {
      this.showSite = true;
    }, 4000);
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
.open-end {
  transition: transform 1s;
  transform: translateY(-100vh);
}
.start {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: #000;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  color: #fff;
}
.trans-start {
  opacity: 0;
}
.trans-end {
  transition: opacity 0.7s, transform 1s;
  transform: translateX(34vw);
  opacity: 1;
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
  font-size: 4.75rem;
  font-family: "EurostyleLTStd";
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
.title-text {
  font-size: 1.4375rem;
  font-weight: 500;
}
.big-text {
  font-weight: 600;
  font-size: 2.25rem;
  line-height: 160%;
}
.normal-text {
  font-weight: 600;
  font-size: 1.75rem;
  line-height: 2.875rem;
}
.small-text {
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 200%;
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
.blink {
  animation-name: blinker;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(1, 0, 0, 1);
  animation-duration: 1s;
  -webkit-animation-name: blinker;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: cubic-bezier(1, 0, 0, 1);
  -webkit-animation-duration: 1s;
}
</style>
