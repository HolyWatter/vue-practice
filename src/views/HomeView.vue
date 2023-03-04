<template>
  <div>
    <input
      class="searchBar"
      type="search"
      placeholder="검색하세요"
      v-model="keyword"
      @input="inputSearchKeyWord"
    />
    <div class="monsterContainer">
      <monster-item
        :data="monster"
        v-for="monster in searchMonster"
        :key="monster.id"
      />
    </div>
  </div>
</template>

<script>
import MonsterItem from '@/components/monster/MonsterItem.vue'

export default {
  components: { MonsterItem },
  data() {
    return {
      keyword: '',
      monsterData: [],
      searchMonster: []
    }
  },
  created() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((res) => {
        this.monsterData = res
        this.searchMonster = this.monsterData
      })
  },
  watch: {},
  methods: {
    inputSearchKeyWord() {
      this.searchMonster = this.monsterData.filter((item) =>
        item.name.toLowerCase().includes(this.keyword.toLowerCase())
      )
    },
    showAllStore() {
      console.log(this.getAllData)
    }
  }
}
</script>

<style scoped>
.searchBar {
  width: 100%;
  margin: 30px 0;
}
.monsterContainer {
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
}
</style>
