<template>
  <div>
    <div>asdasd</div>
    <input type="text" name="" id="" :value="userId" readonly />
    <img :src="srcImg" alt="" />
  </div>
  <input type="search" v-model="searchValue" />
  <button :disabled="searchValue === ''">검색</button>
  <div>
    <div :key="city.code" v-for="city in cities">
      <p>{{ city.title }}</p>
      <p>{{ city.code }}</p>
    </div>
  </div>
  <div>
    <p :class="{ active: isClass }">클래스 바인딩</p>
    <button @click="clickChangeBtn">클릭</button>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      isClass: true,
      userId: 'asdfqqq',
      srcImg: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png',
      searchValue: '',
      cities: [
        {
          id: 0,
          title: '서울',
          code: '02'
        },
        {
          id: 1,
          title: '경기',
          code: '031'
        },
        {
          id: 2,
          title: '인천',
          code: '032'
        }
      ]
    }
  },
  methods: {
    clickChangeBtn() {
      this.isClass = !this.isClass
      console.log(this.isClass)
    }
  }
}
</script>
<style scoped>
.active {
  background-color: greenyellow;
  font-weight: 700;
}
.text-red {
  color: red;
}
</style>
