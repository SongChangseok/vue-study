<script setup>
import { ref } from 'vue'

const show = ref(false)
const toggleHandler = () => (show.value = !show.value)
</script>

<template>
  <button @click="toggleHandler">토글</button>
  <Transition>
    <p v-if="show">안녕</p>
  </Transition>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
