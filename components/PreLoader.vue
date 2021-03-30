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
      <div class="images">
        <b-img
          src="../static/images/logos/white_U.svg"
          alt="white U"
          class="logo-U"
        />
        <b-img
          src="../static/images/logos/white_S.svg"
          alt="white S"
          class="logo-S"
        />
      </div>
      <div class="big-text action-wrapper">
        <p class="name-title-text">urusovstroy</p>
        <div class="blink normal-text">
          <p>Сайт в процессе разработки...</p>
          <p>Некоторые функции недоступны</p>
        </div>
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
  padding-top: 60px;
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
p {
  line-height: 1rem;
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
img {
  width: 80px;
}
.images {
  margin-right: 20px;
}
@media (max-width: 400px) {
  img {
    width: 30px;
  }
  .images {
    margin-right: 10px;
  }
  .normal-text {
    font-weight: 500;
    font-size: 0.9rem;
    line-height: 0.5rem;
  }
}
</style>
