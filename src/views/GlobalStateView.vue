<template>
  <div>전역변수 테스트 페이지</div>
</template>
<script setup>
import { useListStore } from '@/store/list'
import { storeToRefs } from 'pinia'

const list = useListStore()
const { getDataAll } = storeToRefs(list)
console.log(getDataAll.value)
</script>
