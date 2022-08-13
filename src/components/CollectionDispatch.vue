<template>
    <section class="CollectionDispatch">
        <div class="CollectionDispatch__content">
            <div class="CollectionDispatch__item">
                <img src="@/assets/images/robe.jpeg" alt="Cart button" loading="lazy"/>
                <TextH3 class="CollectionDispatch__title">collection femme</TextH3>
            </div>
            <div class="CollectionDispatch__item">
                <img src="@/assets/images/homme.jpeg" alt="Cart button" loading="lazy"/>
                <TextH3 class="CollectionDispatch__title">collection homme</TextH3>
            </div>
        </div>
    </section>
</template>

<script>
import TextH3 from "@/components/Atoms/Texts/TextH3.vue";

export default {
    name: 'CollectionDispatch',
    components:{
        TextH3,
    }
}
</script>

<style lang="scss">
.CollectionDispatch{
    display: flex;
    width: 100%;

    &__content{
        display: flex;
        margin-inline: auto;
        width: 100%;
        max-width: $maxContentWidth;
        flex-wrap: nowrap;
        column-gap: 2px;
        color: color(white);

        @include media("<sm") {
            flex-wrap: wrap;
        }
    }

    &__item{
        width: 50%;
        aspect-ratio: 1;
        position: relative;
        cursor: pointer;
        
        @include media("<sm") {
            width: 100%;
        }

        img{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top center;
        }
    }

    &__title{
        position: absolute;
        bottom: 30px;
        left: 30px;
        text-transform: uppercase;
        z-index: zindex(above);

        @include media("<sm") {
            bottom: 15px;
            left: 15px;
        }
    }
}
</style>