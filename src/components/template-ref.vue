<script setup>
import { ref, onMounted } from 'vue'

const list = ref([1, 2, 3, 4, 5])
const itemRefs = ref([]) // ref 배열은 소스 배열과 동일한 순서를 보장하지 않습니다.

onMounted(() => console.log(itemRefs.value))
</script>

<template>
  <ul>
    <li v-for="item in list" ref="itemRefs">
      {{ item }}
    </li>
  </ul>

  <input :ref="(el) => console.log(el)" />
</template>
