<template>
    <Teleport to="body">
        <div class="PopinCart grid" :class="{'is-open': open}">
        <div class="PopinCart__closer" @click="closePopup"></div>
            <div class="PopinCart__container" >
                <div class="PopinCart__icon">
                    <slot name="icon"></slot>
                </div>
                <div class="PopinCart__content" ref="popinContent">
                    <SvgClose class="PopinCart__close" @click="closePopup" />
                    <TextH2 tag="p">
                        <slot></slot>
                    </TextH2>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<script>
import SvgClose from '@/components/Atoms/Svg/SvgClose.vue'
import TextH2 from "@/components/Atoms/Texts/TextH2.vue";

export default {
    name: "PopinCart",
    components:{
        SvgClose,
        TextH2
    },
    props:{
        open: {
            type: Boolean,
            default: false
        }
    },
    emits: ["close"],
    methods:{
        closePopup(){
            this.$emit('close');
        }
    },
}
</script>

<style lang="scss">
.PopinCart {
  position: fixed;
  z-index: zindex(popin);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  &__icon{
    position: absolute;
    margin: 0 auto;
    top: 0;
    width: 100%;
    pointer-events: none;
    z-index: zindex(above);
  }

  &__close {
    position: absolute;
    top: 16px;
    right: 15px;
    width: 40px;
    height: 40px;
    cursor: pointer;
    z-index: zindex(above);

    @include media('<=sm'){
      top: 10px;
      right: 10px;
      width: 30px;
      height: 30px;
    }
  }

  &__closer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
  }

  &__container {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: zindex(above);
    width: 70%;
    max-height: 80vh;
    max-width: 866px;

    transform: translate(-50%, -20%);
    transition: transform 0.6s $ease-out-quint;

    @include media('<=md'){
      width: 85%;
    }

    @include media('<=sm'){
      width: calc( 100% - 25px );
    }

  }

  &__content{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    max-height: 80vh;
    min-height: 200px;
    background: color(white);
    border-radius: 20px;
    filter: drop-shadow(0px 0px 40px rgba(255, 255, 255, 0.31));
  }

  // Apparition
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s $ease-out-quint, visibility 0.3s;

  &.is-open {
    opacity: 1;
    visibility: visible;
    transition: opacity 0.3s $ease-out-quint, visibility 0s;

    .PopinCart__container {
      transform: translate(-50%, -50%);
    }
  }
}
</style>
