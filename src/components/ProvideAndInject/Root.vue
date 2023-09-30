<script setup>
import { provide } from 'vue'
import Children from './Children.vue'

provide(/* 키 */ 'message', /* 값 */ '안녕!')
</script>

<template>
  <h2>root</h2>
  <Children />
</template>
