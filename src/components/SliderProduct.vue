<template>
    <section class="SliderProduct">
        <div class="SliderProduct__content">
            <TextH3 class="SliderProduct__title">Notre sélection</TextH3>
            <swiper
                :slides-per-view="2"
                :space-between="2"
                :breakpoints="{
                    1023: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                        pagination: false,
                    },
                }"
            >
                <swiper-slide v-for="(product,i) in products" :key="i">
                    <ProductItem :product="product"></ProductItem>
                </swiper-slide>
            </swiper>
        </div>
    </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import TextH3 from "@/components/Atoms/Texts/TextH3.vue";
import ProductItem from "@/components/Molecules/ProductItem.vue";

import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';

export default {
    name: "SliderProduct",
    components: {
      Swiper,
      SwiperSlide,
      TextH3,
      ProductItem
    },
    created() {
        this.fetchAllProducts();
    },
    computed: {
        ...mapGetters(["products"]),
    },
    methods: {
        ...mapActions(["fetchAllProducts"]),
    },
}
</script>

<style lang="scss">
.SliderProduct{
    display: flex;
    width: 100%;

    &__title{
        margin-bottom: 40px;
        white-space: normal;
        text-transform: uppercase;
        width: 100%;
    }

    &__content{
        width: 100%;
        max-width: $maxContentWidth;
        margin-inline: auto;
        padding: 110px 30px;

        @include media('<=sm'){
            padding: 60px 20px;
        }
    }
}
</style>