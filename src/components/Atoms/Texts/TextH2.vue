<template>
  <component :is="tag" class="TextH2">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name:'TextH2',
  props: {
    tag: {
      type: String,
      required: false,
      default: "h2",
    }
  }
};
</script>

<style lang="scss">
.TextH2 {
    font-family: font("sans-serif");
    font-size: rem(30px);
    font-weight: 700;
    color: inherit;

    @include media("<sm") {
        font-size: rem(18px);
    }
}
</style>
