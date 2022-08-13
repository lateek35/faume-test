<template>
    <div class="FooterPage">
        <div class="FooterPage__content">
            <router-link class="FooterPage__link" :to="'/faq'"><TextP1>Faq</TextP1></router-link>
            <router-link class="FooterPage__link" :to="'/'"><TextP1>Mentions légales</TextP1></router-link>
            <router-link class="FooterPage__link" :to="'/'"><TextP1>CGV</TextP1></router-link>
        </div>
    </div>
</template>

<script>
import TextP1 from "@/components/Atoms/Texts/TextP1.vue";
export default {
    name: "FooterPage",
    components:{
        TextP1
    }
}
</script>

<style lang="scss">
.FooterPage{
    background-color: color(black);
    color: color(white);
    padding-block: 80px;
    display: flex;

    &__content{
        max-width: 800px;
        margin: 0 auto;
        display: flex;
        justify-content: flex-start;
        column-gap: 50px;
        align-items: flex-start;
    }

    &__link{
        color: color(white);
        text-decoration: none;
    }
}
</style>