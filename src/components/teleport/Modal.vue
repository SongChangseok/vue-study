<script setup>
import { ref } from 'vue'

const open = ref(false)
const clickOpenHandler = () => (open.value = true)
const clickCloseHandler = () => (open.value = false)
</script>

<template>
  <button @click="clickOpenHandler">모달 열기</button>

  <Teleport to="body">
    <div v-if="open" class="modal">
      <p>모달 내용</p>
      <button @click="clickCloseHandler">닫기</button>
    </div>
  </Teleport>
</template>

<style scoped>
.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
}
</style>
