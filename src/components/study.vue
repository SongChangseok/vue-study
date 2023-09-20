<script setup>
import { reactive, ref } from 'vue'

const myObject = reactive({
  title: 'Vue에서 목록을 작성하는 방법',
  author: '홍길동',
  publishedAt: '2016-04-10'
})

const todos = ref([
  { name: 'test', isComplete: true },
  { name: 'test2', isComplete: false }
])

const message = ref('')
const name = ref('test')

const greet = (e) => {
  alert(name.value)
  console.log(message.value)
  if (e) alert(e.target.tagName)
}

const list = ref([])
const selectedOptions = ref('')

const options = ref([
  { text: '선택', value: '', disabled: true },
  { text: '하나', value: '1' },
  { text: '둘', value: '2' },
  { text: '셋', value: '3' }
])

const dynamicTrueValue = ref('yes')
const dynamicFalseValue = ref('no')
const toggle = ref(dynamicFalseValue)

const emptyObj = {}
const selected2 = ref(emptyObj)

const lazyInput = ref()
const lazyInput = ref()
</script>

<template>
  <div>lazy: {{ lazyInput }}</div>
  <input v-model.lazy="lazyInput" />
  <input v-model.trim="lazyInput" />

  <div>selected2: {{ selected2 }}</div>
  <select v-model="selected2">
    <option disabled :value="emptyObj">선택</option>
    <option :value="{ test: 1, test2: 2 }">객체</option>
  </select>

  <div>tes: {{ toggle }}</div>
  <input
    type="checkbox"
    v-model="toggle"
    :true-value="dynamicTrueValue"
    :false-value="dynamicFalseValue"
  />

  <div>선택된 옵션: {{ selectedOptions }}</div>
  <select v-model="selectedOptions">
    <option
      v-for="option in options"
      :key="option.value"
      :value="option.value"
      :disabled="option.disabled"
    >
      {{ option.text }}
    </option>
  </select>

  <select v-model="selectedOptions">
    <option disabled value="">선택</option>
    <option>1</option>
    <option>2</option>
    <option>3</option>
  </select>

  <div>체크리스트: {{ list }}</div>
  <input type="checkbox" id="test" value="1" v-model="list" />
  <label for="test">test1</label>
  <input type="checkbox" id="test2" value="2" v-model="list" />
  <label for="test2">test2</label>
  <input type="checkbox" id="test3" value="3" v-model="list" />
  <label for="test3">test3</label>

  <p>입력값: {{ message }}</p>
  <input v-model="message" />

  <button @click="greet">버튼 - 메서드 핸들러</button>
  <button @click="greet()">버튼2 - 인라인 핸들러</button>
  <button @click="greet($event)">버튼3 - 특수 키워드 $event 전달</button>

  <ul>
    <li v-for="value in myObject">
      {{ value }}
    </li>
  </ul>
  <ul>
    <li v-for="n in 10">
      {{ n }}
    </li>
  </ul>
  <ul>
    <template v-for="value in myObject">
      <li>{{ value }}</li>
    </template>
  </ul>
  <ul>
    <template v-for="todo in todos">
      <li v-if="!todo.isComplete">
        {{ todo.name }}
      </li>
    </template>
  </ul>
</template>
