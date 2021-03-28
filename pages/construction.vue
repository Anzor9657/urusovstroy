<template>
  <div class="main">
    <pre-loader :rolling-top="rollingTop" :rolling-right="rollingRight" />
    <div v-show="rollingTop">
      <navigation-bar />
      <div class="padding-100">
        <b-img
          src="../static/images/construction/title-img.png"
          fluid
          alt="Responsive image"
        />
        <div class="top-title-container">
          <span class="top-title-text">Строительство домов <br />под ключ</span>
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
        <b-col class="font-weight-bold">Строительство</b-col>
      </b-row>
      <b-row align-h="center" class="padding-100">
        <b-col cols="3" class="big-text">
          Строительство
        </b-col>
        <b-col cols="6" class="title-text">
          Наша компания производит полный цикл работ, связанных со
          строительством домов в Нальчике. С нашей помощью вы станете счастливым
          собственником частного дома, который простоит несколько веков.
          <b-row class="mt-4">
            <b-col class="small-text text-gray">
              Проект может быть реализован как за меньшую сумму, так и за
              большую. Нужно заранее понимать свой бюджет, определить его для
              нас и мы сделаем проект, комплектацию так, чтобы этих денег
              хватило
            </b-col>
            <b-col class="small-text text-gray">
              Свои специалисты для каждого из этапов работ. От дизайна и проекта
              до строительства и отделки. Строим строго с соблюдением СНИП и
              ГОСТ. Гарантия на долгие годы, благодаря комплексному подходу.
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row class="padding-150 text-center">
        <b-col class="font-weight-bold">02</b-col>
        <b-col class="font-weight-bold">Как мы работаем</b-col>
        <b-col class="font-weight-bold">Этапы строительства</b-col>
      </b-row>
      <b-row align-h="center" class="padding-150">
        <b-col cols="6" offset="1">
          <b-row class="padding-100">
            <b-col cols="5" class="mr-auto">
              <div class="font-weight-bold mb-3">
                01
              </div>
              <div class="normal-text mb-2">
                Подбор земельного участка
              </div>
              <div class="small-text padding-50">
                Подберем земельный участок с лучшими комуникациями, удобным
                подъездом к объекту и проверим чистоту документов
              </div>
            </b-col>
            <b-col cols="5" class="mr-auto">
              <div class="font-weight-bold mb-3">
                02
              </div>
              <div class="normal-text mb-2">
                Топосъемка
              </div>
              <div class="small-text padding-50">
                Оформим все разрешения на строительство как и дома, так и
                инженерных сооружений (свет, вода, газ)
              </div>
            </b-col>
            <b-col cols="5" class="mr-auto">
              <div class="font-weight-bold mb-3">
                03
              </div>
              <div class="normal-text mb-2">
                Геология
              </div>
              <div class="small-text padding-50">
                Оценим условия территории и изучим почву, эти важные данные
                используем для возведения фундамента
              </div>
            </b-col>
            <b-col cols="5" class="mr-auto">
              <div class="font-weight-bold mb-3">
                04
              </div>
              <div class="normal-text mb-2">
                Первичная посадка объекта
              </div>
              <div class="small-text padding-50">
                На участке привяжим оси здания к определенным ориентирам и
                составим акт для передачи подрядным организациям
              </div>
            </b-col>
            <b-col cols="5" class="mr-auto">
              <div class="font-weight-bold mb-3">
                05
              </div>
              <div class="normal-text mb-2">
                Эскиз на проект
              </div>
              <div class="small-text padding-50">
                Разработаем концепцию здания, четко определим технические
                характеристики объекта и выберем стиль оформления
              </div>
            </b-col>
            <b-col cols="5" class="mr-auto">
              <div class="font-weight-bold mb-3">
                06
              </div>
              <div class="normal-text mb-2">
                Планировка
              </div>
              <div class="small-text padding-50">
                Сделаем планировку дома, на основании проекта дома заключим
                договорподряда со строителями
              </div>
            </b-col>
            <b-col cols="5" class="mr-auto">
              <div class="font-weight-bold mb-3">
                07
              </div>
              <div class="normal-text mb-2">
                Уведомление о начале строительства
              </div>
              <div class="small-text padding-50">
                Соберем все необходимые документы и зарегестрируем в МФЦ.
                Подберем бригаду и начнем строить
              </div>
            </b-col>
            <b-col cols="5" class="mr-auto pt-5">
              <span class="action-text mb-2">
                Хотите начать ремонт?
              </span>
              <div class="normal-text underline pt-5">
                Начать работать с нами
              </div>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="5">
          <b-img
            src="../static/images/construction/02-image.png"
            fluid
            alt="02_image"
          />
        </b-col>
      </b-row>
      <b-row class="padding-150 text-center">
        <b-col class="font-weight-bold">03</b-col>
        <b-col class="font-weight-bold">Примеры работ</b-col>
        <b-col class="font-weight-bold">Построенные сооружения</b-col>
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
    title: "Urusov stroy",
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
    }, 3000);
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
  letter-spacing: 0.1rem;
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
