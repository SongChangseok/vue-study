<script setup>
defineOptions({
  inheritAttrs: false // 속성 상속 비활성화, 루트 노드 이외에 다른 엘리먼트에 속성을 적용해야 하는 경우에 사용
})
</script>

<template>
  <button class="large" onclick="console.log('MyButton')">
    <span>풀스루 속성: {{ $attrs }}</span>
  </button>
  <button v-bind="$attrs">풀스루 속성을 이곳에</button>
</template>
