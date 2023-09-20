<script setup>
import Title from './Title.vue'

defineProps(['title'])
const emit = defineEmits(['toggle'])
</script>

<template>
  <div>
    <Title :title="title" />
    <button @click="emit('toggle')">toggle</button>
  </div>
</template>
