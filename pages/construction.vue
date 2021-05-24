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
          <span class="top-title-text">cтроительство<br />домов под ключ</span>
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
            <b-col xl="4" lg="4" sm="6" md="4" class="font-weight-bold d-xl-block d-lg-block d-md-block d-sm-none">Строительство</b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row align-h="center" class="padding-100">
        <b-col xl="3" lg="3" sm="10" md="10" class="normal-text padding-50">
          Строительство частных домов
        </b-col>
        <b-col xl="6" lg="6" sm="10" md="10" class="title-text">
          Наша компания  производит полный цикл работ, связанных со строительством домов в Нальчике. С нашей помощью вы станете счастливым собственником частного  дома, который простоит несколько веков
          <b-row class="mt-4">
            <b-col class="small-text text-gray">
              Проект может быть реализован как за меньшую сумму, так и за большую. Нужно заранее понимать свой бюджет, определить его для нас, и мы сделаем проект и комплектацию так, чтобы этих денег хватило 
            </b-col>
            <b-col class="small-text text-gray">
              Свои специалисты для каждого из этапов работ: от дизайна и проекта до строительства и отделки. Строим строго с соблюдением СНИП и ГОСТ. Гарантия на долгие годы, благодаря комплексному подходу
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
                Подбор земельного участка
              </div>
              <div class="small-text padding-50">
                Подберем земельный участок с лучшими комуникациями, удобным подъездом к объекту и проверим чистоту документов
              </div>
            </b-col>
            <b-col xl="4" lg="4" sm="12" md="12" class="mb-3">
              <div class="font-weight-bold mb-3">
                02
              </div>
              <div class="normal-text mb-2">
                Подготовка участка
              </div>
              <div class="small-text padding-50">
                Приведем ваш земельный участок в порядок, выровним, очистим от мусора и ненужного хлама 
              </div>
            </b-col>
            <b-col xl="4" lg="4" sm="12" md="12" class="mb-3">
              <div class="font-weight-bold mb-3">
                03
              </div>
              <div class="normal-text mb-2">
                Подготовка фундамента
              </div>
              <div class="small-text padding-50">
                Возведем надежный фундамент соблюдая регламентированные стандарты
              </div>
            </b-col>
            <b-col xl="4" lg="4" sm="12" md="12" class="mb-3">
              <div class="font-weight-bold mb-3">
                04
              </div>
              <div class="normal-text mb-2">
                Возведение стен
              </div>
              <div class="small-text padding-50">
                Наши высококвалифицированные специалисты возведут стены и перегородки из качественных материалов
              </div>
            </b-col>
            <b-col xl="4" lg="4" sm="12" md="12" class="mb-3">
              <div class="font-weight-bold mb-3">
                05
              </div>
              <div class="normal-text mb-2">
                Установка кровли
              </div>
              <div class="small-text padding-50">
                Обустроим не только красивую, но и прочную крышу, способную противостоять всем стихиям
              </div>
            </b-col>
            <b-col xl="4" lg="4" sm="12" md="12" class="mb-3">
              <div class="font-weight-bold mb-3">
                06
              </div>
              <div class="normal-text mb-2">
                Монтаж окон и входной двери
              </div>
              <div class="small-text padding-50">
                Сделаем монтаж окон любых форм и размеров и поставим входную дверь, специально спроектированную для вас 
              </div>
            </b-col>
            <b-col xl="4" lg="4" sm="12" md="12" class="mb-3">
              <div class="font-weight-bold mb-3">
                07
              </div>
              <div class="normal-text mb-2">
                Черновой ремонт 
              </div>
              <div class="small-text padding-50">
                Сделаем качественную черновую отделку, что максимально упростит чистовой ремонт, для гармоничного и практичного интерьера 
              </div>
            </b-col>
             <b-col xl="4" lg="4" sm="12" md="12" class="mb-3">
              <div class="font-weight-bold mb-3">
                08
              </div>
              <div class="normal-text mb-2">
                Сдача объекта 
              </div>
              <div class="small-text padding-50">
                Сдача объекта производится с соблюдением всей документации и проверкой проделанных работ 
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <!-- <b-row  align-h="center" class="padding-100">
        <b-col xl="9" lg="9" sm="10" md="10">
          <b-row align-h="start">
            <b-col xl="4" lg="4" sm="4" md="4" class="font-weight-bold">03</b-col>
            <b-col xl="4" lg="4" sm="8" md="4" class="font-weight-bold">Примеры работ</b-col>
            <b-col xl="4" lg="4" sm="6" md="4" class="font-weight-bold d-xl-block d-lg-block d-md-block d-sm-none">Построенные сооружения</b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row align-h="center padding-150">
        <div class="video-player-box"
            :playsinline="playsinline"
            v-video-player:myVideoPlayer="playerOptions">
        </div>
      </b-row> -->
      <b-row  align-h="center" class="padding-100">
        <b-col xl="9" lg="9" sm="10" md="10">
          <b-row align-h="start">
            <b-col xl="4" lg="4" sm="4" md="4" class="font-weight-bold">03</b-col>
            <b-col xl="4" lg="4" sm="8" md="4" class="font-weight-bold">Вопросы</b-col>
            <b-col xl="4" lg="4" sm="6" md="4" class="font-weight-bold d-xl-block d-lg-block d-md-block d-sm-none">Свяжись с нами</b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row class="padding-150">
        <b-col cols="5" offset="2" class="mr-auto">
          <div class="big-text padding-50">
            Остались вопросы?
            <br />
            Хотите начать строить?
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
  data() {
    return {
      showTopArrow: false,
      playsinline: true,
      
      // videojs options
      playerOptions: {
        muted: true,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [{
          type: "video/mp4",
          src: "../videos/video.mp4"
        }],
        // poster: "/static/images/author.jpg",
      }
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
    background: url(../static/images/construction/title-img.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100vh;
  }
}
a:hover {
  text-decoration: none;
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
