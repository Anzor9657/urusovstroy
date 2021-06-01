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
          <span class="top-title-text">наша команда</span>
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
            <b-col xl="4" lg="4" sm="8" md="4" class="font-weight-bold">Наша команда</b-col>
            <b-col xl="4" lg="4" sm="6" md="4" class="font-weight-bold d-xl-block d-lg-block d-md-block d-sm-none">Все сотрудникиы</b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row align-h="center" class="padding-100 overflow-hidden">
        <b-col xl="9" lg="9" sm="10" md="10">
          <b-row align-h="start">
            <b-col xl="4" lg="4" sm="0" md="0"  class="p-0" />
            <b-col xl="4" lg="4" sm="12" md="4">
              <b-img src="../static/images/team/1.png" class="w-100" alt="card image" />
              <div class="align-self-start pt-4">
                <div class="normal-text mb-2">
                  Урусов Алим 
                </div>
                <div class="gray-little-text padding-50">
                  Основатель 
                </div>
              </div>
            </b-col>
            <b-col xl="4" lg="4" sm="0" md="4" class="p-0" />
            <b-col xl="4" lg="4" sm="12" md="4">
              <b-img src="../static/images/team/2.png" class="w-100" alt="card image" />
              <div class="align-self-start pt-4">
                <div class="normal-text mb-2">
                  Цеева Анжелика 
                </div>
                <div class="gray-little-text padding-50">
                  дизайнер 
                </div>
              </div>
            </b-col>
            <b-col xl="4" lg="4" sm="12" md="4">
              <b-img src="../static/images/team/3.png" class="w-100" alt="card image" />
              <div class="align-self-start pt-4">
                <div class="normal-text mb-2">
                  Калимханов Мухаммад  
                </div>
                <div class="gray-little-text padding-50">
                  архитектор 
                </div>
              </div>
            </b-col>
            <b-col xl="4" lg="4" sm="12" md="4">
              <b-img src="../static/images/team/4.png" class="w-100" alt="card image" />
              <div class="align-self-start pt-4">
                <div class="normal-text mb-2">
                  Боттаева Алима 
                </div>
                <div class="gray-little-text padding-50">
                  менеджер по продажам 
                </div>
              </div>
            </b-col>
            <b-col xl="4" lg="4" sm="12" md="4">
              <b-img src="../static/images/team/5.png" class="w-100" alt="card image" />
              <div class="align-self-start pt-4">
                <div class="normal-text mb-2">
                  Апажихова Альбина 
                </div>
                <div class="gray-little-text padding-50">
                  менеджер по продажам 
                </div>
              </div>
            </b-col>
            <b-col xl="4" lg="4" sm="12" md="4">
              <b-img src="../static/images/team/6.png" class="w-100" alt="card image" />
              <div class="align-self-start pt-4">
                <div class="normal-text mb-2">
                  Кетова Зарема 
                </div>
                <div class="gray-little-text padding-50">
                  дизайнер мебели  
                </div>
              </div>
            </b-col>
            <b-col xl="4" lg="4" sm="12" md="4">
              <b-img src="../static/images/team/7.png" class="w-100" alt="card image" />
              <div class="align-self-start pt-4">
                <div class="normal-text mb-2">
                  Ципинов Азамат 
                </div>
                <div class="gray-little-text padding-50">
                  визуализатор 
                </div>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row  align-h="center" class="padding-100">
        <b-col xl="9" lg="9" sm="10" md="10">
          <b-row align-h="start">
            <b-col xl="4" lg="4" sm="4" md="4" class="font-weight-bold">02</b-col>
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
    background: url(../static/images/team/title-img.jpeg);
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
.gray-little-text {
  font-weight: 600;
  font-size: 23px;
  line-height: 32px;
  color: #ADADAD;
  text-transform: lowercase;
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
