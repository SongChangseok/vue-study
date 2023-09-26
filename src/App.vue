<script setup>
import { ref } from 'vue'
import Modifiers from './components/Modifiers/Modifiers.vue'

const myText = ref('')
</script>

<template>
  <Modifiers v-model:title-value.capitalize="myText" />
</template>
