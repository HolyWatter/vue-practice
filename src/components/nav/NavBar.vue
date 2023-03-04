<template>
  <div class="nav">
    <router-link to="/">홈</router-link>
    <router-link to="/pinia">피니아</router-link>
    <router-link to="/globalstate">전역변수 확인</router-link>
    <button @click="clickLoginBtn">로그인</button>
    <login-modal v-if="isLoginModal" :setIsLoginModal="clickLoginBtn" />
  </div>
</template>
<script>
import LoginModal from '../login/LoginModal.vue'
export default {
  components: { LoginModal },
  data() {
    return {
      isLoginModal: false
    }
  },
  methods: {
    clickLoginBtn() {
      this.isLoginModal = !this.isLoginModal
    }
  }
}
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  background-color: red;
  top: 0;
  border: 1px solid black;
  padding: 15px 20px;
  z-index: 2;
}
</style>
