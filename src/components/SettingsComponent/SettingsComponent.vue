<script setup lang="ts">
  import { useSettingsStore } from '@/common/stores/settings'

  const store = useSettingsStore()
</script>

<template>
  <main class="settings__container">
    <form class="settings__form">
      <label for="font-size">Font Size:</label>
      <input
        type="number"
        id="font-size"
        v-model="store.fontSize"
        class="settings__size"
      />
      <label for="font-color">Font Color:</label>
      <input
        type="color"
        id="font-color"
        v-model="store.fontColor"
        class="settings__color-swatch"
      />
      <label for="background-color">Background Color:</label>
      <input
        type="color"
        id="background-color"
        v-model="store.backgroundColor"
        class="settings__color-swatch"
      />
      <label for="user-size">User Size:</label>
      <input
        type="number"
        id="user-size"
        v-model="store.userSize"
        class="settings__size"
      />
      <button
        class="settings__reset-button"
        @click="store.setDefaults"
      >
        Default
      </button>
    </form>
  </main>
</template>

<style scoped lang="scss">
  .settings {
    &__form {
      display: flex;
      gap: 16px;
      align-items: center;
      justify-content: center;
    }

    &__container {
      padding: 16px 32px;
    }

    &__size {
      width: 3em;
    }

    &__reset-button {
      padding: 8px;
      border: 1px solid #91a0b6;
      border-radius: 4px;
    }

    &__color-swatch {
      appearance: none;
      background-color: transparent;
      width: 30px;
      height: 32px;
      border: none;
      cursor: pointer;

      &::-webkit-color-swatch {
        border-radius: 50%;
        border: 1px solid #000;
      }

      &::-moz-color-swatch {
        border-radius: 50%;
        border: 1px solid #000;
      }
    }
  }
</style>
