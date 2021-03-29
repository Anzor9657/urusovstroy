<template>
  <b-row class="footer all-padding-100 gray-small-text-500">
    <b-col xl="3" lg="3" sm="9" md="9" class="margin-100">
      <p class="title-text text-black">Карта сайта</p>
      <p>Главная</p>
      <p>Наша команда</p>
      <p>Дизайн интерьера</p>
      <p>Проектирование</p>
      <p>Строительство</p>
      <p>Ремонт</p>
      <p>Корпусная мебель</p>
      <p>Интерьерный салон</p>
    </b-col>
    <b-col xl="3" lg="3" sm="9" md="9">
      <p class="title-text text-black">Мы в соцсетях</p>
      <p>Instagram</p>
      <p>YouTube</p>
    </b-col>
    <b-col xl="6" lg="6" sm="9" md="9" class="text-right">
      <div class="d-flex flex-column justify-content-between h-100">
        <div>
          <a href="tel:89287196638" class="gray-small-text-500"><p>8 (928) 719-66-38</p></a>
          <p>Улица Ахохова, 183, Нальчик</p>
          <p>urusov-stroy@gmail.com</p>
        </div>
        <div>
          <p class="footer-text text-black">URUSOVSTROY 2021</p>
          <p>Made by DOT.</p>
        </div>
      </div>
    </b-col>
  </b-row>
</template>
<style lang="scss" scoped>
.footer {
  border-top: 1px solid #e5e5e5;
  text-transform: none;
  a {
    text-decoration: none;
    &:hover {
      text-decoration: none;
      color: inherit !important;
    }
  }
  p {
    margin-bottom: 20px;
    font-weight: 400;
    letter-spacing: 0.04rem;
  }
  p.footer-text {
    margin-bottom: 0;
  }
}
</style>
