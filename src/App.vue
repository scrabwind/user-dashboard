<script setup lang="ts">
  import { RouterView, RouterLink } from 'vue-router'

  import { useSettingsStore } from '@/common/stores/settings'

  const store = useSettingsStore()
</script>

<template>
  <div class="container">
    <nav class="navigation">
      <router-link to="/">Home</router-link>
      <router-link to="/settings">Settings</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
  @import 'https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap';

  * {
    font-family: Poppins, sans-serif;
    font-size: calc(v-bind('store.fontSize') * 1px);
    color: v-bind('store.fontColor');
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }

  body,
  html {
    padding: 0;
    margin: 0;
  }

  .navigation {
    padding: 16px 32px;
    display: flex;
    gap: 16px;
  }

  .container {
    background-color: v-bind('store.backgroundColor');
    min-width: 100%;
    height: 100vh;
  }
</style>
