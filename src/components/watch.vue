<script setup>
import { ref, watch } from 'vue'

const question = ref('')
const answer = ref('질문에는 물음표')

watch(question, async (newQuestion, oldQuestion) => {
  console.log(newQuestion, oldQuestion)
  if (newQuestion.indexOf('?') > -1) {
    answer.value = 'loading...'

    try {
      const res = await fetch('https://yesno.wtf/api')
      answer.value = (await res.json()).answer === 'yes' ? '예' : '아니오'
    } catch (error) {
      answer.value = '에러! API에 연결할 수 없습니다. ' + error
    }
  }
})
</script>

<template>
  <p>
    예/아니오 질문:
    <input v-model="question" />
  </p>
  <p>{{ answer }}</p>
</template>
