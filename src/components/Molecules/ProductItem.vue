<template>
  <div class="ProductItem">
    <div class="ProductItem__image">
        <img
            class="ProductItem__image__front"
            :src="this.product.image"
            :alt="this.product.title"
            loading="lazy"
        />
        <img
            class="ProductItem__image__back"
            :src="this.product.image"
            :alt="this.product.title"
            loading="lazy"
        />
    </div>
    <TextP1 class="ProductItem__title">{{ this.product.title }}</TextP1>
    <TextP1 class="ProductItem__price">{{ this.product.price }} €</TextP1> 
</div>
</template>

<script>
import TextP1 from "@/components/Atoms/Texts/TextP1.vue";

export default {
    name:'ProductItem',
    components:{
        TextP1
    },
    props:{
        product: {
            type: Object,
            require: true
        }
    }
}
</script>

<style lang="scss">
.ProductItem{
    display: flex;
    flex-direction: column;
    cursor: pointer;

    &:hover{
        .ProductItem__image__back{
            opacity: 1;
        }
    }

    &__image{
        aspect-ratio: 100 / 125;
        position: relative;
        img{
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            object-fit: cover;
            object-position: center;
        }
        &__back{
            transition: opacity 0.6s linear;
            opacity: 0;
            z-index: zindex(above);
            transform: scaleX(-1);
        }
    }
    &__title{
        font-weight: 700;
        line-height: 16px;
        margin: 7px 0 2px;
    }

}
</style>