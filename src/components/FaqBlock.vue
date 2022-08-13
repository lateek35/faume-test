<template>
  <section class="FaqBlock" >
    <div class="FaqBlock__content">
        <TextH2 class="FaqBlock__title">Vos questions les plus demandées:</TextH2>
        <div class="FaqBlock__dropdowns">
            <DropdownButton title="Lorem ipsum dolor sit amet ?" :cid="'question_'+index " v-for="(item, index) in 5" :key="index">
                <template #icon>
                    <SvgChevron/>
                </template>
                <template #content>
                    <TextP1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis cumque, est aperiam eos eligendi quas voluptas animi laboriosam minus ullam quis reiciendis similique vitae aliquid expedita amet eaque possimus rerum?</TextP1>
                </template>
            </DropdownButton>
        </div>
    </div>
  </section>
</template>

<script>
import SvgChevron from '@/components/Atoms/Svg/SvgChevron.vue'
import DropdownButton from '@/components/Atoms/Button/DropdownButton.vue'
import TextP1 from '@/components/Atoms/Texts/TextP1.vue'
import TextH2 from '@/components/Atoms/Texts/TextH2.vue'

export default {
    name: "FaqBlock",
    components:{
        SvgChevron,
        DropdownButton,
        TextP1,
        TextH2
    },
}
</script>

<style lang="scss">
.FaqBlock{
  width: 100%;

  &__title{
    text-align: center;
    margin-bottom: 40px;
  }

  &__content{
    margin-inline: auto;
    width: 100%;
    max-width: $maxContentWidth;
    padding: 100px 30px;
  }

  &__dropdowns{
    margin-inline: auto;
    margin-top: rem(25px);
    width: 100%;
    max-width: 600px;

    .Dropdown + .Dropdown {
      margin-top: 15px;
      @include media('<md') {
        margin-top: 10px;
      }
    }
  }
}
</style>
