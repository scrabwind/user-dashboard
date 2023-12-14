<template>
  <div>test</div>
  <input
    v-model="num1"
    type="number"
  />
  <input
    v-model="num2"
    type="number"
  />
  <span>{{ result }}</span>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue'
  import { add } from '@common/utils/addition.utils'
  import { specificConst } from '@components/AdderComponent/adderComponent.const'
  import type { SpecificConst } from '@components/AdderComponent/adderComponent.types'

  const value: SpecificConst = specificConst.bar

  console.log(value)

  const num1 = ref<number>(0)
  const num2 = ref<number>(0)

  const result = computed<number>(() => add(num1.value, num2.value))
</script>
