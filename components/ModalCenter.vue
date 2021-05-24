<template> 
    <b-modal id="modal-center" centered hide-footer hide-header>
        <div class="pa-5" v-if="images.length">
            <vue-slick-carousel arrows v-bind="carouselSettings" :dots="true">
                <template v-for="item of images">
                    <div :key="item" class="img-block">
                        <b-img :src="item" alt="card image" />
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
        images: {
            type: Array,
            default: () => []
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
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.img-block {
    max-width: 99%;
    height: 70vh;
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
    }
}
::v-deep {
    .slick-prev:before, .slick-next:before {
        font-size: 35px;
    }
    .slick-next:before {
        margin-left: 25px;
    }
    .slick-prev:before {
        margin-left: -40px;
    }
}
</style>