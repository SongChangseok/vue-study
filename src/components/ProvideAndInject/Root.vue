<script setup>
import { provide } from 'vue'
import Children from './Children.vue'
import myInjectionKey from './keys'

// provide(/* 키 */ 'message', /* 값 */ '안녕!')
provide(/* 키 */ myInjectionKey, /* 값 */ '안녕!')
</script>

<template>
  <h2>root</h2>
  <Children />
</template>
