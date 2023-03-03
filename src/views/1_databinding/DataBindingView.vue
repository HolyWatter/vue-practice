<template>
  <div>
    <p>{{ name }}</p>
    <div v-html="htmlString"></div>
    <input type="text" v-model="userId" />
    <button @click="clickBtn">클릭</button>
    <p>Click Count : {{ clickCount }}</p>
    <button @click="clickCountBtn">+1 버튼</button>
    <br />
    <input type=" number" v-model.number="num1" />
    <p>+</p>
    <input type=" number" v-model.number="num2" />
    <p>+</p>
    <p>{{ num1 + num2 }}</p>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      userId: '',
      clickCount: 0,
      name: 'seongsu',
      htmlString: '<p style="color:red;">빨간색 문자</p>',
      num1: 0,
      num2: 0
    }
  },
  // setup() {},
  // created() {},
  // mounted() {},
  // unmounted() {},
  methods: {
    clickBtn() {
      console.log(this.userId)
    },
    clickCountBtn() {
      this.clickCount = this.clickCount + 1
    }
  }
}
</script>
