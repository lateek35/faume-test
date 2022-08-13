<template>
    <section class="CrossLink">
        <div class="CrossLink__content">
            <div class="CrossLink__item">
                <img src="@/assets/images/store.jpeg" alt="Cart button" loading="lazy"/>
            </div>
            <div class="CrossLink__item">
                <ButtonCta :white="true">Découvrir</ButtonCta>
            </div>
        </div>
    </section>
</template>

<script>
import ButtonCta from "@/components/Atoms/Button/ButtonCta.vue";

export default {
    name: 'CrossLink',
    components:{
        ButtonCta,
    }
}
</script>

<style lang="scss">
.CrossLink{
    display: flex;
    width: 100%;

    &__content{
        display: flex;
        width: 100%;
        flex-wrap: nowrap;

        margin-inline: auto;
        width: 100%;
        max-width: $maxContentWidth;
        color: color(white);
        
        @include media('<=sm'){
            flex-wrap: wrap;
        }
    }

    &__item{
        width: 50%;
        aspect-ratio: 1;
        position: relative;
        
        @include media('<=sm'){
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
        &:nth-child(2){
            background-color: color(grey);
            display: flex;
            align-content: center;
            align-items: center;
            justify-content: center;
            @include media('<=sm'){
                aspect-ratio: 1.5;
            }
        }
    }

    &__title{
        position: absolute;
        bottom: 30px;
        left: 30px;
        text-transform: uppercase;
        z-index: zindex(above);
    }
}
</style>