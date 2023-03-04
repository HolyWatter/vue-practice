<template>
  <div>
    <div>전역변수 연습장</div>
    <input type="text" v-model="text" />
    <button @click="addList(text)">추가</button>
    <h4>추가된 목록</h4>
    <p v-for="(item, index) in getDataAll" :key="index">{{ item }}</p>
  </div>
</template>
<script setup>
import { computed, ref } from 'vue'
import { useListStore } from '@/store/list'
import { storeToRefs } from 'pinia'
const text = ref('')
const list = useListStore()
const { getDataAll } = storeToRefs(list)
console.log(getDataAll)
function addList() {
  if (!text.value) return
  list.addList(text.value)
  text.value = ''
}
</script>
