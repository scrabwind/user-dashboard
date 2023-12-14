import { defineStore } from 'pinia'
import { ref } from 'vue'
// import type { UserResponse, UserSubset } from '@/common/types/users'

export const useSettingsStore = defineStore(
  'settings',
  () => {
    const fontSize = ref(16)
    const fontColor = ref('#a9b1bd')
    const backgroundColor = ref('#ffffff')
    const userSize = ref(8)

    function submitChanges(
      fontSizeParam: number,
      fontColorParam: string,
      backgroundColorParam: string
    ) {
      fontSize.value = fontSizeParam
      fontColor.value = fontColorParam
      backgroundColor.value = backgroundColorParam

      console.log(backgroundColorParam)
      console.log(backgroundColor.value)
    }

    function setDefaults() {
      fontSize.value = 16
      fontColor.value = '#a9b1bd'
      backgroundColor.value = '#ffffff'
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
