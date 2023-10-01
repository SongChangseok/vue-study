<script setup>
import { inject } from 'vue'
import myInjectionKey from './keys'

// const message = inject('message')
const injectedMessage = inject(myInjectionKey)
</script>

<template>
  <h4>deep child</h4>
  <!-- <div>inject: {{ message }}</div> -->
  <div>injectedMessage: {{ injectedMessage }}</div>
</template>
