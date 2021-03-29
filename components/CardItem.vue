<template>
  <div class="width-100 card">
    <b-img :src="image" class="width-100" alt="card image" />
    <div class="d-flex flex-column align-start card-container">
      <span class="card-primary mb-1">{{title}}</span>
      <span class="card-secondary text-gray mb-4">{{description}}</span>
      <span class="card-secondary">{{price}}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    image: {
      type: String,
      default: '_nuxt/static/images/default-item.png'
    },
    title: {
      type: String,
      default: 'Название проекта'
    },
    description: {
      type: String,
      default: '100 м2, 12 месяцев'
    },
    price: {
      type: String,
      default: '1000000 ₽'
    }
  }
};
</script>
<style lang="scss" scoped>
.card {
  border: 0.5px thin #dadada;
}
.card-container {
  padding: 40px 0 68px 40px;
}
@media (max-width: 1366px) {
  .card-container {
    padding: 20px 0 27px 20px;
  }
}
</style>
