<template>
  <router-link :to="router" class="monster">
    <img :src="imgLink" />
    <p>{{ data.name }}</p>
    <p>{{ data.email }}</p>
    <p>{{ data.phone }}</p>
    <p>{{ data.address.street }}</p>
  </router-link>
</template>
<script>
export default {
  props: {
    data: {}
  },
  data() {
    return {
      imgLink: `https://robohash.org/${this.data.id}?set=set2&size=180x180`,
      router: `/aboutmonster/${this.data.id}`
    }
  }
}
</script>
<style scoped>
.monster {
  display: inline-block;
  border: 1px solid black;
}
</style>
