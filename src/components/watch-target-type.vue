<script setup>
import { watch, ref } from 'vue'

const x = ref(0)
const y = ref(0)

// 단일 ref
watch(x, (newX) => {
  console.log(`x: ${newX}`)
})

// getter
watch(
  () => x.value + y.value,
  (sum) => {
    console.log(`x+y: ${sum}`)
  }
)

// 여러 소스의 배열
watch([x, () => y.value], ([newX, newY]) => {
  console.log(`x: ${newX}, y: ${newY}`)
})
</script>

<template>
  <input type="number" v-model="x" />
  <input type="number" v-model="y" />
</template>
