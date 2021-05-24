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
        <b-col xl="3" lg="3" sm="10" md="10" class="big-text padding-50">
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
<style lang="scss"> scoped>
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
