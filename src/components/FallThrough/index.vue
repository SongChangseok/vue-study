<!-- 
    "폴스루(fallthrough: 대체) 속성"은 컴포넌트에 전달되는 속성 또는 v-on 이벤트 리스너 이지만, 
    이것을 받는 컴포넌트의 props 또는 emits에서 명시적으로 선언되지 않은 속성입니다. 
    일반적인 예로는 class, style, id 속성이 있습니다. 
-->

<script setup>
import MyButton from './MyButton.vue'
</script>

<template>
  <MyButton class="btn" @click="console.log('index')" />
</template>
