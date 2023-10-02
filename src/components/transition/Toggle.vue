<script setup>
import { ref } from 'vue'

const show = ref(false)
const toggleHandler = () => (show.value = !show.value)
</script>

<template>
  <button @click="toggleHandler">토글</button>
  <Transition name="fade">
    <p v-if="show">안녕</p>
  </Transition>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
