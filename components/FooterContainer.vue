<template>
  <b-row class="footer all-padding-100 gray-small-text-500">
    <b-col xl="3" lg="3" sm="12" md="12" class="margin-100">
      <p class="title-text text-black">Карта сайта</p>
      <NuxtLink to="/"><p>Главная</p></NuxtLink>
      <p>Наша команда</p>
      <NuxtLink to="/interior-design"><p>Дизайн интерьера</p></NuxtLink>
      <NuxtLink to="/architectural-design"><p>Проектирование</p></NuxtLink>
      <NuxtLink to="/construction"><p>Строительство</p></NuxtLink>
      <p>Ремонт</p>
      <NuxtLink to="/cabinet-furniture"><p>Корпусная мебель</p></NuxtLink>
      <NuxtLink to="/salon"><p>Интерьерный салон</p></NuxtLink>
    </b-col>
    <b-col xl="3" lg="3" sm="12" md="12">
      <p class="title-text text-black">Мы в соцсетях</p>
      <a href="https://www.instagram.com/urusov_remont_design/" target="_blank"><p>Instagram</p></a>
      <a href="https://www.youtube.com/channel/UCSjibGsUsH-F02FWo0ec33g" target="_blank"><p>YouTube</p></a>
    </b-col>
    <b-col xl="6" lg="6" sm="12" md="12" class="text-right">
      <div class="d-flex flex-column justify-content-between h-100">
        <div>
          <a href="tel:89287196638" class="gray-small-text-500"><p>8 (928) 719-66-38</p></a>
          <a href="https://goo.gl/maps/z9SMEuvuAQrfnwvs6" target="_blank"><p>Улица Ахохова, 183, Нальчик</p></a>
          <p>urusov-stroy@gmail.com</p>
        </div>
        <div>
          <p class="footer-text text-black mb-3">URUSOVSTROY 2021</p>
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
    color: inherit !important;
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
