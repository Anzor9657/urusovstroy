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
          <span class="top-title-text">комплексный ремонт</span>
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
            <b-col xl="4" lg="4" sm="6" md="4" class="font-weight-bold d-xl-block d-lg-block d-md-block d-sm-none">Ремонт</b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row align-h="center" class="padding-100">
        <b-col xl="3" lg="3" sm="10" md="10" class="normal-text margin-50">
          Ремонт частных домов и квартир
        </b-col>
        <b-col xl="6" lg="6" sm="10" md="10">
          <span class="big-text margin-50">
            Методика, по которой мы выполняем ремонт, позволяет получить в результате дом вашей мечты и избежать лишних переделок и затрат.
          </span>
          <b-row class="small-text mt-4">
            <b-col xl="6" lg="6" sm="12" md="12" class="margin-50">
              Соотношение цены и качества является очень важным аспектом. Мы ищем решения, которые сэкономят деньги заказчику без потери качества. Именно за счет этого мы сохраняем деньги вам и делаем дизайн-проект, стоимость которого находится в допустимых рамках бюджета.
            </b-col>
            <b-col xl="6" lg="6" sm="12" md="12" class="margin-50">
              Помимо этого, добиваемся того, чтобы материалы, мебель и декор внутри частного дома были натуральные, интерьер смотрелся дорого, а цена при этом не была заоблачной.
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row align-h="center" class="padding-100">
        <b-col xl="9" lg="9" sm="10" md="10">
          <b-row align-h="start">
            <b-col xl="4" lg="4" sm="4" md="4" class="font-weight-bold">02</b-col>
            <b-col xl="4" lg="4" sm="8" md="4" class="font-weight-bold">Как мы работаем</b-col>
            <b-col xl="4" lg="4" sm="6" md="4" class="font-weight-bold d-xl-block d-lg-block d-md-block d-sm-none">Этапы ремонта</b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row align-h="center" class="padding-150">  
        <b-col xl="4" lg="4" sm="10" md="10" offset-xl="1" offset-lg="1" class="font-weight-bold">
          <b-row>
            <b-col class="mb-3">
              <div class="normal-text mb-2">
                Черновой (инженерный) ремонт
              </div>
              <div class="small-text padding-50">
                Монтаж стен, штукатурка, стяжка, электромонтаж, монтаж отопления, водоснабжения и канализации
              </div>
            </b-col>
            <b-col cols="10" class="mb-3">
              <div class="normal-text mb-2">
                Предчистовые и чистовые работы
              </div>
              <div class="small-text padding-50">
                Короба из ГКЛ, подготовка стен к покраске и поклейке обоев. Покраска, поклека карнизов, плинтусов, напольного покрытия, установка дверей, декор
              </div>
            </b-col>
          </b-row>
        </b-col>
        <b-col xl="5" lg="5" sm="10" md="10" offset-xl="1" offset-lg="1" class="font-weight-bold">
          <b-img src="../static/images/complex/02-image.jpeg" class="w-100" alt="person image" />
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
            Хотите начать ремонт с нами?
            <br />
            Мы всегда рады вам помочь!
          </div>
          <div class="normal-text underline pointer" v-b-modal.modal-send>
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
      showTopArrow: false
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
    background: url(../static/images/complex/title-img.jpeg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100vh;
  }
}
.top-title-container {
  padding-top: 170px;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  display: flex;
  flex-direction: column;
  color: #fff;
}
.links {
  a span {
    margin-right: 10px;
  }
  .b-icon {
    position: absolute;
    margin-top: 10px;
  }
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
