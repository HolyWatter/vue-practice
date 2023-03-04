<template>
  <NavBar />
  <router-view class="page"></router-view>
</template>
<script>
import NavBar from '@/components/nav/NavBar.vue'

export default {
  components: { NavBar }
}
</script>
<style scoped>
.page {
  padding-top: 70px;
}
</style>
