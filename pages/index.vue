<template>
  <div class="main">
    <pre-loader :rolling-top="rollingTop" :rolling-right="rollingRight" />
    <div>
      <navigation-bar />
      <div class="padding-100">
        <b-img
          src="../static/images/big_image.png"
          fluid
          alt="Responsive image"
        />
        <div class="top-title-container">
          <span class="name-title-text">urusovstroy</span>
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
<style lang="scss" scoped>
.main {
  width: 100%;
  overflow: hidden;
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
