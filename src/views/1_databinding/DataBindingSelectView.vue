<template>
  <div>
    <select v-model="selectedCity" @change="selectCity">
      <option value=""></option>
      <option value="02">서울</option>
      <option value="051">부산</option>
      <option value="031">경기</option>
    </select>
    <br />
    <input
      type="checkbox"
      id="vue"
      value="vue"
      v-model="languageList"
      @change="checkLanguage"
    />
    <label for="vue">Vue</label>
    <input
      type="checkbox"
      id="React"
      value="React"
      v-model="languageList"
      @change="checkLanguage"
    />
    <label for="React">React</label>
    <input
      type="checkbox"
      id="Angular"
      value="Angular"
      v-model="languageList"
      @change="checkLanguage"
    />
    <label for="Angular">Angular</label>
    <p>{{ languageList }}</p>
    <div>
      <input
        type="radio"
        id="javascript"
        value="JS"
        name="lang"
        v-model="selectedLang"
      />
      <label for="javascript">JavaScript</label>
      <input
        type="radio"
        id="typescript"
        value="TS"
        name="lang"
        v-model="selectedLang"
      />
      <label for="typescript">TypeScript</label>
      <p>{{ selectedLang }}</p>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      selectedCity: '02',
      languageList: [],
      selectedLang: ''
    }
  },
  // setup(){},
  // created() {},
  // mounted() {},
  // unmounted() {},
  methods: {
    selectCity() {
      console.log(this.selectedCity)
    },
    checkLanguage() {
      console.log(this.languageList)
    }
  }
}
</script>
