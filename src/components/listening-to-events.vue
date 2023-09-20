<script setup>
import { ref, watch } from 'vue'
import BlogPost from './components/BlogPost.vue'

const posts = ref([
  { id: 1, title: 'Vue와 함께한 나의 여행' },
  { id: 2, title: 'Vue로 블로깅하기' },
  { id: 3, title: 'Vue가 재미있는 이유' }
])
const flag = ref(false)
const toggle = () => {
  flag.value = !flag.value
}

watch(flag, (newValue) => console.log(newValue))
</script>

<template>
  <div>flag: {{ flag }}</div>
  <BlogPost v-for="post in posts" :key="post.id" :title="post.title" @toggle="toggle" />
</template>
