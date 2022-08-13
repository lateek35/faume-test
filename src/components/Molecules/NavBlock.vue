<template>
    <nav class="NavBlock" :class="{'NavBlock--open': this.$store.state.menuOpen}">
        <router-link class="NavBlock__link" :to="'/'">HOMME</router-link>
        <router-link class="NavBlock__link" :to="'/'">FEMME</router-link>
        <router-link class="NavBlock__link" :to="'/'">CONCEPT</router-link>
        <router-link class="NavBlock__link" :to="'/faq'">FAQ</router-link>
    </nav>
</template>

<script>
export default {
    name:'NavBlock',
    watch:{
        $route(){
            this.$store.commit('setMenuOpen', false)
        }
    } 
}
</script>

<style lang="scss">
.NavBlock{
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    column-gap: 30px;
    letter-spacing: 1px;
    color: white;

    @include media('<=burger'){
        display: none;
        padding-top: 17vh;
        &--open{
            display: flex;
            z-index: zindex(menu);
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: color(white);
            color: color(black);

            flex-direction: column;
            align-self: start;
            row-gap: 40px;
        }
    }

    &__link{
        font-family: font("sans-serif");
        font-size: rem(14px);
        font-weight: 700;
        color: inherit;
        text-decoration: none;
        @include media('<=burger'){
            font-size: 4vw;
        }
        @include media('<=sm'){
            font-size: rem(30px);
        }
    }
}
</style>