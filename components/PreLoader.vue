<template>
  <div
    class="hover-container d-flex align-items-center justify-content-center"
    :class="{
      'rolling-top': rollingTop
    }"
  >
    <div
      class="logo-wrapper d-flex align-items-center"
      :class="{
        'previw-animation': rollingRight
      }"
    >
      <div class="mr-4">
        <b-img
          src="../static/images/logos/white_U.svg"
          width="80px"
          alt="white U"
          class="logo-U"
        />
        <b-img
          src="../static/images/logos/white_S.svg"
          width="80px"
          alt="white S"
          class="logo-S"
        />
      </div>
      <div class="big-text action-wrapper">
        <span class="name-title-text">urusovstroy</span><br />
        <span class="blink normal-text">
          Сайт в процессе разработки... <br />
          Некоторые функции недоступны
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    rollingTop: {
      type: Boolean,
      default: false
    },
    rollingRight: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style lang="scss" scoped>
.action-wrapper {
  opacity: 0;
  padding-top: 110px;
}
.rolling-top {
  transition: transform 1s;
  transform: translateY(-100vh);
}
.hover-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: #000;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  color: #fff;
}
.logo-wrapper {
  .logo-U {
    transform: translateX(-100vw);
  }
  .logo-S {
    transform: translateX(100vw);
  }
}
.previw-animation {
  .action-wrapper {
    transition: opacity 0.7s;
    transition-delay: 1s;
    opacity: 1;
  }
  .logo-U {
    transition: transform 1s;
    transform: translateX(0);
  }
  .logo-S {
    transition: transform 1s;
    transform: translateX(0);
  }
}
.blink {
  animation: blinker infinite ease-in-out 3s;
  -webkit-animation: blinker infinite ease-in-out 1s;
}
</style>
