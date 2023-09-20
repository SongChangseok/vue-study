<script setup>
import { reactive, watch, watchEffect, ref } from 'vue'

// const someObject = reactive({ count: 0 })

// watch(someObject, (newValue, oldValue) => {
//   console.log(newValue, oldValue)
// })

// someObject.count++

///////////////////////////////////////////////
/*

const state = reactive({
  someObject: { count: 0 }
})

watch(
  () => state.someObject,
  () => {
    // someObject 객체가 자체가 변경되어야 실행됨.
    console.log('run')
  },
  // deep 옵션을 명시적으로 사용하여 깊은 감시자로 강제할 수 있다.
  // 대신 큰 데이터 구조에서 사용할 떄 비용이 많이 들어 성능에 영향을 줄 수 있다.
  // { deep: true }
  // immediate 옵션을 통해 watch의 콜백을 즉시 실행할 수 있다.
  { immediate: true }
)

state.someObject.count++ // 변경 X
state.someObject = { test: 'test' } // 변경 O

 */

/* 
const url = ref('https://yesno.wtf/api')
const data = ref(null)

const fetchData = async () => {
  const res = await fetch(url.value)
  data.value = await res.json()
}

// case 1:
// fetchData()
// watch(url, fetchData)

// case 2:
// watch(url, fetchData, { immediate: true })

// case 3:
// watchEffect(fetchData)

watch(data, (newValue) => console.log(newValue))
 */

/* 
 // {flush: 'sync'} 옵션을 통해 동일한 틱 내에서 변경 시마다 동기적을로 콜백을 호출하는 경우
 // 비효율적임
const count = ref(0)
const callback = (val, preVal) => console.log('변경이 감지됨!', val, preVal)
const options = { flush: 'sync' }

watch(count, callback, options)

count.value++
// 이어서 callback이 실행됨
count.value++
// 역시 callback이 실행됨
count.value++
// 또 callback이 실행됨
 */


</script>

<template>
  <input v-model="url" />
</template>
