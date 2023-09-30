<script setup>
import { ref } from 'vue'
import BaseLayout from './BaseLayout.vue'
</script>

<template>
  <BaseLayout>
    <template #header="headerProps">
      <!-- <h1>다음은 페이지 제목일 수 있습니다.</h1> -->
      {{ headerProps }}
    </template>
    <!-- <template #default> -->
    <p>주요 내용에 대한 단락입니다.</p>
    <p>그리고 또 하나.</p>
    <!-- </template> -->
    <template #footer="{ message }">
      <p>{{ message }}</p>
    </template>
  </BaseLayout>
</template>
