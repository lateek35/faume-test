<template>
    <div class="SideNavButton">
        <div class="SideNavButton__cart" @click="onCartClick">
            <img class="SideNavButton__cart__icon" src="@/assets/images/icon-cart.png" alt="Cart button" loading="lazy"/>
            <span class="SideNavButton__item">{{this.$store.state.cartCount}}</span>
        </div>
        <svg @click="onBurgerClick" class="SideNavButton__menu" viewBox="0 0 12 12" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
            <g fill="#1D1D1B">
                <path d="M.5 2.5h11v1H.5z"/>
                <path d="M.5 5.5h11v1H.5z"/>
                <path d="M.5 8.5h11v1H.5z"/>
            </g>
        </svg>
        <PopinCart :open="popinOpen" @close="onClose">Votre panier est vide</PopinCart>
    </div>
</template>

<script>
import PopinCart from '@/components/PopinCart.vue'

export default {
    name:'SideNavButton',
    components:{
        PopinCart
    },
    data() {
      return {
        popinOpen : false,
      }
    },
    methods:{
        onCartClick(){
            this.popinOpen = true;
        },
        onClose(){
            this.popinOpen = false;
        },
        onBurgerClick(){
            this.$store.commit('setMenuOpen', !this.$store.state.menuOpen)
        }
    }
}
</script>

<style lang="scss">
.SideNavButton{
    display: flex;

    &__menu{
        margin-left: 20px;
        width: 30px;
        height: 30px;
        display: none;
        cursor: pointer;
        position: relative;
        z-index: zindex(burger);

        @include media('<=burger'){
            display: block;
            position: absolute;
            right: 20px;
            top: 10px;
        }
    }

    &__cart{
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        cursor: pointer;

        &__icon{
            width: 22px;
            height: 22px;
        }
    }

    &__item{
        font-family: font('sans-serif');
        font-size: 12px;
        color: color(black);
    }
}
</style>