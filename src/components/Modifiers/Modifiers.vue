<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  titleValue: String,
  titleValueModifiers: { default: () => ({}) }
})

const emit = defineEmits(['update:titleValue'])

const emitValue = (e) => {
  let value = e.target.value
  if (props.titleValueModifiers.capitalize) {
    value = value.charAt(0).toUpperCase() + value.slice(1)
  }
  emit('update:titleValue', value)
}

console.log(props.titleValueModifiers)
</script>

<template>
  <input type="text" :value="titleValue" @input="emitValue" />
</template>
