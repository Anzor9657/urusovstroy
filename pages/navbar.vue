<template>
  <div>
    <b-container fluid="sm"> </b-container>
    <b-container fluid="md">
      <b-navbar toggleable type="light" variant="transparent">
        <b-navbar-brand href="#"
          ><NuxtLink to="/"><Logo /></NuxtLink
        ></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="d-flex justify-content-around w-100">
            <b-nav-item href="#">ДИЗАЙН ИНТЕРЬЕРА</b-nav-item>
            <b-nav-item href="#">АРХИТЕКТУРНОЕ ПРОЕКТИРОВАНИЕ</b-nav-item>
            <b-nav-item href="#">СТРОИТЕЛЬСТВО</b-nav-item>
            <b-nav-item href="#">РЕМОНТ</b-nav-item>
            <b-nav-item href="#">КОРПУСНАЯ МЕБЕЛЬ</b-nav-item>
            <b-nav-item href="#">ИНТЕРЬЕРНЫЙ САЛОН</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-container>
    <b-container fluid="lg"> </b-container>
  </div>
</template>
<script>
export default {
  name: "NavBar"
};
</script>
<style scoped>
.nav-item {
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
}
</style>
