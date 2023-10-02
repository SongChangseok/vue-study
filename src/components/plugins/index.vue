<script setup>
import { createApp, inject } from 'vue'
import i18nPlugin from './i18n'

const app = createApp({})
app.use(i18nPlugin, { greetings: { hello: '안녕!' } })

const i18n = inject('i18n')
console.log(i18n.greetings.hello)
</script>

<template>
  <h1>{{ i18n.greetings.hello }}</h1>
</template>
