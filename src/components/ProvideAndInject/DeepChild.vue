<script setup>
import { inject } from 'vue'

const message = inject('message')
</script>

<template>
  <h4>deep child</h4>
  <div>inject: {{ message }}</div>
</template>
