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
          <span class="top-title-text">интерьерный салон<br />«decorator»</span>
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
            <b-col xl="4" lg="4" sm="8" md="4" class="font-weight-bold">Чем занимаемся</b-col>
            <b-col xl="4" lg="4" sm="6" md="4" class="font-weight-bold d-xl-block d-lg-block d-md-block d-sm-none">О салоне</b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row align-h="center" class="padding-100">
        <b-col xl="3" lg="3" sm="10" md="10" class="normal-text margin-50">
          Декоратор
        </b-col>
        <b-col xl="6" lg="6" sm="10" md="10">
          <span class="big-text margin-50">
            Прямой поставщик эксклюзивных отделочных материалов от ведущих европейских производителей
          </span>
          <b-row class="small-text mt-4">
            <b-col lg="6" sm="12" md="12" class="margin-50">
              Мы осуществляем подбор материалов и комплектацию дизайн-проектов. Поставка и продажа напрямую без наценок
            </b-col>
            <b-col lg="6" sm="12" md="12" class="margin-50">
              Сотрудничаем как с розничными клиентами, так и с архитекторами, дизайнерамии прорабами
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row  align-h="center" class="padding-100">
        <b-col xl="9" lg="9" sm="10" md="10">
          <b-row align-h="start">
            <b-col xl="4" lg="4" sm="4" md="4" class="font-weight-bold">02</b-col>
            <b-col xl="4" lg="4" sm="8" md="4" class="font-weight-bold">Что мы поставляем</b-col>
            <b-col xl="4" lg="4" sm="6" md="4" class="font-weight-bold d-xl-block d-lg-block d-md-block d-sm-none">Ассортимент</b-col>
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
                    <span>Керамогранит</span>
                </div>
                <div class="small-text padding-50">
                  Керамическая плитка и керамический гранит, мозаика и декоративные элементы
                </div>
              </b-col>
              <b-col xl="4" lg="4" sm="12" md="12" class="mb-3">
                <div class="font-weight-bold mb-3">
                  02
                </div>
                <div class="normal-text mb-2">
                    <span>Электрика и освещение</span>
                </div>
                <div class="small-text padding-50">
                  Трековое освещение, интерьерное и уличное освещение, промышленное освещение, лампы, люстры и светильники
                </div>
              </b-col>
              <b-col xl="4" lg="4" sm="12" md="12" class="mb-3">
                <div class="font-weight-bold mb-3">
                  03
                </div>
                <div class="normal-text mb-2">
                    <span>Напольное покрытие</span>
                </div>
                <div class="small-text padding-50">
                  Ударопрочный, влагостойкий ламинат; винил, паркетная доска
                </div>
              </b-col>
              <b-col xl="4" lg="4" sm="12" md="12" class="mb-3">
                <div class="font-weight-bold mb-3">
                  04
                </div>
               <div class="normal-text mb-2">
                    <span>Системы отопления</span>
                </div>
                <div class="small-text padding-50">
                  Стальные радиаторы, внутрипольные конвекторы, полотенцесушители, батареи, котельное оборудование
                </div>
              </b-col>
              <b-col xl="4" lg="4" sm="12" md="12" class="mb-3">
                <div class="font-weight-bold mb-3">
                  05
                </div>
                <div class="normal-text mb-2">
                    <span>Чистовая и инженерная сантехника</span>
                </div>
                <div class="small-text padding-50">
                  Сантехника, инсталляции, подвесные унитазы, система защиты от протечек
                </div>
              </b-col>
              <b-col xl="4" lg="4" sm="12" md="12" class="mb-3">
                <div class="font-weight-bold mb-3">
                  06
                </div>
                <div class="normal-text mb-2">
                    <span>Краски</span>
                </div>
                <div class="small-text padding-50">
                  Краски для наружных и внутренних работ, моющаяся краска на водной и акриловой основе, декоративная штукатурка
                </div>
              </b-col>
              <b-col xl="4" lg="4" sm="12" md="12" class="mb-3">
                <div class="font-weight-bold mb-3">
                  07
                </div>
                <div class="normal-text mb-2">
                    <span>Обои</span>
                </div>
                <div class="small-text">
                  Бесшовные фрески и фотообои на флизелиновом полотне, дизайнерские обои от ведущих мировых брендов
                </div>
              </b-col>
              <b-col xl="4" lg="4" sm="12" md="12" class="mb-3">
                <div class="font-weight-bold mb-3">
                  08
                </div>
                <div class="normal-text mb-2">
                    <span>Карнизы, молдинги, плинтусы</span>
                </div>
                <div class="small-text">
                  Карнизы, плинтусы, молдинги и 3D панелииз полиуретана и дюрополимера, клеи
                </div>
              </b-col>
            </b-row>
          </b-col>
      </b-row>
      <b-row  align-h="center" class="padding-100">
        <b-col xl="9" lg="9" sm="10" md="10">
          <b-row align-h="start">
            <b-col xl="4" lg="4" sm="4" md="4" class="font-weight-bold">03</b-col>
            <b-col xl="4" lg="4" sm="8" md="4" class="font-weight-bold">Наши партнеры</b-col>
            <b-col xl="4" lg="4" sm="6" md="4" class="font-weight-bold d-xl-block d-lg-block d-md-block d-sm-none">Производители</b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row align-h="center" class="padding-150">
          <b-col xl="9" lg="9" sm="10" md="10" class="font-weight-bold">
            <b-row>
              <b-col xl="4" lg="4" sm="12" md="12" class="mb-3">
                <b-img src="../static/images/salon/logo1.png" class="width-100" alt="card image" />
              </b-col>
              <b-col xl="4" lg="4" sm="12" md="12" class="mb-3">
                <b-img src="../static/images/salon/logo2.png" class="width-100" alt="card image" />
              </b-col>
              <b-col xl="4" lg="4" sm="12" md="12" class="mb-3">
                <b-img src="../static/images/salon/logo3.png" class="width-100" alt="card image" />
              </b-col>
              <b-col xl="4" lg="4" sm="12" md="12" class="mb-3">
                <b-img src="../static/images/salon/logo4.png" class="width-100" alt="card image" />
              </b-col>
              <b-col xl="4" lg="4" sm="12" md="12" class="mb-3">
                <b-img src="../static/images/salon/logo5.png" class="width-100" alt="card image" />
              </b-col>
              <b-col xl="4" lg="4" sm="12" md="12" class="mb-3">
                <b-img src="../static/images/salon/logo6.png" class="width-100" alt="card image" />
              </b-col>
              <b-col xl="4" lg="4" sm="12" md="12" class="mb-3">
                <b-img src="../static/images/salon/logo7.png" class="width-100" alt="card image" />
              </b-col>
              <b-col xl="4" lg="4" sm="12" md="12" class="mb-3">
                <b-img src="../static/images/salon/logo8.png" class="width-100" alt="card image" />
              </b-col>
              <b-col xl="4" lg="4" sm="12" md="12" class="mb-3">
                <b-img src="../static/images/salon/logo9.png" class="width-100" alt="card image" />
              </b-col>
            </b-row>
          </b-col>
      </b-row>
      <b-row  align-h="center" class="padding-100">
        <b-col xl="9" lg="9" sm="10" md="10">
          <b-row align-h="start">
            <b-col xl="4" lg="4" sm="4" md="4" class="font-weight-bold">04</b-col>
            <b-col xl="4" lg="4" sm="8" md="4" class="font-weight-bold">Вопросы</b-col>
            <b-col xl="4" lg="4" sm="6" md="4" class="font-weight-bold d-xl-block d-lg-block d-md-block d-sm-none">Свяжись с нами</b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row align-h="center" class="padding-150">
        <b-col xl="9" lg="9" sm="12" md="12">
          <div class="d-flex flex-column justify-content-between h-100">
            <div>
              <a href="tel:89287196638" class="gray-small-text-500"><p>Тел: 8 (928) 719-66-38</p></a>
              <p>Адрес: Нальчик, ул. Ахохова, 183</p>
              <p>E-mail: decorator_nalchik@mail.ru</p>
              <p>Inst: decorator_nalchik</p>
            </div>
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
    background: url(../static/images/salon/title-img.jpeg);
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
