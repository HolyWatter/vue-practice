<template>
  <div class="modal-bg" @click="setIsLoginModal"></div>
  <div class="modal-content">
    <p>로그인 창</p>
    <input
      class="loginInput"
      placeholder="이메일을 입력하세요"
      v-model="loginInfo.email"
    />
    <input
      class="loginInput"
      placeholder="비밀번호를 입력하세요"
      v-model="loginInfo.password"
    />
    <div>
      <button @click="clickSubmit">로그인</button>
      <button @click="setIsLoginModal">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    setIsLoginModal: {}
  },
  data() {
    return {
      loginInfo: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    clickSubmit() {
      console.log(this.loginInfo)
    }
  }
}
</script>
<style scoped>
.modal-bg {
  z-index: 5;
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  width: 100%;
  padding: 0;
  height: 100%;
  background-color: black;
  opacity: 80%;
}
.modal-content {
  position: fixed;
  padding: 20px 30px;
  width: 40%;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  background-color: white;
  z-index: 5;
}
.loginInput {
  margin-bottom: 20px;
}
</style>
