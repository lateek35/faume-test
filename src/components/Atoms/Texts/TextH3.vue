<template>
  <component :is="tag" class="TextH3">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name:'TextH3',
  props: {
    tag: {
      type: String,
      required: false,
      default: "h3",
    }
  }
};
</script>

<style lang="scss">
.TextH3 {
    font-family: font("sans-serif");
    font-size: rem(20px);
    font-weight: 700;
    color: inherit;

    @include media("<sm") {
        font-size: rem(20px);
    }
}
</style>
