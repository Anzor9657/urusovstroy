<template>
  <b-navbar toggleable="lg" type="dark" variant="transparent" class="navbar">
    <NuxtLink to="/">
      <b-img
        src="../static/images/logos/logo.svg"
        width="80px"
        class="logo"
        alt="logo"
      />
    </NuxtLink>

    <b-navbar-toggle target="navbar-toggle-collapse">
      <template #default="{}">
        <div>
        </div>
      </template>
    </b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="navbar-titles navbar-text">
        <NuxtLink to="/interior-design">дизайн интерьера</NuxtLink>
        <NuxtLink to="/architectural-design">архитектурное проектирование</NuxtLink>
        <NuxtLink to="/construction">строительство</NuxtLink>
        <NuxtLink v-if="css > 1366" to="/cabinet-furniture">корпусная мебель</NuxtLink>
        <NuxtLink v-if="css > 1600" to="/salon">интерьерный салон</NuxtLink>
        <NuxtLink v-if="css > 1920" to="/complex">ремонт</NuxtLink>
        <NuxtLink v-if="css > 2050" to="/team">наша команда</NuxtLink>
      </b-navbar-nav>
    </b-collapse>

    <div class="pa-4 outline-none" v-b-modal.nav-modal>
      <b-img src="../static/images/navbar_icon.svg" class="outline-none" alt="navbar icon" />
    </div>
    <b-modal id="nav-modal" hide-footer>
      <div class="modal-links">
        <NuxtLink to="/">главная</NuxtLink>
        <NuxtLink to="/interior-design">дизайн интерьера</NuxtLink>
        <NuxtLink to="/architectural-design">архитектурное проектирование</NuxtLink>
        <NuxtLink to="/construction">строительство</NuxtLink>
        <NuxtLink to="/cabinet-furniture">корпусная мебель</NuxtLink>
        <NuxtLink to="/salon">интерьерный салон</NuxtLink>
        <NuxtLink to="/complex">ремонт</NuxtLink>
        <NuxtLink to="/team">наша команда</NuxtLink>
      </div>
    </b-modal>
  </b-navbar>
</template>
<script>
export default {
  computed: {
    css () {
      if (process.client) {
        return window.innerWidth
      }
      return 0
    }
  }
}
</script>>
<style lang="scss" scoped>
.navbar {
  position: absolute;
  width: 100vw;
  top: 0;
  padding: 60px 150px;
  z-index: 100;
  .navbar-titles {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 0 80px;
    width: 100%;
    a {
      width: max-content;
    }
    a:hover {
      text-decoration: none;
    }
  }
  button {
    border: none;
  }
}
.modal-links {
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  a {
    width: max-content;
    color: #fff;
    margin-bottom: 20px;
  }
  a:hover {
    text-decoration: none !important;
    color: #fff !important;
  }
}
@media (max-width: 800px) {
  .navbar {
    padding: 20px 50px;
    .logo {
      max-width: 70px;
    }
  }
}
</style>
