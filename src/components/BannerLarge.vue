<template>
    <section class="BannerLarge">
        <div class="BannerLarge__content">
            <TextH1 class="BannerLarge__title">{{this.title}}</TextH1>
            <ButtonCta @click="onDiscoverClick">Découvrir</ButtonCta>
        </div>
    </section>
</template>

<script>
import TextH1 from "@/components/Atoms/Texts/TextH1.vue";
import ButtonCta from "@/components/Atoms/Button/ButtonCta.vue";

export default {
    name: 'BannerLarge',
    props: {
        title: {
            type: String,
            default: '',
            required: true

        }
    },
    components: {
        TextH1,
        ButtonCta
    },
    methods:{
        onDiscoverClick(){
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        }
    }
}
</script>

<style lang="scss">
.BannerLarge {
    height: 100vh;
    background-size: cover;
    background-position: center center;
    background-image: url('~@/assets/images/femme.jpeg');
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: space-around;

    &__content{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    &__title{
        margin-bottom: 54px;
        color: color(white);
    }
}
</style>