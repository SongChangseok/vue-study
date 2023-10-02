<script setup>
import { shallowRef } from 'vue'
import TabA from './TabA.vue'
import TabB from './TabB.vue'

const current = shallowRef(TabA)
</script>
<template>
  <div>
    <label><input type="radio" :value="TabA" v-model="current" />A</label>
    <label><input type="radio" :value="TabB" v-model="current" />B</label>
  </div>

  <!-- 여러 컴포넌트 간에 동적으로 전환될 때, 컴포넌트 인스턴스를 조건부로 캐시할 수 있는 빌트인 컴포넌트입니다. -->
  <KeepAlive include="TabA">
    <component :is="current" />
  </KeepAlive>
</template>
