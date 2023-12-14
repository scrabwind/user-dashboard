<script setup lang="ts">
  import AdderComponent from '@components/AdderComponent/AdderComponent.vue'
</script>

<template>
  <AdderComponent />
</template>

<style lang="scss">
  @import 'https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap';

  body,
  html {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
  }

  * {
    font-family: Poppins, sans-serif;
    font-size: $font-size;
    color: $color-grey;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
