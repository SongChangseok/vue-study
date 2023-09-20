<script setup>
const props = defineProps(['title'])
console.log(props)
</script>

<template>
  <h4>{{ title }}</h4>
</template>
