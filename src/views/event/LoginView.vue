<template>
  <form @submit.prevent="submitLoginForm">
    <input
      type="email"
      v-model="loginValue.email"
      placeholder="이메일을 입력해주세요"
    />
    <input
      type="password"
      placeholder="패스워드를 입력해주세요"
      v-model="loginValue.password"
    />
    <button>제출</button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      loginValue: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    submitLoginForm () {
      console.log(this.loginValue)
    }
  }
}
</script>
