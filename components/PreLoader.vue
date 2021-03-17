<template>
  <div
    class="hover-container d-flex align-items-center"
    :class="{
      'rolling-top': rollingTop
    }"
  >
    <span
      class="big-text action-wrapper"
      :class="{
        'rolling-right': rollingRight
      }"
    >
      <span class="name-title-text">urusovstroy</span><br />
      <span class="blink normal-text">
        Сайт в процессе разработки... <br />
        Некоторые функции недоступны
      </span>
    </span>
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
}
.rolling-right {
  transition: opacity 0.7s, transform 1s;
  transform: translateX(34vw);
  opacity: 1;
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
.blink {
  animation: blinker infinite ease-in-out 1s;
  -webkit-animation: blinker infinite ease-in-out 1s;
}
</style>
