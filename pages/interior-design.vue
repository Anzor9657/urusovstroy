<template>
  <div class="main">
    <pre-loader :rolling-top="rollingTop" :rolling-right="rollingRight" />
    <div v-show="rollingTop">
      <navigation-bar />
      <b-container fluid class="margin-all-100 back-img">
        <b-row align-h="center">
          <b-col xl="11" lg="11" md="10" sm="11" offset-xl="1" offset-lg="1" offset-md="2" offset-sm="0" align-self="center" class="height-79 d-flex align-items-center">
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
      <b-row  align-h="center" class="padding-100">
        <b-col xl="9" lg="9" sm="10" md="10">
          <b-row align-h="start">
            <b-col xl="4" lg="4" sm="4" md="4" class="font-weight-bold">01</b-col>
            <b-col xl="4" lg="4" sm="8" md="4" class="font-weight-bold">Услуга</b-col>
            <b-col xl="4" lg="4" sm="6" md="4" class="font-weight-bold d-xl-block d-lg-block d-md-block d-sm-none">Дизайн интерьера</b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row align-h="center" class="padding-100">
        <b-col xl="3" lg="3" sm="10" md="10" class="normal-text margin-50">
          Разработка дизайн-проекта
        </b-col>
        <b-col xl="6" lg="6" sm="10" md="10">
          <span class="big-text margin-50">
            Разработка дизайн-проекта поможет определиться с идеей, концепцией, формой и материалами, которые будут использоваться в вашем интерьере. 
          </span>
          <b-row class="small-text mt-4">
            <b-col lg="6" sm="12" md="12" class="margin-50">
              Мы организуем полный пакет документов, включающий в себя разные этапы проектирования, выполненные с архитектурным подходом.
            </b-col>
            <b-col lg="6" sm="12" md="12" class="margin-50">
              Это поможет вам организовать грамотный ремонт, избежать ошибок и лишних трат, а конечный результат получился таким, как и был задуман.   
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
      <b-row align-h="center" class="padding-50">
          <b-col xl="9" lg="9" sm="10" md="10" class="font-weight-bold">
            <b-row align-h="start">
               <b-col xl="4" lg="4" sm="12" md="12" class="mb-3">
                <div class="font-weight-bold mb-3">
                  01
                </div>
                <div class="normal-text mb-2">
                    <span>Техническое задание</span>
                </div>
                <div class="small-text padding-50">
                  Выясняем особенности вашего образа жизни и технические условия объекта. Это позволяет сделать проект индивидульным и креативным с минимальными правками.        
                </div>
              </b-col>
              <b-col xl="4" lg="4" sm="12" md="12" class="mb-3">
                <div class="font-weight-bold mb-3">
                  02
                </div>
                <div class="normal-text mb-2">
                    <span>Планировочное решение</span>
                </div>
                <div class="small-text padding-50">
                  Разрабатываем удобную и эргономически грамотную планировку с учетом габаритов помещения, основываясь на ваших пожеланиях.
                </div>
              </b-col>
              <b-col xl="4" lg="4" sm="12" md="12" class="mb-3">
                <div class="font-weight-bold mb-3">
                  03
                </div>
                <div class="normal-text mb-2">
                    <span>Коллажирование</span>
                </div>
                <div class="small-text padding-50">
                  Этап разработки основной идеи и концепции интерьера: цветовое решение, мебель и материалы. Так же выезд с вами в магазины для утверждения позиций. 
                </div>
              </b-col>
              <b-col xl="4" lg="4" sm="12" md="12" class="mb-3">
                <div class="font-weight-bold mb-3">
                  04
                </div>
               <div class="normal-text mb-2">
                    <span>3D-Визуализация</span>
                </div>
                <div class="small-text padding-50">
                  Построение фотореалистичных изображений вашего будущего интерьера, чтобы Вы могли оценить сочетание цветов, материалов, мебели и декора.
                </div>
              </b-col>
              <b-col xl="4" lg="4" sm="12" md="12" class="mb-3">
                <div class="font-weight-bold mb-3">
                  05
                </div>
                <div class="normal-text mb-2">
                    <span>Полный рабочий проект</span>
                </div>
                <div class="small-text padding-50">
                  Разработка полного пакета чертежей, который позволит точно и грамотно реализовать проекти минимизируют необходимость дополнительных работ.
                </div>
              </b-col>
              <b-col xl="4" lg="4" sm="12" md="12" class="mb-3">
                <div class="font-weight-bold mb-3">
                  06
                </div>
                <div class="normal-text mb-2">
                    <span>Спецификация</span>
                </div>
                <div class="small-text padding-50">
                  Подготовим комплект ведомостей, описываающей все материалы и элементы, необходимые для реализации рабочего раздела дизайн-проекта.
                </div>
              </b-col>
            </b-row>
          </b-col>
      </b-row>
      <b-row  align-h="center" class="padding-150">
        <b-col xl="9" lg="9" sm="10" md="10">
          <b-row align-h="start">
            <b-col xl="4" lg="4" sm="4" md="4" class="font-weight-bold">03</b-col>
            <b-col xl="4" lg="4" sm="8" md="4" class="font-weight-bold">Кое-что еще</b-col>
            <b-col xl="4" lg="4" sm="6" md="4" class="font-weight-bold d-xl-block d-lg-block d-md-block d-sm-none">Дополнительные услуги</b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row align-h="center" class="padding-100">
          <b-col xl="9" lg="9" sm="10" md="10" class="font-weight-bold">
            <b-row>
               <b-col xl="4" lg="4" sm="12" md="12" class="mb-3">
                <div class="font-weight-bold mb-3">
                  01
                </div>
                 <div class="normal-text mb-2">
                    <span>Авторский надзор</span>
                </div>
                <div class="small-text padding-50">
                  Выезд на объект 4 раза в месяц и надзор, позволяющий работе на объекте проходить правильно, быстро и без ненужных последствий. 
                </div>
              </b-col>
              <b-col xl="4" lg="4" sm="12" md="12" class="mb-3">
                <div class="font-weight-bold mb-3">
                  02
                </div>
                 <div class="normal-text mb-2">
                    <span>Комплектация объекта</span>
                </div>
                <div class="small-text padding-50">
                  Организуем поставку отделочных материалов, мебели и техники. Проследим за оплатой и доставкой товара.
                </div>
              </b-col>
              <b-col xl="4" lg="4" sm="12" md="12" class="mb-3">
                <div class="font-weight-bold mb-3">
                  03
                </div>
                 <div class="normal-text mb-2">
                    <span>Управление ремонтом</span>
                </div>
                <div class="small-text padding-50">
                  Технический надзор. Коордирование и организация всех этапов. Контроль на каждом этапе, консультация прораба.
                </div>
              </b-col>
            </b-row>
          </b-col>
      </b-row>
      <b-row  align-h="center" class="padding-100">
        <b-col xl="9" lg="9" sm="10" md="10">
          <b-row align-h="start">
            <b-col xl="4" lg="4" sm="4" md="4" class="font-weight-bold">04</b-col>
            <b-col xl="4" lg="4" sm="8" md="4" class="font-weight-bold">Примеры работ</b-col>
            <b-col xl="4" lg="4" sm="6" md="4" class="font-weight-bold d-xl-block d-lg-block d-md-block d-sm-none">Готовые проекты</b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row align-h="center" class="padding-150 pt-5">
          <b-col xl="9" lg="9" sm="10" md="10" class="font-weight-bold">
            <b-row cols-xl="3" cols-lg="3" cols-md="1" cols-sm="1">
              <template v-for="(item, index) of cards">
                <b-col class="mb-4" :key="index" v-on:click="cardContent=item.images">
                  <card-item
                    v-b-modal.modal-center
                    :title="item.title"
                    :description="item.description"
                    :prices="item.prices"
                    :image="item.image"
                  />
                </b-col>
              </template>
            </b-row>
          </b-col>
      </b-row>
      <b-row  align-h="center" class="padding-100">
        <b-col xl="9" lg="9" sm="10" md="10">
          <b-row align-h="start">
            <b-col xl="4" lg="4" sm="4" md="4" class="font-weight-bold">05</b-col>
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
            Хотите заказать дизайн?
            <br />
            Мы всегда рады вам помочь!
          </div>
          <div class="normal-text underline pointer" v-b-modal.modal-send>
            Оставить заявку
          </div>
        </b-col>
      </b-row>
      <footer-container />
    </div>
    <modal-center :images="cardContent" />
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
        {
          title: 'Лофт',
          description: '78 м2',
          prices: [
            '- дизайн проект 150 000₽',
            '- ремонт и материалы 3.2 млн.₽',
            '- мебель, техника, декор 2.1 млн.₽',
          ],
          image: "../images/interior-design/loft/0.jpg",
          images: this.getImages('../images/interior-design/loft', 21, 'jpg')
        },
        {
          title: 'Эсфера 113',
          description: '113 м2',
          prices: [
            '- дизайн проект 230 000₽',
            '- ремонт и материалы 4 млн.₽',
            '- мебель, техника, декор 2.8 млн.₽',
          ],
          image: "../images/interior-design/esfera/0.jpg",
          images: this.getImages('../images/interior-design/esfera', 32, 'jpg')
        },
        {
          title: 'Атажукина',
          description: '78 м2',
          prices: [
            '- дизайн проект 150 000₽',
            '- ремонт и материалы 2.8 млн.₽',
            '- мебель, техника, декор 2.2 млн.₽',
          ],
          image: "../images/interior-design/atajukina/0.jpg",
          images: this.getImages('../images/interior-design/atajukina', 21, 'jpg')
        }
      ],
      cardContent: []
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
  },
  methods: {
    getImages(path, count, format) {
      return new Array(count).fill().map((_, index) => `${path}/${index}.${format}`)
    }
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
