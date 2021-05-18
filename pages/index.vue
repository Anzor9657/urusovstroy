<template>
  <div class="main">
    <pre-loader :rolling-top="rollingTop" :rolling-right="rollingRight" />
    <div v-show="rollingTop">
      <navigation-bar />
      <b-container fluid class="margin-all-100 back-img">
        <b-row align-h="center">
          <b-col xl="11" lg="11" md="10" sm="11" offset-xl="1" offset-lg="1" offset-md="2" offset-sm="0" align-self="center" class="height-79 d-flex align-items-center">
            <div class="top-title-container">
              <span class="name-title-text">urusovstroy</span>
              <span class="font-weight-500">от идеи до реализации</span>
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
            <b-col xl="4" lg="4" sm="8" md="4" class="font-weight-bold">Кто мы</b-col>
            <b-col xl="4" lg="4" sm="6" md="4" class="font-weight-bold d-xl-block d-lg-block d-md-block d-sm-none">О компании</b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row align-h="center" class="padding-100">
        <b-col xl="3" lg="3" sm="10" md="10" class="normal-text margin-50">
          Команда профессионалов
        </b-col>
        <b-col xl="6" lg="6" sm="10" md="10">
          <span class="big-text margin-50">
            Амбициозная и уверенная в себе команда с четырехлетним успешным опытом
            реализации проектов разного уровня сложности
          </span>
          <b-row class="small-text mt-4">
            <b-col xl="6" lg="6" sm="12" md="12" class="margin-50">
              Мы удовлетворяем эстетические потребности наших клиентов, предлагая уникальную методику работы и высококлассный сервис. Нам доверяют как и идею так и реализацию.
            </b-col>
            <b-col xl="6" lg="6" sm="12" md="12" class="margin-50">
              Мы готовы реализовать проект любой сложности. Наш успех предопределен ответственным подходом к работе всей нашей команды. 
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row align-h="center" align-v="center" class="padding-150">
        <b-col xl="5" lg="5" sm="10" md="10" class="font-weight-bold">
          <b-img src="../static/images/person.png" class="w-100" alt="person image" />
        </b-col>
        <b-col xl="4" lg="4" sm="10" md="10" offset-xl="1" offset-lg="1" offset-sm="0" offset-md="0" class="font-weight-bold big-padding">
          <div class="padding-50">
            <div class="big-text">
              Урусов Алим Русланович
            </div>
            <div class="gray-big-text">
              Основатель
            </div>
          </div>
          <div class="small-text padding-50">
            Добро пожаловать на наш сайт, меня зовут Алим, я - основатель компании URUSOVSTROY. Мне удалось собрать команду ответственных профессионалов, разделяющих общие ценности. Вот уже 4 года наша команда успешно создаёт технологичные, стильные, продуманные дома, которые прослужат вам десятки лет.
          </div>
          <div class="small-text padding-50">
            У нас индивидуальный подход к каждому заказчику. Мы делаем проекты, отражающие стиль,  характер и образ жизни наших клиентов. Особое внимание мы уделяем функциональности интерьера, стремясь создать максимально практичные и эстетичные условия для того, чтобы вы наслаждались жизнью с комфортом.
          </div>
          <div class="gray-small-text padding-50">
            Хотите познакомиться со всеми?
          </div>
          <div class="normal-text underline">
            Сотрудники компании
          </div>
        </b-col>
      </b-row>
      <b-row  align-h="center" class="padding-100">
        <b-col xl="9" lg="9" sm="10" md="10">
          <b-row align-h="start">
            <b-col xl="4" lg="4" sm="4" md="4" class="font-weight-bold">02</b-col>
            <b-col xl="4" lg="4" sm="8" md="4" class="font-weight-bold">Что мы предлагаем</b-col>
            <b-col xl="4" lg="4" sm="6" md="4" class="font-weight-bold d-xl-block d-lg-block d-md-block d-sm-none">Наши услуги</b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row align-h="center" class="padding-150 links">
        <b-col xl="6" lg="6" sm="10" md="10">
          <b-row class="padding-100">
            <b-col xl="5" lg="5" sm="12" md="12" class="mr-auto mb-3">
              <div class="font-weight-bold mb-3">
                01
              </div>
              <div class="normal-text mb-2" @mouseenter="show1 = true" @mouseleave="show1 = false">
                <NuxtLink class="text-black" to="/interior-design">
                  <span>Дизайн интерьера</span>
                  <b-icon v-if="show1" rotate="90" animation="cylon" icon="arrow-up"></b-icon>
                </NuxtLink>
              </div>
              <div class="small-text padding-50">
                Наш проект включает в себя чертежи где учтены все детали,  которые позволят избежать ошибок и переделок
              </div>
            </b-col>
            <b-col xl="5" lg="5" sm="12" md="12" class="mr-auto mb-3">
              <div class="font-weight-bold mb-3">
                02
              </div>
              <div class="normal-text mb-2" @mouseenter="show2 = true" @mouseleave="show2 = false">
                <NuxtLink class="text-black" to="/">
                  <span>Проектирование</span>
                  <b-icon v-if="show2" rotate="90" animation="cylon" icon="arrow-up"></b-icon>
                </NuxtLink>
              </div>
              <div class="small-text padding-50">
                Комплексно проектируем коммерческие и жилые объекты с полным пакетом документов
              </div>
            </b-col>
            <b-col xl="5" lg="5" sm="12" md="12" class="mr-auto mb-3">
              <div class="font-weight-bold mb-3">
                03
              </div>
              <div class="normal-text mb-2" @mouseenter="show3 = true" @mouseleave="show3 = false">
                <NuxtLink class="text-black" to="/construction">
                  <span>Строительство</span>
                  <b-icon v-if="show3" rotate="90" animation="cylon" icon="arrow-up"></b-icon>
                </NuxtLink>
              </div>
              <div class="small-text padding-50">
                Начиная от фундамента, заканчивая облицовочными работами, мы построим объект премиум класса
              </div>
            </b-col>
            <b-col xl="5" lg="5" sm="12" md="12" class="mr-auto mb-3">
              <div class="font-weight-bold mb-3">
                04
              </div>
              <div class="normal-text mb-2" @mouseenter="show4 = true" @mouseleave="show4 = false">
                <NuxtLink class="text-black" to="/">
                  <span>Ремонт</span>
                  <b-icon v-if="show4" rotate="90" animation="cylon" icon="arrow-up"></b-icon>
                </NuxtLink>
              </div>
              <div class="small-text padding-50">
                Электрики, сантехники, плиточники, моляры. Лучшие специалисты в одной команде
              </div>
            </b-col>
            <b-col xl="5" lg="5" sm="12" md="12" class="mr-auto mb-3">
              <div class="font-weight-bold mb-3">
                05
              </div>
              <div class="normal-text mb-2" @mouseenter="show5 = true" @mouseleave="show5 = false">
                <NuxtLink class="text-black" to="/">
                  <span>Корпусная мебель</span>
                  <b-icon v-if="show5" rotate="90" animation="cylon" icon="arrow-up"></b-icon>
                </NuxtLink>
              </div>
              <div class="small-text padding-50">
                Учитывая ваши пожелания и условия изготовим корпусную мебель любой сложности
              </div>
            </b-col>
            <b-col xl="5" lg="5" sm="12" md="12" class="mr-auto mb-3">
              <div class="font-weight-bold mb-3">
                06
              </div>
              <div class="normal-text mb-2" @mouseenter="show6 = true" @mouseleave="show6 = false">
                <NuxtLink class="text-black" to="/">
                  <span>Интерьерный салон</span>
                  <b-icon v-if="show6" rotate="90" animation="cylon" icon="arrow-up"></b-icon>
                </NuxtLink>
              </div>
              <div class="small-text padding-50">
                Все элементы интерьера от ведущих поставщиков в одной выставочной точке
              </div>
            </b-col>
          </b-row>
        </b-col>
        <b-col xl="3" lg="3" sm="10" md="10">
          <b-img src="../static/images/image_1.png"  class="width-md-100" alt="image_1" />
        </b-col>
      </b-row>
      <b-row  align-h="center" class="padding-100">
        <b-col xl="9" lg="9" sm="10" md="10">
          <b-row align-h="start">
            <b-col xl="4" lg="4" sm="4" md="4" class="font-weight-bold">03</b-col>
            <b-col xl="4" lg="4" sm="8" md="4" class="font-weight-bold">Почему мы</b-col>
            <b-col xl="4" lg="4" sm="6" md="4" class="font-weight-bold d-xl-block d-lg-block d-md-block d-sm-none">Факты о компании</b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row align-h="center" class="padding-150">
        <b-col xl="5" lg="5" sm="10" md="10" class="font-weight-bold overflow-hidden margin-100">
          <b-img src="../static/images/image_2.png" class="width-md-100" alt="image_2 image" />
        </b-col>
        <b-col xl="3" lg="3" sm="10" md="10" offset-xl="1" offset-lg="1" offset-sm="0" offset-md="0" class="font-weight-bold">
          <div class="padding-50 mb-3">
            <div class="normal-text mb-2">
              Большая команда специалистов
            </div>
            <div class="small-text">
              В нашей компании работают сотрудники, проверенные временем и десятками успешно реализованных проектов. Большой упор делается на развития каждого специалиста по своему направлению, что дает нам получить лучшее качество в короткие сроки 
            </div>
          </div>
          <div class="padding-50 mb-3">
            <div class="normal-text mb-2">
              Архитектурный подход к проектированию
            </div>
            <div class="small-text">
              Это комфорт и удобство, спланированная эргономика, правильное открывание/закрывание двери, расстановка мебели и её размер и это только малая часть, учитываемых параметров в проектировании
            </div>
          </div>
          <div class="padding-50 mb-3">
            <div class="normal-text mb-2">
              Соотношение цены и качества
            </div>
            <div class="small-text">
              Во время проектирования, мы грамотно распределяем бюджет заказчика, чтобы получить наилучший результат
            </div>
          </div>
          <div>
            <div class="normal-text mb-2">
              Опыт в реализации
            </div>
            <div class="small-text">
              Наш опыт в реализации,  позволяет грамотнее рассчитать стоимость ремонта, материалов, подстроиться под тот бюджет, который есть у клиента 
            </div>
          </div>
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
  data () {
    return {
      showTopArrow: false,
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false
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
    // background: url(../static/images/big_image.png);
    background-image: url(../static/videos/main.gif);
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
