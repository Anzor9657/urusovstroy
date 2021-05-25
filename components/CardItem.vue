<template>
  <div class="width-100 card">
    <b-img :src="image" class="width-100" alt="card image" />
    <div class="d-flex flex-column align-start card-container">
      <span class="card-primary mb-1">{{title}}</span>
      <span class="card-secondary text-gray mb-4">{{description}}</span>
      <span v-if="price" class="card-secondary">{{price}}</span>
      <template v-if="prices.length">
        <span class="card-secondary" v-for="item of prices" :key="item">
          {{item}}
        </span>
      </template>
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
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    price: {
      type: String,
      default: ''
    },
    prices: {
      type: Array,
      default: () => []
    }
  }
};
</script>
<style lang="scss" scoped>
.card {
  border: 0.5px thin #dadada;
  img {
    height: 15vw;
    object-fit: cover;
  }
}
.card-container {
  padding: 40px 0 68px 40px;
}
@media (max-width: 1366px) {
  .card-container {
    padding: 20px 0 27px 20px;
  }
}
@media (max-width: 863px) {
  .card {
    img {
      height: 50vw;
    }
  }
}
</style>
