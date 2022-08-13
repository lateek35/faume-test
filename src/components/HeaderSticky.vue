<template>
    <header class="HeaderSticky" :class="classes">
        <div class="HeaderSticky__container">
            <div class="HeaderSticky__content">
                <SvgLogo class="HeaderSticky__SvgLogo"/>
                <NavBlock />
                <SideNavButton/>
            </div>
        </div>
    </header>
</template>

<script>
import SvgLogo from '@/components/Atoms/Svg/SvgLogo.vue'
import SideNavButton from '@/components/Molecules/SideNavButton.vue'
import NavBlock from '@/components/Molecules/NavBlock.vue'

export default {
    name: "HeaderSticky",
    components:{
        //ATOMS
        SvgLogo,

        //MOLECULES
        SideNavButton,
        NavBlock,
    },
    data(){
        return {
            scrollVal: 0,
        }
    },
    mounted(){
        window.addEventListener('scroll', this.onScroll);
    },
    methods:{
        onScroll(){
            this.scrollVal = (window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0)
        }
    },
    computed:{
        white(){
            return this.scrollVal > 100;
        },
        classes(){
            return {
                'HeaderSticky--white': this.white,
            };
        }
    },
}
</script>

<style lang="scss">
.HeaderSticky{
    position: sticky;
    top: 0;
    height: 0;
    width: 100%;
    z-index: zindex(header);

    &__content{
        width: 100%;
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        padding: 15px 20px 40px 20px;
        padding-inline: 20px;
        
        position: relative;
        background-color: transparent;
        max-width: $maxContentWidth;
        margin: 0 auto;
    }

    &__container{
        position: relative;

        &:before{
            position: absolute;
            top: 0;
            left: 0;
            content: "";
            width: 100%;
            height: 100%;
            transform: translateY(-102%);
            background-color: (white);
            transition: transform 0.7s $ease-out-quint;
        }
    }

    &__SvgLogo{
        height: 35px;
        position: absolute;
        left: 0;
        right: 0;
        margin: 0 auto;
        fill: color(white);
    }
    &--white{
        background-color: white;

        .NavBlock{
            color: color(black);
        }
        .HeaderSticky__SvgLogo{
            fill: color(black);
        }
        .HeaderSticky__container:before{
            transform: translateY(0);
        }
    }
}
</style>