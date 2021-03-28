<template>
  <b-navbar toggleable="xl" type="dark" variant="transparent" class="navbar">
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
        <b-img src="../static/images/navbar_icon.svg" alt="navbar icon" />
      </template>
    </b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="navbar-titles navbar-text">
        <NuxtLink to="/interior-design">дизайн интерьера</NuxtLink>
        <NuxtLink to="/architectural-design">архитектурное проектирование</NuxtLink>
        <NuxtLink to="/construction">строительство</NuxtLink>
        <!-- <NuxtLink to="/">ремонт</NuxtLink>
        <NuxtLink to="/">корпусная мебель</NuxtLink>
        <NuxtLink to="/">интерьерный салон</NuxtLink> -->
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
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
@media (max-width: 800px) {
  .navbar {
    padding: 20px 50px;
    .logo {
      max-width: 70px;
    }
  }
}
</style>
