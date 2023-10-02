<script setup>
import { ref } from 'vue'

const count = ref(0)
const clickHandler = () => count.value++
</script>

<template>
  <div>
    <button @click="clickHandler">count: {{ count }}</button>
  </div>
</template>
