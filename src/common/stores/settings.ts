import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSettingsStore = defineStore(
  'settings',
  () => {
    const fontSize = ref(16)
    const fontColor = ref('#a9b1bd')
    const backgroundColor = ref('#f9f9f9')
    const userSize = ref(8)

    const submitChanges = (
      fontSizeParam: number,
      fontColorParam: string,
      backgroundColorParam: string
    ) => {
      fontSize.value = fontSizeParam
      fontColor.value = fontColorParam
      backgroundColor.value = backgroundColorParam
    }

    const setDefaults = () => {
      fontSize.value = 16
      fontColor.value = '#a9b1bd'
      backgroundColor.value = '#f9f9f9'
      userSize.value = 8
    }

    return {
      fontSize,
      fontColor,
      backgroundColor,
      submitChanges,
      setDefaults,
      userSize
    }
  },
  { persist: true }
)
