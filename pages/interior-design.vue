<template>
  <div class="main">
    <pre-loader :rolling-top="rollingTop" :rolling-right="rollingRight" />
    <div v-show="rollingTop">
      <navigation-bar />
      <b-container fluid class="margin-all-100 back-img">
        <b-row class="">
        </b-row>
        <b-row align-h="center">
          <b-col xl="11" lg="11" md="10" sm="8" offset-xl="1" offset-lg="1" offset-md="2" offset-sm="0" align-self="center" class="height-79 d-flex align-items-center">
            <div class="top-title-container">
          <span class="top-title-text">дизайн дома<br />вашей мечты</span>
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
      <b-row  align-h="center" class="padding-150">
        <b-col cols="3" class="font-weight-bold">01</b-col>
        <b-col cols="3" class="font-weight-bold">Услуга</b-col>
        <b-col cols="3" class="font-weight-bold">Дизайн интерьера</b-col>
      </b-row>
      <b-row align-h="center" class="padding-100">
        <b-col lg="3" sm="9" md="9" class="normal-text margin-50">
          Разработка дизайн-проекта
        </b-col>
        <b-col lg="6" sm="9" md="9">
          <span class="big-text margin-50">
            Засчет детального сбора информации и контроляс нашей стороны, интерьер в результате получится таким, как Вы пожелаете
          </span>
          <b-row class="small-text mt-4">
            <b-col lg="6" sm="12" md="12" class="margin-50">
              Мы организуем строительный процесси освобождаем ваше время. Вы получаете проект "под ключ" и все проблемы ремонта вас не касаются. Вам нужно будет появиться на объекте только на приёме работ.
            </b-col>
            <b-col lg="6" sm="12" md="12" class="margin-50">
              Вместо регулярных посещений объекта, вы можете заниматься своими любимыми делами или работой — всё ведение стройки мы берём на себя
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row  align-h="center" class="padding-150">
        <b-col cols="3" class="font-weight-bold">02</b-col>
        <b-col cols="3" class="font-weight-bold">Как мы работаем</b-col>
        <b-col cols="3" class="font-weight-bold">Этапы работ</b-col>
      </b-row>
      <b-row align-h="center" class="padding-150">
          <b-col cols="9" class="font-weight-bold">
            <b-row align-h="start">
               <b-col xl="4" lg="4" sm="5" md="10" class="mb-3">
                <div class="font-weight-bold mb-3">
                  01
                </div>
                <div class="normal-text mb-2">
                    <span>Техническое задание</span>
                </div>
                <div class="small-text padding-50">
                  Выясняем особенности вашего образа жизни и технические условия объекта. Это позволяет сделать проект без лишних переделок и экономит ваше время
                </div>
              </b-col>
              <b-col xl="4" lg="4" sm="5" md="10" class="mb-3">
                <div class="font-weight-bold mb-3">
                  02
                </div>
                <div class="normal-text mb-2">
                    <span>Планировочное решение</span>
                </div>
                <div class="small-text padding-50">
                  Разделяем на функциональные зоны помещения объекта, основываясь на его габаритах и ваших предпочтениях
                </div>
              </b-col>
              <b-col xl="4" lg="4" sm="5" md="10" class="mb-3">
                <div class="font-weight-bold mb-3">
                  03
                </div>
                <div class="normal-text mb-2">
                    <span>Коллажирование</span>
                </div>
                <div class="small-text padding-50">
                  Подготовим концепции интерьера: цветовое решение, мебель и материалы. Поедем с вами по магазинам, чтобы определить основную комплектацию
                </div>
              </b-col>
              <b-col xl="4" lg="4" sm="5" md="10" class="mb-3">
                <div class="font-weight-bold mb-3">
                  04
                </div>
               <div class="normal-text mb-2">
                    <span>3D-Визуализация</span>
                </div>
                <div class="small-text padding-50">
                  Подготовим фотореалистичные изображения вашего будущего интерьера, чтобы Вы могли оценить сочетание цветов, материалов, мебели и декора
                </div>
              </b-col>
              <b-col xl="4" lg="4" sm="5" md="10" class="mb-3">
                <div class="font-weight-bold mb-3">
                  05
                </div>
                <div class="normal-text mb-2">
                    <span>Полный рабочий проект</span>
                </div>
                <div class="small-text padding-50">
                  Подготовим все чертежи, которые позволят точно подготовить смету для строителей, и минимизируют необходимость дополнительных работ
                </div>
              </b-col>
            </b-row>
          </b-col>
      </b-row>
      <b-row align-h="center" class="padding-150">
        <b-col cols="3" class="font-weight-bold">03</b-col>
        <b-col cols="3" class="font-weight-bold">Кое-что еще</b-col>
        <b-col cols="3" class="font-weight-bold">Дополнительные услуги</b-col>
      </b-row>
      <b-row align-h="center" class="padding-150">
          <b-col cols="9" class="font-weight-bold">
            <b-row>
               <b-col xl="4" lg="4" sm="5" md="10" class="mb-3">
                <div class="font-weight-bold mb-3">
                  01
                </div>
                 <div class="normal-text mb-2">
                    <span>Авторский надзор</span>
                </div>
                <div class="small-text padding-50">
                  4 раза в месяц приезжаем на объект и проверяем, чтобы рабочие и другие участники проекта четко следовали чертежам. Консультируем и даем пояснения
                </div>
              </b-col>
              <b-col xl="4" lg="4" sm="5" md="10" class="mb-3">
                <div class="font-weight-bold mb-3">
                  02
                </div>
                 <div class="normal-text mb-2">
                    <span>Комплектация объекта</span>
                </div>
                <div class="small-text padding-50">
                  Найдем подрядчиков и поставщиков. Организуем оплату и доставку товара. Консультируем по приемке и проверке товаров на объекте
                </div>
              </b-col>
              <b-col xl="4" lg="4" sm="5" md="10" class="mb-3">
                <div class="font-weight-bold mb-3">
                  03
                </div>
                 <div class="normal-text mb-2">
                    <span>Управление ремонтом</span>
                </div>
                <div class="small-text padding-50">
                  На объекте будет менеджер, который будет координировать и организовывать всех участников проекта
                </div>
              </b-col>
            </b-row>
          </b-col>
      </b-row>
      <b-row align-h="center" class="padding-150">
        <b-col cols="3" class="font-weight-bold">04</b-col>
        <b-col cols="3" class="font-weight-bold">Примеры работ</b-col>
        <b-col cols="3" class="font-weight-bold">Готовые проекты</b-col>
      </b-row>
      <b-row align-h="center" class="padding-150 pt-5">
          <b-col cols="9" class="font-weight-bold">
            <b-row cols-xl="3" cols-lg="3" cols-md="1" cols-sm="1">
              <template v-for="(item, index) of cards">
                <b-col class="mb-4" :key="index" v-on:click="cardContent=item">
                  <card-item
                    v-b-modal.modal-center
                    :title="item.title"
                    :description="item.description"
                    :price="item.price"
                    :image="item.image"
                  />
                </b-col>
              </template>
            </b-row>
          </b-col>
      </b-row>
      <b-row align-h="center" class="padding-150">
        <b-col cols="3" class="font-weight-bold">05</b-col>
        <b-col cols="3" class="font-weight-bold">Вопросы</b-col>
        <b-col cols="3" class="font-weight-bold">Свяжись с нами</b-col>
      </b-row>
      <b-row align-h="center" class="padding-150">
        <b-col cols="9">
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
import PreLoader from '../components/PreLoader';
import NavigationBar from '../components/NavigationBar';
import CardItem from '../components/CardItem.vue';
import ModalCenter from '../components/ModalCenter';
import FooterContainer from '../components/FooterContainer';

export default {
  components: {
    PreLoader,
    NavigationBar,
    FooterContainer,
    ModalCenter,
    CardItem
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
    background: url(../static/images/interior-design/title-img.png);
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
