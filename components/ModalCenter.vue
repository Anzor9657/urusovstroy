<template> 
    <b-modal id="modal-center" centered hide-footer hide-header>
        <div class="pa-5">
            <vue-slick-carousel :arrows="false" v-bind="carouselSettings" :dots="true">
                <template v-for="item of images">
                    <div :key="item" class="img-block">
                        <b-img src="../static/images/default.png" alt="card image" />
                    </div>
                </template>
            </vue-slick-carousel>
        </div>
    </b-modal>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
    components: { VueSlickCarousel },
    props: {
        content: {
            type: Object,
            default: () => {}
        }
    },
    data() {
        return {
            carouselSettings: {
                centerMode: true,
                infinite: false,
                slidesToShow: 1,
                swipeToSlide: true,
                touchMove: true,
                swipe: true
            },
            images: [1,2,3,4,5,6]
        }
    }
}
</script>
<style lang="scss" scoped>
.img-block {
    max-width: 99%;
    height: 70vh;
    overflow: hidden;
}
</style>