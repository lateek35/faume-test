<template>
  <component :is="tag" class="TextH1">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name:'TextH1',
  props: {
    tag: {
      type: String,
      required: false,
      default: "h1",
    }
  }
};
</script>

<style lang="scss">
.TextH1 {
  font-family: font("sans-serif");
  font-size: rem(100px);
  font-weight: 700;
  color: inherit;
  text-transform: uppercase;
  text-align: center;
  
  @include media('<=sm'){
    font-size: rem(60px);
  }
}
</style>
