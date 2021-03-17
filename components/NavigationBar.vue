<template>
  <b-navbar type="dark" variant="transparent" class="navbar">
    <NuxtLink to="/">
      <b-img src="../static/images/logo.svg" fluid alt="logo" />
    </NuxtLink>

    <b-navbar-toggle target="navbar-toggle-collapse">
      <template #default="{}">
        <b-img src="../static/images/navbar_icon.svg" fluid alt="navbar icon" />
      </template>
    </b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="navbar-titles navbar-text">
        <NuxtLink to="/">дизайн интерьера</NuxtLink>
        <NuxtLink to="/architectural-design"
          >архитектурное проектирование</NuxtLink
        >
        <NuxtLink to="/construction">строительство</NuxtLink>
        <NuxtLink to="/">ремонт</NuxtLink>
        <NuxtLink to="/">корпусная мебель</NuxtLink>
        <NuxtLink to="/">интерьерный салон</NuxtLink>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto"></b-navbar-nav>
    </b-collapse>
    <b-img src="../static/images/navbar_icon.svg" fluid alt="navbar icon" />
  </b-navbar>
</template>
<style lang="scss" scoped>
.navbar {
  position: absolute;
  width: 85vw;
  top: 0;
  margin: 60px 150px;
  .navbar-titles {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 0 80px;
    width: 100%;
  }
  a:hover {
    text-decoration: none;
  }
}
</style>
