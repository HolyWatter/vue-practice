<template>
  <div>
    <router-link to="/">뒤로가기</router-link>
    <h1>This is {{ routeName }} Info</h1>
    <div>
      <img :src="imgSrc" />
      <p>{{ monster?.name }}</p>
      <p>{{ monster.email }}</p>
      <p>{{ monster.phone }}</p>
      <p>{{ monster.company.name }}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      monster: {
        name: '',
        eamil: '',
        phone: '',
        company: {
          name: ''
        }
      },
      routeName: this.$route.params.id,
      imgSrc: ''
    }
  },
  created() {
    fetch(`https://jsonplaceholder.typicode.com/users/${this.routeName}`)
      .then((res) => res.json())
      .then((res) => {
        this.monster = res
      })
    this.imgSrc = `https://robohash.org/${this.routeName}?set=set2&size=180x180`
  },
  watch: {
    routeName: function (routeName) {
      console.log(routeName)
    }
  }
}
</script>
