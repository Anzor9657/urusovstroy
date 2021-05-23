<template>
  <div class="main">
    <pre-loader :rolling-top="rollingTop" :rolling-right="rollingRight" />
    <div v-show="rollingTop">
      <navigation-bar />
      <b-container fluid class="margin-all-100 back-img">
        <b-row class="">
        </b-row>
        <b-row align-h="center">
          <b-col xl="11" lg="11" md="10" sm="11" offset-xl="1" offset-lg="1" offset-md="2" offset-sm="0" align-self="center" class="height-79 d-flex align-items-center">
            <div class="top-title-container">
          <span class="top-title-text">воплотим в реальность<br />мебель вашей мечты</span>
        </div>
          </b-col>
          <b-col xl="3" lg="3" md="4" sm="8" offset-xl="9" offset-lg="9" offset-md="4" offset-sm="2" class="feedback">
            <a href="tel:89280807670">
              <span class="title-text" @mouseenter="showTopArrow = true" @mouseleave="showTopArrow = false">Связаться с нами</span>
              <b-icon v-if="showTopArrow" font-scale="1.5" rotate="90" animation="cylon" icon="arrow-up"></b-icon>
            </a>
            <span class="action">Заказать звонок сейчас</span>
          </b-col>
          <b-col xl="0" lg="0" md="4" sm="2" class="feedback">
          </b-col>
        </b-row>
      </b-container>
      <b-row  align-h="center" class="padding-100">
        <b-col xl="9" lg="9" sm="10" md="10">
          <b-row align-h="start">
            <b-col xl="4" lg="4" sm="4" md="4" class="font-weight-bold">01</b-col>
            <b-col xl="4" lg="4" sm="8" md="4" class="font-weight-bold">Услуга</b-col>
            <b-col xl="4" lg="4" sm="6" md="4" class="font-weight-bold d-xl-block d-lg-block d-md-block d-sm-none">Мебель на заказ</b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row align-h="center" class="padding-100">
        <b-col xl="3" lg="3" sm="10" md="10" class="normal-text margin-50">
          Корпусная мебель на заказ
        </b-col>
        <b-col xl="6" lg="6" sm="10" md="10">
          <span class="big-text margin-50">
            Мы создадим для вас корпусную мебель, которая идеально впишется в ваше пространство и сделает его стильным, комфортным и эргономичным.
          </span>
          <b-row class="small-text mt-4">
            <b-col lg="6" sm="12" md="12" class="margin-50">
              Сделаем дизайн-проект, поможем с выбором материалов и механизмов, изготовим. У нас можно заказать мебель из любых материалов: ЛДСП, МДФ, массив и другое.
            </b-col>
            <b-col lg="6" sm="12" md="12" class="margin-50">
              Вы можете заказать у нас мебель для кухни, шкафы с фасадами МДФ, гардеробные, мебель в детскую комнату, рабочие зоны, стеллажи, мебель в санузлы.
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row  align-h="center" class="padding-100">
        <b-col xl="9" lg="9" sm="10" md="10">
          <b-row align-h="start">
            <b-col xl="4" lg="4" sm="4" md="4" class="font-weight-bold">02</b-col>
            <b-col xl="4" lg="4" sm="8" md="4" class="font-weight-bold">Как мы работаем</b-col>
            <b-col xl="4" lg="4" sm="6" md="4" class="font-weight-bold d-xl-block d-lg-block d-md-block d-sm-none">Этапы работ</b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row align-h="center" class="padding-150">
          <b-col xl="9" lg="9" sm="10" md="10" class="font-weight-bold">
            <b-row align-h="start">
               <b-col xl="4" lg="4" sm="12" md="12" class="mb-3">
                <div class="font-weight-bold mb-3">
                  01
                </div>
                <div class="normal-text mb-2">
                    <span>Получение заказа</span>
                </div>
                <div class="small-text padding-50">
                  Вы присылаете на нашу почту запрос с размерами и фото помещения, где будет установлена мебель; пример мебели, которая вам нравится; свой номер телефона, для обсуждения технических моментов                </div>
              </b-col>
              <b-col xl="4" lg="4" sm="12" md="12" class="mb-3">
                <div class="font-weight-bold mb-3">
                  02
                </div>
                <div class="normal-text mb-2">
                    <span>Обработка заявки</span>
                </div>
                <div class="small-text padding-50">
                  Дизайнеры обсуждают с Вами все нюансы, делают макет, просчет и подбирают материалы. Мы приглашаем вас в нашу студию, чтобы вы смогли посмотреть образцы, подобрать цвет, фактуру и фурнитуру будущей мебели 
                </div>
              </b-col>
              <b-col xl="4" lg="4" sm="12" md="12" class="mb-3">
                <div class="font-weight-bold mb-3">
                  03
                </div>
                <div class="normal-text mb-2">
                    <span>Замеры на месте</span>
                </div>
                <div class="small-text padding-50">
                  К вам приезжает замерщик и делает точный замеры
                </div>
              </b-col>
              <b-col xl="4" lg="4" sm="12" md="12" class="mb-3">
                <div class="font-weight-bold mb-3">
                  04
                </div>
               <div class="normal-text mb-2">
                    <span>Подготовка документов</span>
                </div>
                <div class="small-text padding-50">
                  Все согласовываем, подготавливаем договоры, эскизы и спецификации
                </div>
              </b-col>
              <b-col xl="4" lg="4" sm="12" md="12" class="mb-3">
                <div class="font-weight-bold mb-3">
                  05
                </div>
                <div class="normal-text mb-2">
                    <span>Запуск производства</span>
                </div>
                <div class="small-text padding-50">
                  Выставляем вам счет, вносим предоплату по реквизитам и запускаем все в работу
                </div>
              </b-col>
              <b-col xl="4" lg="4" sm="12" md="12" class="mb-3">
                <div class="font-weight-bold mb-3">
                  06
                </div>
                <div class="normal-text mb-2">
                    <span>Установка мебели</span>
                </div>
                <div class="small-text padding-50">
                  За сутки до готовности вашего заказа, с вами созванивается отдел доставки и договаривается о дате и времени проведения работ                </div>
              </b-col>
            </b-row>
          </b-col>
      </b-row>
      <b-row  align-h="center" class="padding-100">
        <b-col xl="9" lg="9" sm="10" md="10">
          <b-row align-h="start">
            <b-col xl="4" lg="4" sm="4" md="4" class="font-weight-bold">03</b-col>
            <b-col xl="4" lg="4" sm="8" md="4" class="font-weight-bold">Вопросы</b-col>
            <b-col xl="4" lg="4" sm="6" md="4" class="font-weight-bold d-xl-block d-lg-block d-md-block d-sm-none">Свяжись с нами</b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row align-h="center" class="padding-150">
        <b-col xl="9" lg="9" sm="10" md="10">
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
    <modal-center :content="cardContent" />
  </div>
</template>
<script>
import PreLoader from "../components/PreLoader";
import NavigationBar from "../components/NavigationBar";
import CardItem from '../components/CardItem.vue';
import ModalCenter from '../components/ModalCenter';
import FooterContainer from "../components/FooterContainer";

export default {
  components: {
    PreLoader,
    NavigationBar,
    CardItem,
    ModalCenter,
    FooterContainer
  },
  layout: 'default',
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
  data () {
    return {
      showTopArrow: false,
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      cards: [
        { title: 'Название проекта 1' },
        { title: 'Название проекта 2' },
        { title: 'Название проекта 3' },
        { title: 'Название проекта 4' },
        { title: 'Название проекта 5' },
        { title: 'Название проекта 6' }
      ],
      cardContent: null
    }
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
<style lang="scss" scoped>
.main {
  width: 100%;
  overflow: hidden;
  .back-img {
    background: url(../static/images/cabinet-furniture/title-img.jpeg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100vh;
  }
}
.top-title-container {
  padding-top: 150px;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  display: flex;
  flex-direction: column;
  color: #fff;
}
.feedback {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 21vh;
  background-color: #fff;
}
.feedback a {
  color: #000;
}
</style>
