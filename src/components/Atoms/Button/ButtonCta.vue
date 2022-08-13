<template>
    <button class="ButtonCta" :class="{'ButtonCta--black' : this.white}">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'ButtonCta',
    props:{
        white:{
            default: false,
            type: Boolean
        }
    }
}
</script>

<style lang="scss">
.ButtonCta{
    padding: 20px 30px;
    min-width: 200px;
    font-family: font('sans-serif');
    font-weight: 700;
    font-size: rem(16px);
    text-transform: uppercase;
    cursor: pointer;
    
    transition: 0.6s border $ease-out-quint, 0.6s color $ease-out-quint, 0.6s background-color $ease-out-quint;
    
    border: 1px solid color(white);
    color: color(white);

    @include media("<sm") {
        font-size: rem(14px);
    }

    &:hover{
        border: 1px solid color(white);
        color: color(black);
        background-color: color(white);
    }

    &--black{
        border: 1px solid color(black);
        color: color(black);
        &:hover{
            border: 1px solid color(black);
            color: color(white);
            background-color: color(black);
        }
    }

    @include media('<=sm'){
        min-width: 150px;
        padding: 15px 20px;
    }
}
</style>