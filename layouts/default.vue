<template>
  <tbody>
    <Nuxt />
    <modal-send />
  </tbody>
</template>
<script>
import Vue from 'vue';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import ModalSend from '../components/ModalSend';

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

export default new Vue({
  name: 'default',
  components: {
    ModalSend,
  },
});
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,500;0,600;0,700;0,800;&display=swap");

@font-face {
  font-family: "EurostyleLTStd";
  src: local("EurostyleLTStd"), url("../static/fonts/EurostileLT.ttf");
}
html {
  body { 
    font-family: "Montserrat", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }
  font-family: "Montserrat", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  max-width: 1920px;
}
::-webkit-scrollbar {
  display: none;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
