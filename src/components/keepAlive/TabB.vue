<script setup>
import { ref } from 'vue'

const message = ref('')
</script>

<template>
  <div>message is {{ message }} <input v-model="message" /></div>
</template>
