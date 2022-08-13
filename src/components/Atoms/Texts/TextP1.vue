<template>
  <component :is="tag" class="TextP1">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name:'TextP1',
  props: {
    tag: {
      type: String,
      required: false,
      default: "p",
    }
  }
};
</script>

<style lang="scss">
.TextP1 {
  font-family: font("sans-serif");
  font-size: rem(12px);
  color: inherit;
  line-height: 23px;
}
</style>
