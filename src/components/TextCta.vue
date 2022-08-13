<template>
    <section class="TextCta">
        <div class="TextCta__content">
            <TextH2 class="TextCta__title">Lorem ipsum dolor sit amet</TextH2>
            <TextP1>Nisi culpa velit eiusmod aliqua nulla pariatur adipisicing consequat. Sunt et sint occaecat nulla dolore velit fugiat aliqua ipsum duis irure non do aliqua. Esse cillum amet consequat proident. Nisi culpa velit eiusmod aliqua nulla pariatur adipisicing consequat. Sunt et sint occaecat nulla dolore velit fugiat aliqua ipsum duis irure non do aliqua. Esse cillum amet consequat proident.Nisi culpa velit eiusmod aliqua nulla pariatur adipisicing consequat. Sunt et sint occaecat nulla dolore velit fugiat aliqua ipsum duis irure non do aliqua. Esse cillum amet consequat proident.</TextP1>
            <ButtonCta class="TextCta__cta" :white="true">Découvrir</ButtonCta>
        </div>
    </section>
</template>

<script>
import TextH2 from "@/components/Atoms/Texts/TextH2.vue";
import TextP1 from "@/components/Atoms/Texts/TextP1.vue";
import ButtonCta from "@/components/Atoms/Button/ButtonCta.vue";

export default {
    name: "TextCta",
    components:{
        TextH2,
        TextP1,
        ButtonCta
    }
}
</script>

<style lang="scss">
.TextCta{
    display: flex;
    padding: 118px 0;

    @include media('<=sm'){
        padding: 60px 0;
    }

    &__content{
        width: 100%;
        text-align: center;
        margin-inline:  auto;
        max-width: 777px;
    }

    &__title{
        width: 100%;
        margin-bottom: 40px;
        text-transform: uppercase;
        text-align: center;
    }

    &__cta{
        margin-top: 30px
    }
}
</style>